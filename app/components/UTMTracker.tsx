"use client";
import { useEffect } from 'react';
import { getCurrentUTMParams, storeUTMParams, getTrafficSource } from '@/app/utils/utm';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
    dataLayer?: any[];
  }
}

export default function UTMTracker() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    try {
      // Get current UTM parameters
      const utmParams = getCurrentUTMParams();
      
      // Get complete traffic source information
      const trafficSource = getTrafficSource();
      
      // Store UTM parameters if they exist
      if (Object.keys(utmParams).length > 0) {
        storeUTMParams(utmParams, 30); // Store for 30 days
        
        // Send to Google Analytics if available
        if (window.gtag) {
          window.gtag('event', 'utm_capture', {
            utm_source: utmParams.utm_source,
            utm_medium: utmParams.utm_medium,
            utm_campaign: utmParams.utm_campaign,
            utm_term: utmParams.utm_term,
            utm_content: utmParams.utm_content,
            page_location: window.location.href,
            page_title: document.title
          });
        }
        
        console.log('UTM Parameters captured:', utmParams);
      }
      
      // Always track traffic source
      if (window.gtag) {
        window.gtag('event', 'traffic_source', {
          source: trafficSource.source,
          medium: trafficSource.medium,
          campaign: trafficSource.campaign,
          referrer: trafficSource.referrer,
          page_location: window.location.href
        });
      }
      
      // Store traffic source data
      const trafficData = {
        ...trafficSource,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      };
      
      // Store in localStorage for later use
      const existingData = localStorage.getItem('bibinii_traffic_sources');
      const trafficHistory = existingData ? JSON.parse(existingData) : [];
      
      // Add new traffic source (keep last 10 entries)
      trafficHistory.unshift(trafficData);
      if (trafficHistory.length > 10) {
        trafficHistory.splice(10);
      }
      
      localStorage.setItem('bibinii_traffic_sources', JSON.stringify(trafficHistory));
      
      // Send to custom analytics endpoint if needed
      // This is where you could send data to your own analytics service
      sendToCustomAnalytics(trafficSource, utmParams);
      
    } catch (error) {
      console.warn('UTM Tracker error:', error);
    }
  }, []);

  return null; // This component doesn't render anything
}

// Send data to custom analytics service
async function sendToCustomAnalytics(trafficSource: any, utmParams: any) {
  try {
    // Only send if we have meaningful data
    if (trafficSource.source === 'direct' && Object.keys(utmParams).length === 0) {
      return; // Skip direct traffic with no UTM params
    }
    
    const analyticsData = {
      timestamp: Date.now(),
      url: window.location.href,
      page: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      trafficSource,
      utmParams,
      sessionId: getOrCreateSessionId()
    };
    
    // Send to analytics endpoint (uncomment when ready to collect data)
    /*
    await fetch('/api/analytics/utm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analyticsData)
    });
    */
    
    // For now, just log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Data:', analyticsData);
    }
    
  } catch (error) {
    console.warn('Custom analytics error:', error);
  }
}

// Generate or retrieve session ID
function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem('bibinii_session_id');
  
  if (!sessionId) {
    sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('bibinii_session_id', sessionId);
  }
  
  return sessionId;
}
