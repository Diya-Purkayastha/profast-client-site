import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districts from "../assets/warehouses.json";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom component to programmatically move the map
const FlyToLocation = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 10, {
      duration: 2,
    });
  }
  return null;
};

const CoverageMap = () => {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const markerRefs = useRef({}); // Store refs to markers

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);

    const match = districts.find((d) =>
      d.district.toLowerCase().includes(input.toLowerCase())
    );

    if (match) {
      setSelectedDistrict(match);

      // Open popup when fly-to is done
      setTimeout(() => {
        const marker = markerRefs.current[match.district];
        if (marker) marker.openPopup();
      }, 800);
    }
  };

  return (
    <div className="w-full">
      {/* Search Box */}
      <div className="mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search a district..."
          value={search}
          onChange={handleSearch}
          className="input input-bordered w-full"
        />
      </div>

      {/* Map */}
      <div className="h-[700px] w-full rounded-lg overflow-hidden shadow">
        <MapContainer
          center={[23.685, 90.3563]} // Center of Bangladesh
          zoom={7}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {selectedDistrict && (
            <FlyToLocation
              coords={[selectedDistrict.latitude, selectedDistrict.longitude]}
            />
          )}

          {districts.map((district, i) => (
            <Marker
              key={i}
              position={[district.latitude, district.longitude]}
              ref={(ref) => (markerRefs.current[district.district] = ref)}
            >
              <Popup>
                <strong>{district.district}</strong>
                <br />
                Region: {district.region}
                <br />
                Areas: {district.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
