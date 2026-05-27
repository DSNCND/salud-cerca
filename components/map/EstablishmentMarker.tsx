"use client";

import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import type { Establishment } from "@/lib/types";

type EstablishmentMarkerProps = {
  establishment: Establishment;
  onSelect: (establishment: Establishment) => void;
};

const defaultIcon = new L.Icon({
  iconUrl: "/icons/marker-icon.png",
  iconRetinaUrl: "/icons/marker-icon-2x.png",
  shadowUrl: "/icons/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export function EstablishmentMarker({
  establishment,
  onSelect,
}: EstablishmentMarkerProps) {
  return (
    <Marker
      position={[establishment.lat, establishment.lon]}
      icon={defaultIcon}
      eventHandlers={{
        click: () => onSelect(establishment),
      }}
    >
      <Popup>
        <div>
          <p className="font-semibold">{establishment.nombre}</p>
          <p>{establishment.tipo}</p>
          <p>{establishment.direccion}</p>
          <p>
            {establishment.localidad}, {establishment.provincia}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}