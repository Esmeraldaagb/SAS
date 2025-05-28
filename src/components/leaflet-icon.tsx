// components/MapView.tsx
"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconUrlImport from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrlImport from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrlImport from 'leaflet/dist/images/marker-shadow.png';
const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const DefaultIcon = L.icon({
      iconUrl: iconUrlImport.src,
      iconRetinaUrl: iconRetinaUrlImport.src,
      shadowUrl: shadowUrlImport.src,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    L.Marker.prototype.options.icon = DefaultIcon;


    const map = L.map(mapRef.current).setView([48.8584, 2.2945], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([48.8584, 2.2945]).addTo(map).bindPopup("Tour Eiffel").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="mapId" ref={mapRef} className="h-[500px] w-full rounded-lg shadow" />;
};

export default MapView;
