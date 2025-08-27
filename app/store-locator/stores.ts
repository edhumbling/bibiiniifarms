export type Store = {
  id: string;
  name: string;
  addressLine: string;
  ghanaPostGps: string;
  mapQuery: string;
  lat?: number;
  lng?: number;
  phones?: string[];
  hours?: string;
};

export const stores: Store[] = [
  {
    id: "bibinii-market",
    name: "Bibinii Market",
    addressLine: "31 Atankpa Tettey LK",
    ghanaPostGps: "GC-113-1285",
    mapQuery: "Bibinii Market, 31 Atankpa Tettey LK, GC-113-1285, Ghana",
    lat: 5.60155,
    lng: -0.30487,
    phones: ["+233 54 347 4770"],
    hours: "Mon-Fri: 9AM-5PM; Sat: 10AM-4PM",
  },
];
