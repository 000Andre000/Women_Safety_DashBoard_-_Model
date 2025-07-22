// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import '../../leaflet-routing-machine-3.2.12/dist/leaflet-routing-machine.css'
// import '../../leaflet-routing-machine-3.2.12/dist/leaflet-routing-machine.js';

// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const mapInstance = useRef(null);
//   const markerRefs = useRef([]);
//   const routingControlRef = useRef(null);

//   // Dummy locations (Pokhara, Nepal coordinates)
//   const dummyLocations = [
//     { lat: 28.2380, lng: 83.9956, name: "Dummy Location 1" },
//     { lat: 28.2635, lng: 83.9724, name: "Dummy Location 2" }
//   ];

//   useEffect(() => {
//     // Initialize map only once
//     if (!mapInstance.current) {
//       mapInstance.current = L.map(mapRef.current).setView([28.2380, 83.9956], 13);
      
//       // Add tile layer
//       const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
//       L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
//         attribution: `Leaflet &copy; ${mapLink}, contribution`, 
//         maxZoom: 18 
//       }).addTo(mapInstance.current);

//       // Create custom icon
//       const customIcon = L.icon({
//         iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Generic location icon
//         iconSize: [40, 40]
//       });

//       // Add dummy markers
//       dummyLocations.forEach((location, index) => {
//         const marker = L.marker([location.lat, location.lng], { 
//           icon: customIcon,
//           title: location.name
//         }).addTo(mapInstance.current);
        
//         // Add popup with location name
//         marker.bindPopup(`<b>${location.name}</b>`).openPopup();
        
//         // Store reference to markers
//         markerRefs.current[index] = marker;
//       });

//       // Draw route between dummy markers
//       drawRoute();
//     }

//     // Cleanup function
//     return () => {
//       if (mapInstance.current) {
//         mapInstance.current.remove();
//         mapInstance.current = null;
//       }
//     };
//   }, []);

//   const drawRoute = () => {
//     if (!mapInstance.current) return;

//     // Remove previous routing control if exists
//     if (routingControlRef.current) {
//       mapInstance.current.removeControl(routingControlRef.current);
//     }

//     // Create routing control between dummy locations
//     routingControlRef.current = L.Routing.control({
//       waypoints: [
//         L.latLng(dummyLocations[0].lat, dummyLocations[0].lng),
//         L.latLng(dummyLocations[1].lat, dummyLocations[1].lng)
//       ],
//       routeWhileDragging: false,
//       show: true,
//       addWaypoints: false,
//       draggableWaypoints: false,
//       fitSelectedRoutes: true,
//       lineOptions: {
//         styles: [{ color: '#0066ff', weight: 5 }]
//       },
//       createMarker: () => null // Don't create default markers
//     }).addTo(mapInstance.current);
//   };

//   return (
//     <div 
//       ref={mapRef} 
//       style={{ width: '100%', height: '100vh' }}
//     />
//   );
// };

// export default MapComponent;