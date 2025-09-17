// Map.js
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import { geofencedRegions } from "@/components/data";

function Map() {
  const centerPosition = [26.2, 92.5]; // Center NE India approx

  return (
  <div className="h-screen w-full flex items-center justify-center bg-gray-100">
    <div className="w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={centerPosition}
        zoom={7}
        className="h-full w-full"
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
        />

        {/* Render red zones */}
        {geofencedRegions.map((region) => (
          <Polygon
            key={region.id}
            positions={region.coordinates}
            pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.4 }}
          >
            <Popup>
              <span className="font-medium text-gray-800">🚨 {region.name}</span>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>
    </div>
  </div>
);

}

export default Map;