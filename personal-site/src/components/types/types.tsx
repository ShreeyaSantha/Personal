export type Project = {
  title: string;
  description?: string;
  langauges?: string[];
};

export type ProgressProps = {
  label: string;
  value: number; // 0–100
};