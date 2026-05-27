"use client";

import dynamic from "next/dynamic";
import type { Establishment } from "@/lib/types";

const MapView = dynamic(
  () => import("@/components/map/MapView").then((mod) => mod.MapView),
  {
    ssr: false,
  }
);

type MapClientProps = {
  establishments: Establishment[];
  onSelectEstablishment: (establishment: Establishment) => void;
};

export function MapClient({
  establishments,
  onSelectEstablishment,
}: MapClientProps) {
  return (
    <MapView
      establishments={establishments}
      onSelectEstablishment={onSelectEstablishment}
    />
  );
}