export type BarData = {
  label: string;
  value: number;
  color: string;
  valueFormatter?: (value: number) => string;
};

const colors: Record<string, string> = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  reset: "\x1b[0m",
};

export class BarChart {
  private data: BarData[];
  private width: number;

  constructor(data: BarData[], width: number = 40) {
    this.data = data.map((item) => ({
      ...item,
      color: colors[item.color] || item.color,
    }));
    this.width = width;
  }

  private getMaxValue(): number {
    return Math.max(...this.data.map((d) => d.value));
  }

  private normalizeData(): number[] {
    const max = this.getMaxValue();
    return this.data.map((d) => Math.round((d.value / max) * this.width));
  }

  public generate(): string {
    const normalizedData = this.normalizeData();
    let chart = "";
    this.data.forEach((item, index) => {
      const { label, color, value, valueFormatter } = item;
      const barLength = normalizedData[index];
      const formattedValue = valueFormatter
        ? valueFormatter(value)
        : value.toString();
      chart += `${label.padEnd(15)} ${color}${"█".repeat(
        barLength
      )}\x1b[0m ${formattedValue}\n`;
    });

    return chart;
  }
}
