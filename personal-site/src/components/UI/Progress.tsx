import type { ProgressProps } from "../types/types";

export function ProgressBar({ label, value }: ProgressProps) {
  return (
    <div className="w-full max-w-sm mb-4">
      <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
        <span>{label}</span>
      </div>
      <div className="h-8 w-full rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 transition-[width] duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
