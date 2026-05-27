import type { EstablishmentType } from "@/lib/types";

export type OrientationNeed = "urgencia" | "consulta_general" | "medicacion";

export type OrientationRule = {
  label: string;
  description: string;
  establishmentTypes: EstablishmentType[];
};

export const orientationRules: Record<OrientationNeed, OrientationRule> = {
  urgencia: {
    label: "Urgencia",
    description: "Muestra hospitales cercanos.",
    establishmentTypes: ["hospital"],
  },
  consulta_general: {
    label: "Consulta general",
    description: "Muestra hospitales y centros de salud.",
    establishmentTypes: ["hospital", "centro_salud"],
  },
  medicacion: {
    label: "Medicación",
    description: "Muestra farmacias disponibles.",
    establishmentTypes: ["farmacia"],
  },
};