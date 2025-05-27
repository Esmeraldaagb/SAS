'use client';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/components/leaflet-icon'; 

const position: [number, number] = [6.3753, 2.4333]; 

const MapLocation = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            📍 Cotonou, Quartier St Rita – Près de l’Église Catholique
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLocation;
