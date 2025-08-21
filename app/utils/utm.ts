// UTM Parameter Tracking Utilities

export interface UTMParams {
  utm_source?: string;      // Traffic source (google, facebook, newsletter, etc.)
  utm_medium?: string;      // Marketing medium (cpc, email, social, organic, etc.)
  utm_campaign?: string;    // Campaign name (spring_sale, product_launch, etc.)
  utm_term?: string;        // Paid search keywords
  utm_content?: string;     // Content variation (ad_variant_a, banner_top, etc.)
}

export interface TrafficSource {
  source: string;
  medium: string;
  campaign?: string;
  term?: string;
  content?: string;
  timestamp: number;
  page: string;
  referrer: string;
}

// Extract UTM parameters from URL
export function extractUTMParams(url: string): UTMParams {
  const urlObj = new URL(url);
  const params: UTMParams = {};
  
  const utmKeys: (keyof UTMParams)[] = [
    'utm_source',
    'utm_medium', 
    'utm_campaign',
    'utm_term',
    'utm_content'
  ];
  
  utmKeys.forEach(key => {
    const value = urlObj.searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  });
  
  return params;
}

// Get current UTM parameters from browser
export function getCurrentUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  
  return extractUTMParams(window.location.href);
}

// Store UTM parameters in localStorage with expiration
export function storeUTMParams(params: UTMParams, expirationDays: number = 30): void {
  if (typeof window === 'undefined') return;
  
  const data = {
    params,
    timestamp: Date.now(),
    expiration: Date.now() + (expirationDays * 24 * 60 * 60 * 1000)
  };
  
  localStorage.setItem('bibinii_utm_params', JSON.stringify(data));
}

// Retrieve stored UTM parameters
export function getStoredUTMParams(): UTMParams | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('bibinii_utm_params');
    if (!stored) return null;
    
    const data = JSON.parse(stored);
    
    // Check if expired
    if (Date.now() > data.expiration) {
      localStorage.removeItem('bibinii_utm_params');
      return null;
    }
    
    return data.params;
  } catch (error) {
    console.warn('Error retrieving UTM params:', error);
    return null;
  }
}

// Detect traffic source from referrer
export function detectTrafficSource(referrer: string): { source: string; medium: string } {
  if (!referrer) {
    return { source: 'direct', medium: 'none' };
  }
  
  const domain = new URL(referrer).hostname.toLowerCase();
  
  // Search engines
  if (domain.includes('google')) return { source: 'google', medium: 'organic' };
  if (domain.includes('bing')) return { source: 'bing', medium: 'organic' };
  if (domain.includes('yahoo')) return { source: 'yahoo', medium: 'organic' };
  if (domain.includes('duckduckgo')) return { source: 'duckduckgo', medium: 'organic' };
  
  // Social media
  if (domain.includes('facebook')) return { source: 'facebook', medium: 'social' };
  if (domain.includes('twitter') || domain.includes('x.com')) return { source: 'twitter', medium: 'social' };
  if (domain.includes('instagram')) return { source: 'instagram', medium: 'social' };
  if (domain.includes('linkedin')) return { source: 'linkedin', medium: 'social' };
  if (domain.includes('youtube')) return { source: 'youtube', medium: 'social' };
  if (domain.includes('tiktok')) return { source: 'tiktok', medium: 'social' };
  if (domain.includes('whatsapp')) return { source: 'whatsapp', medium: 'social' };
  
  // Email providers
  if (domain.includes('gmail') || domain.includes('outlook') || domain.includes('yahoo')) {
    return { source: 'email', medium: 'email' };
  }
  
  // Default referral
  return { source: domain, medium: 'referral' };
}

// Get complete traffic source information
export function getTrafficSource(): TrafficSource {
  if (typeof window === 'undefined') {
    return {
      source: 'server',
      medium: 'ssr',
      timestamp: Date.now(),
      page: '',
      referrer: ''
    };
  }
  
  const utmParams = getCurrentUTMParams();
  const referrer = document.referrer;
  const currentPage = window.location.pathname;
  
  let source: string;
  let medium: string;
  let campaign: string | undefined;
  let term: string | undefined;
  let content: string | undefined;
  
  if (utmParams.utm_source) {
    // UTM parameters take precedence
    source = utmParams.utm_source;
    medium = utmParams.utm_medium || 'unknown';
    campaign = utmParams.utm_campaign;
    term = utmParams.utm_term;
    content = utmParams.utm_content;
  } else {
    // Detect from referrer
    const detected = detectTrafficSource(referrer);
    source = detected.source;
    medium = detected.medium;
  }
  
  return {
    source,
    medium,
    campaign,
    term,
    content,
    timestamp: Date.now(),
    page: currentPage,
    referrer
  };
}

// Build UTM URL
export function buildUTMUrl(baseUrl: string, params: UTMParams): string {
  const url = new URL(baseUrl);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });
  
  return url.toString();
}

// Common UTM campaign builders
export const UTMCampaigns = {
  // Social media campaigns
  facebook: (campaign: string, content?: string) => ({
    utm_source: 'facebook',
    utm_medium: 'social',
    utm_campaign: campaign,
    utm_content: content
  }),
  
  instagram: (campaign: string, content?: string) => ({
    utm_source: 'instagram',
    utm_medium: 'social',
    utm_campaign: campaign,
    utm_content: content
  }),
  
  twitter: (campaign: string, content?: string) => ({
    utm_source: 'twitter',
    utm_medium: 'social',
    utm_campaign: campaign,
    utm_content: content
  }),
  
  // Email campaigns
  newsletter: (campaign: string, content?: string) => ({
    utm_source: 'newsletter',
    utm_medium: 'email',
    utm_campaign: campaign,
    utm_content: content
  }),
  
  // Google Ads
  googleAds: (campaign: string, adGroup?: string, keyword?: string) => ({
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: campaign,
    utm_content: adGroup,
    utm_term: keyword
  }),
  
  // Influencer campaigns
  influencer: (influencerName: string, campaign: string) => ({
    utm_source: 'influencer',
    utm_medium: 'social',
    utm_campaign: campaign,
    utm_content: influencerName
  }),
  
  // QR codes
  qrCode: (location: string, campaign: string) => ({
    utm_source: 'qr_code',
    utm_medium: 'offline',
    utm_campaign: campaign,
    utm_content: location
  })
};
