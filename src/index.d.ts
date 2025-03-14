declare module "@vueware/cli-charts" {
  export class BarChart {
    constructor(
      data: { label: string; value: number; color: string }[],
      title?: string
    );
    generate(): string;
  }

  export type BarData = {
    label: string;
    value: number;
    color: string;
    valueFormatter?: (value: number) => string;
  };
}
