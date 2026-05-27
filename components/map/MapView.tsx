"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import type { Establishment } from "@/lib/types";
import { EstablishmentMarker } from "./EstablishmentMarker";

type MapViewProps = {
  establishments: Establishment[];
  onSelectEstablishment: (establishment: Establishment) => void;
};

export function MapView({
  establishments,
  onSelectEstablishment,
}: MapViewProps) {
  return (
    <div className="h-[60vh] w-full overflow-hidden rounded-lg border">
      <MapContainer
        center={[-34.6037, -58.3816]}
        zoom={11}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {establishments.map((establishment) => (
          <EstablishmentMarker
            key={establishment.id}
            establishment={establishment}
            onSelect={onSelectEstablishment}
          />
        ))}
      </MapContainer>
    </div>
  );
}