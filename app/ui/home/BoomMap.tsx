import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mockBooms = [
  {
    id: 1,
    lat: 45.677,
    lng: -111.0429,
    intensity: 8,
    type: "Thunder-like",
    timestamp: "2024-01-07 14:30",
    description: "Massive boom heard downtown!",
  },
  {
    id: 2,
    lat: 45.682,
    lng: -111.052,
    intensity: 6,
    type: "Sharp Crack",
    timestamp: "2024-01-06 09:15",
    description: "Quick sharp sound near MSU",
  },
  {
    id: 3,
    lat: 45.665,
    lng: -111.038,
    intensity: 9,
    type: "Rumbling",
    timestamp: "2024-01-05 22:45",
    description: "Long rumbling boom that shook windows",
  },
];

const BoomMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken] = useState(
    "pk.eyJ1Ijoibmlja3BhcGEiLCJhIjoiY21jc2luMGQxMTMzMTJqcTAyNTRmaWszdiJ9.iodin8iWMgR5O3KcsKSA5w"
  );
  const [tokenSet] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenSet) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-111.0429, 45.677], // Bozeman coordinates
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add boom markers
    mockBooms.forEach((boom) => {
      const intensityColor =
        boom.intensity >= 8
          ? "#ff4444"
          : boom.intensity >= 6
          ? "#ff8800"
          : "#ffaa00";

      // Create marker element
      const markerEl = document.createElement("div");
      markerEl.className = "boom-marker";
      markerEl.style.cssText = `
        width: ${20 + boom.intensity * 2}px;
        height: ${20 + boom.intensity * 2}px;
        background: ${intensityColor};
        border: 2px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 20px ${intensityColor}66;
        animation: pulse 2s infinite;
      `;

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm mb-1">${boom.type} Boom</h3>
            <p class="text-xs mb-1">Intensity: ${boom.intensity}/10</p>
            <p class="text-xs mb-1">${boom.timestamp}</p>
            <p class="text-xs">${boom.description}</p>
          </div>
        `);

      // Add marker
      new mapboxgl.Marker(markerEl)
        .setLngLat([boom.lng, boom.lat])
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, tokenSet]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default BoomMap;
