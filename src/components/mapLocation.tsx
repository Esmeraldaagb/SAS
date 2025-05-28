import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./map"), {
  ssr: false, 
});

export default function MapLocation() {
  return (
    <div className="map-container">
      <DynamicMap />
    </div>
  );
}
