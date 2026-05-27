import type { Establishment, EstablishmentType } from "@/lib/types";

export type EstablishmentTypeFilter = EstablishmentType[] | "all";

export function filterEstablishmentsByTypes(
  establishments: Establishment[],
  selectedTypes: EstablishmentTypeFilter
): Establishment[] {
  if (selectedTypes === "all") {
    return establishments;
  }

  if (selectedTypes.length === 0) {
    return [];
  }

  return establishments.filter((establishment) =>
    selectedTypes.includes(establishment.tipo)
  );
}