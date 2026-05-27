import establishments from "@/data/establishments.json";
import { SaludCercaApp } from "@/components/SaludCercaApp";
import type { Establishment } from "@/lib/types";

export default function HomePage() {
  const data = establishments as Establishment[];

  return <SaludCercaApp establishments={data} />;
}