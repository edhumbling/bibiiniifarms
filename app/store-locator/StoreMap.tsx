'use client';

import Link from "next/link";
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

function buildGoogleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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

  const storeSearchUrl = primaryStore ? buildGoogleMapsSearchUrl(primaryStore.mapQuery) : null;

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

      {/* Top Center Overlay: Message + CTAs + Store Card */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 px-4 w-full max-w-3xl">
        <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg px-6 py-4">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-800">
              We are currently working on partnering with stores. In the meantime, you can order online.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={locateMe}
                className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-6 py-2.5 font-semibold hover:brightness-110 transition-colors"
                aria-label="Find stores near me"
              >
                Find stores near me
              </button>
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-6 py-2.5 font-semibold hover:bg-emerald-glow/10 transition-colors"
              >
                Order online
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full text-emerald-glow px-4 py-2 font-semibold hover:underline"
              >
                Contact us
              </Link>
            </div>
          </div>

          {primaryStore ? (
            <div className="mt-5 border-t border-gray-200 pt-4">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Featured store</div>
                  <div className="text-lg font-bold text-gray-900">{primaryStore.name}</div>
                  <div className="text-sm text-gray-700">{primaryStore.addressLine}</div>
                  <div className="text-sm text-gray-700">Ghana Post GPS: {primaryStore.ghanaPostGps}</div>
                  {primaryStore.phones && primaryStore.phones.length ? (
                    <div className="text-sm text-gray-700 mt-2">
                      Phone: {primaryStore.phones.map((p, idx) => (
                        <a key={p} href={toTelHref(p)} className="text-emerald-glow hover:underline">
                          {p}{idx < primaryStore.phones!.length - 1 ? ', ' : ''}
                        </a>
                      ))}
                    </div>
                  ) : null}
                  {primaryStore.hours ? (
                    <div className="text-sm text-gray-700">Hours: {primaryStore.hours}</div>
                  ) : null}
                </div>
                <div className="flex items-center gap-2">
                  {storeSearchUrl ? (
                    <a
                      href={storeSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-4 py-2 text-sm font-semibold hover:brightness-110 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          {status ? (
            <div className="mt-2 text-sm text-red-600">{status}</div>
          ) : null}
        </div>
      </div>

      {/* Top Right Overlay: Controls */}
      <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
        <button
          onClick={zoomIn}
          className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur shadow flex items-center justify-center text-gray-900 font-bold hover:bg-white"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur shadow flex items-center justify-center text-gray-900 font-bold hover:bg-white"
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          onClick={resetCenter}
          className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur shadow flex items-center justify-center text-gray-900 text-xs font-semibold hover:bg-white"
          aria-label="Reset view"
        >
          Rst
        </button>
      </div>
    </div>
  );
}
