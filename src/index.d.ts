declare module "@vueware/cli-charts" {
  export class BarChart {
    constructor(data: { label: string; value: number; color: string }[]);
    generate(): string;
  }

  export interface BarData {
    label: string;
    value: number;
    color: string;
  }
}
