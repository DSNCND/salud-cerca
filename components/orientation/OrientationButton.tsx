"use client";

type OrientationButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function OrientationButton({
  isOpen,
  onClick,
}: OrientationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
    >
      {isOpen ? "Ocultar orientación" : "Orientación automática"}
    </button>
  );
}