'use client';

import { useEffect, useRef } from 'react';

type LatLng = { lat: number; lng: number };

type GoogleMapProps = {
  apiKey: string;
  center: LatLng;
  zoom: number;
  marker?: { lat: number; lng: number; title?: string } | null;
  className?: string;
};

declare global {
  interface Window {
    google: any;
  }
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
      resolve();
      return;
    }

    const existing = document.getElementById('google-maps-js');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', (e) => reject(e));
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-js';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=beta&libraries=marker`;
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.head.appendChild(script);
  });
}

export default function GoogleMap({ apiKey, center, zoom, marker, className }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    let canceled = false;
    loadGoogleMaps(apiKey)
      .then(async () => {
        if (canceled || !mapRef.current) return;

        // Ensure libraries are available (maps + marker)
        const mapsLib = await (window.google.maps as any).importLibrary('maps');
        const markerLib = await (window.google.maps as any).importLibrary('marker');

        const Map = (mapsLib as any).Map;
        const AdvancedMarkerElement = (markerLib as any).AdvancedMarkerElement;
        const PinElement = (markerLib as any).PinElement;

        const map = new Map(mapRef.current, {
          center,
          zoom,
          mapId: undefined, // If you have a Map ID, set it here
          disableDefaultUI: true,
          gestureHandling: 'greedy',
        });
        mapInstanceRef.current = map;

        if (marker && typeof marker.lat === 'number' && typeof marker.lng === 'number') {
          // Create a pin with the company logo as the glyph
          const img = document.createElement('img');
          img.src = '/bibinii logo text white.svg';
          img.alt = 'Bibinii Farms';
          img.style.width = '22px';
          img.style.height = '22px';
          img.style.objectFit = 'contain';

          const pin = new PinElement({
            glyph: img,
          });

          new AdvancedMarkerElement({
            map,
            position: marker,
            title: marker.title || 'Bibinii Farms',
            content: pin.element,
          });
        }
      })
      .catch(() => {
        // Swallow errors; fallback UI is handled by parent component when no API key
      });

    return () => {
      canceled = true;
    };
  }, [apiKey, center.lat, center.lng, zoom, marker?.lat, marker?.lng, marker?.title]);

  return <div ref={mapRef} className={className} />;
}


