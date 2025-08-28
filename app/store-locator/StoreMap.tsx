'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Store } from "./stores";
import dynamic from "next/dynamic";

type LatLng = { lat: number; lng: number };

const DEFAULT_CENTER: LatLng = { lat: 7.9465, lng: -1.0232 }; // Ghana center
const MIN_ZOOM = 3;
const MAX_ZOOM = 18;
const DEFAULT_ZOOM = 7;

function buildGoogleMapsEmbedUrlFromLatLng(center: LatLng, zoom: number) {
  const safeZoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
  const q = encodeURIComponent(`${center.lat},${center.lng}`);
  return `https://maps.google.com/maps?q=${q}&z=${safeZoom}&ie=UTF8&iwloc=&output=embed`;
}

function buildGoogleMapsSearchUrlFromLatLng(center: LatLng) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.lat + ',' + center.lng)}`;
}

function toTelHref(num: string) {
  const digits = num.replace(/\D+/g, "");
  return `tel:+${digits}`;
}

export default function StoreMap({ stores }: { stores?: Store[] }) {
  const [center, setCenter] = useState<LatLng>(DEFAULT_CENTER);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
  const [status, setStatus] = useState<string | null>(null);
  const apiKey = typeof window !== 'undefined' ? (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '') : '';
  const GoogleMap = useMemo(() => dynamic(() => import('./GoogleMap'), { ssr: false }), []);

  const primaryStore = stores && stores.length > 0 ? stores[0] : null;

  useEffect(() => {
    if (primaryStore?.lat && primaryStore?.lng) {
      setCenter({ lat: primaryStore.lat, lng: primaryStore.lng });
      setZoom(15);
    } else if (primaryStore) {
      setZoom(14);
    }
  }, [primaryStore]);

  const mapSrc = useMemo(() => buildGoogleMapsEmbedUrlFromLatLng(center, zoom), [center, zoom]);

  const locateMe = useCallback(() => {
    const zoomToMax = () => setZoom(MAX_ZOOM);
    if ('geolocation' in navigator) {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setCenter({ lat: latitude, lng: longitude });
          zoomToMax();
          setStatus(null);
        },
        () => {
          if (primaryStore?.lat && primaryStore?.lng) {
            setCenter({ lat: primaryStore.lat, lng: primaryStore.lng });
            zoomToMax();
          }
          setStatus('Unable to retrieve your location.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      if (primaryStore?.lat && primaryStore?.lng) {
        setCenter({ lat: primaryStore.lat, lng: primaryStore.lng });
        zoomToMax();
      }
      setStatus('Geolocation is not supported by your browser.');
    }
  }, [primaryStore]);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(z + 1, MAX_ZOOM)), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(z - 1, MIN_ZOOM)), []);

  const googleMapsViewUrl = useMemo(() => buildGoogleMapsSearchUrlFromLatLng(center), [center]);

  return (
    <div className="relative h-[100vh]">
      {/* Map: Prefer Google Maps JS with custom logo pin if API key available; else fallback to iframe */}
      {apiKey ? (
        <GoogleMap
          apiKey={apiKey}
          center={center}
          zoom={zoom}
          marker={primaryStore?.lat && primaryStore?.lng ? { lat: primaryStore.lat, lng: primaryStore.lng, title: primaryStore.name } : undefined}
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <iframe
          title="Bibinii Stores Map"
          src={mapSrc}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}

      {/* Compact Store Card (top-left) */}
      {primaryStore ? (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-white/90 backdrop-blur rounded-lg shadow px-4 py-3 max-w-sm">
            <div className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold">Store</div>
            <div className="text-base font-semibold text-gray-900">{primaryStore.name}</div>
            <div className="text-xs text-gray-700">{primaryStore.addressLine}</div>
            <div className="text-xs text-gray-700">Ghana Post GPS: {primaryStore.ghanaPostGps}</div>
            {primaryStore.phones && primaryStore.phones.length ? (
              <div className="text-xs text-gray-700 mt-1">
                Phone: {primaryStore.phones.map((p, idx) => (
                  <a key={p} href={toTelHref(p)} className="text-emerald-glow hover:underline">
                    {p}{idx < primaryStore.phones!.length - 1 ? ', ' : ''}
                  </a>
                ))}
              </div>
            ) : null}
            {primaryStore.hours ? (
              <div className="text-xs text-gray-700">Hours: {primaryStore.hours}</div>
            ) : null}

            {/* View on Google Maps */}
            <div className="mt-2">
              <a
                href={googleMapsViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-4 py-2 text-xs font-semibold hover:bg-red-700 transition-colors"
              >
                View on Google Maps
              </a>
            </div>

            {status ? (
              <div className="mt-1 text-[11px] text-red-600">{status}</div>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Top Right Overlay: Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={zoomIn}
          className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur shadow flex items-center justify-center text-gray-900 font-bold hover:bg-white"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur shadow flex items-center justify-center text-gray-900 font-bold hover:bg-white"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>
    </div>
  );
}
