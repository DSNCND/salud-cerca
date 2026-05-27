"use client";

import {
  orientationRules,
  type OrientationNeed,
} from "@/lib/orientationRules";
import { OrientationOption } from "./OrientationOption";

type OrientationPanelProps = {
  onSelectNeed: (need: OrientationNeed) => void;
};

export function OrientationPanel({ onSelectNeed }: OrientationPanelProps) {
  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="text-base font-semibold">Orientación automática</h2>

      <p className="mt-1 text-sm text-slate-600">
        Seleccioná una necesidad para filtrar los establecimientos recomendados.
      </p>

      <div className="mt-4 space-y-2">
        {Object.entries(orientationRules).map(([need, rule]) => (
          <OrientationOption
            key={need}
            need={need as OrientationNeed}
            rule={rule}
            onSelect={onSelectNeed}
          />
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Esta orientación no constituye diagnóstico médico. Solo ayuda a ubicar
        el tipo de establecimiento más adecuado según la necesidad seleccionada.
      </p>
    </section>
  );
}