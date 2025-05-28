import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer center={[5.3599517, -4.0082563]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[5.3599517, -4.0082563]}>
        <Popup>
          Société Africaine des Services
        </Popup>
      </Marker>
    </MapContainer>
  );
}
