import { BarChart, BarData } from "../index";

describe("BarChart", () => {
  it("should generate a bar chart with labels and colors", () => {
    const data: BarData[] = [
      {
        label: "Salary",
        value: 10,
        color: "red",
        valueFormatter: (v) => `€ ${v.toFixed(2)}`,
      },
      {
        label: "Bonus",
        value: 2.5,
        color: "yellow",
        valueFormatter: (v) => `€ ${v.toFixed(2)}`,
      },
      {
        label: "Investment",
        value: 3,
        color: "blue",
        valueFormatter: (v) => `€ ${v.toFixed(2)}`,
      },
    ];

    const chart = new BarChart(data, "Example");
    const result = chart.generate();

    expect(result).toContain("Salary");
    expect(result).toContain("Bonus");
    expect(result).toContain("Investment");
    expect(result).toContain("█".repeat(12));
    expect(result).toContain("\x1b[31m");
    expect(result).toContain("\x1b[33m");
    expect(result).toContain("\x1b[34m");
    expect(result).toContain("€ 10.00");
    expect(result).toContain("€ 2.50");
    expect(result).toContain("€ 3.00");
  });
});
