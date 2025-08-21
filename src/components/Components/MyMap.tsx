import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const position: [number, number] = [23.8103, 90.4125]; // Dhaka

export default function MyMap() {
    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
        >
            {/* OpenStreetMap Tiles */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {/* Marker */}
            <Marker position={position}>
                <Popup>
                    Dhaka City <br /> Welcome!
                </Popup>
            </Marker>
        </MapContainer>
    );
}
