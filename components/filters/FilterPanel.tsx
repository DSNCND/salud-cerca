"use client";

import type { EstablishmentType } from "@/lib/types";
import { TypeFilter } from "./TypeFilter";

type FilterPanelProps = {
  selectedTypes: EstablishmentType[] | "all";
  onTypesChange: (types: EstablishmentType[] | "all") => void;
};

export function FilterPanel({
  selectedTypes,
  onTypesChange,
}: FilterPanelProps) {
  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="mb-3 text-base font-semibold">Filtros</h2>

      <TypeFilter selectedTypes={selectedTypes} onChange={onTypesChange} />
    </section>
  );
}