export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3">
      <div className="w-8" />

      <h1 className="text-lg font-semibold">Salud Cerca</h1>

      <button
        type="button"
        className="rounded-md border px-3 py-1 text-sm"
      >
        Filtros
      </button>
    </header>
  );
}