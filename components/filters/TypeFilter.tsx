"use client";

import type { EstablishmentType } from "@/lib/types";

type TypeFilterProps = {
  selectedTypes: EstablishmentType[] | "all";
  onChange: (types: EstablishmentType[] | "all") => void;
};

const typeOptions: {
  label: string;
  value: EstablishmentType;
}[] = [
  { label: "Hospitales", value: "hospital" },
  { label: "Centros de salud", value: "centro_salud" },
  { label: "Farmacias", value: "farmacia" },
];

export function TypeFilter({ selectedTypes, onChange }: TypeFilterProps) {
  const activeTypes =
    selectedTypes === "all"
      ? typeOptions.map((option) => option.value)
      : selectedTypes;

  function handleToggle(type: EstablishmentType) {
    if (selectedTypes === "all") {
      const nextTypes = activeTypes.filter((activeType) => activeType !== type);
      onChange(nextTypes);
      return;
    }

    const isSelected = selectedTypes.includes(type);

    const nextTypes = isSelected
      ? selectedTypes.filter((selectedType) => selectedType !== type)
      : [...selectedTypes, type];

    onChange(nextTypes);
  }

  function handleSelectAll() {
    onChange("all");
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleSelectAll}
        className={[
          "rounded-full border px-3 py-2 text-sm transition",
          selectedTypes === "all"
            ? "border-slate-900 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-slate-700",
        ].join(" ")}
      >
        Todos
      </button>

      <div className="flex flex-wrap gap-2">
        {typeOptions.map((option) => {
          const isActive = activeTypes.includes(option.value);

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleToggle(option.value)}
              className={[
                "rounded-full border px-3 py-2 text-sm transition",
                isActive
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}