"use client";

import type { OrientationNeed, OrientationRule } from "@/lib/orientationRules";

type OrientationOptionProps = {
  need: OrientationNeed;
  rule: OrientationRule;
  onSelect: (need: OrientationNeed) => void;
};

export function OrientationOption({
  need,
  rule,
  onSelect,
}: OrientationOptionProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(need)}
      className="w-full rounded-lg border bg-white p-3 text-left transition hover:bg-slate-50"
    >
      <p className="text-sm font-semibold">{rule.label}</p>
      <p className="mt-1 text-sm text-slate-600">{rule.description}</p>
    </button>
  );
}