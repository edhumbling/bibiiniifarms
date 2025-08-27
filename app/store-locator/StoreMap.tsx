'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Store } from "./stores";

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

function buildGoogleMapsEmbedUrlFromQuery(query: string, zoom: number) {
  const safeZoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${safeZoom}&ie=UTF8&iwloc=&output=embed`;
}

function toTelHref(num: string) {
  const digits = num.replace(/\D+/g, "");
  return `tel:+${digits}`;
}

export default function StoreMap({ stores }: { stores?: Store[] }) {
  const [center, setCenter] = useState<LatLng>(DEFAULT_CENTER);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
  const [status, setStatus] = useState<string | null>(null);

  const primaryStore = stores && stores.length > 0 ? stores[0] : null;

  useEffect(() => {
    if (primaryStore) {
      setZoom(14);
    }
  }, [primaryStore]);

  const mapSrc = useMemo(() => {
    if (primaryStore) {
      return buildGoogleMapsEmbedUrlFromQuery(primaryStore.mapQuery, zoom);
    }
    return buildGoogleMapsEmbedUrlFromLatLng(center, zoom);
  }, [primaryStore, center, zoom]);

  const locateMe = useCallback(() => {
    if (!('geolocation' in navigator)) {
      setStatus('Geolocation is not supported by your browser.');
      return;
    }
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCenter({ lat: latitude, lng: longitude });
        setZoom(13);
        setStatus(null);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setStatus('Location permission denied.');
        } else {
          setStatus('Unable to retrieve your location.');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(z + 1, MAX_ZOOM)), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(z - 1, MIN_ZOOM)), []);
  const resetCenter = useCallback(() => {
    setCenter(DEFAULT_CENTER);
    setZoom(DEFAULT_ZOOM);
    setStatus(null);
  }, []);

  return (
    <div className="relative h-[100vh]">
      {/* Map Iframe */}
      <iframe
        title="Bibinii Stores Map"
        src={mapSrc}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

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
        <button
          onClick={resetCenter}
          className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur shadow flex items-center justify-center text-gray-900 text-[11px] font-semibold hover:bg-white"
          aria-label="Reset view"
        >
          Rst
        </button>
        <button
          onClick={locateMe}
          className="w-9 h-9 rounded-lg bg-luminous-green text-white shadow flex items-center justify-center text-[11px] font-semibold hover:brightness-110"
          aria-label="Locate me"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
