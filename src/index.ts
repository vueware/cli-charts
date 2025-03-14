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
  private title?: string;
  constructor(data: BarData[], title?: string) {
    this.data = data.map((item) => ({
      ...item,
      color: colors[item.color] || item.color,
    }));
    this.title = title;
  }

  private getMaxValue(): number {
    return Math.max(...this.data.map((d) => d.value));
  }

  private normalizeData(): number[] {
    const max = this.getMaxValue();
    return this.data.map((d) => Math.round((d.value / max) * 40));
  }

  private formatTitle(title: string): string {
    return ` \x1b[1m\x1b[34m${title.toUpperCase()}\x1b[0m`;
  }

  public generate(): string {
    const normalizedData = this.normalizeData();
    let chart = "";

    chart += `+${"-".repeat(40 * 2)}+\n`;

    if (this.title) {
      const titleLine = `${this.formatTitle(this.title)}\n`;
      chart += titleLine;
    }

    chart += `+${"-".repeat(40 * 2)}+\n`;

    this.data.forEach((item, index) => {
      const { label, color, value, valueFormatter } = item;
      const barLength = normalizedData[index];
      const formattedValue = valueFormatter
        ? valueFormatter(value)
        : value.toString();
      chart += ` ${label.padEnd(15)} ${color}${"█".repeat(
        barLength
      )}\x1b[0m ${formattedValue}\n`;
    });

    chart += `+${"-".repeat(40 * 2)}+\n`;

    return chart;
  }
}
