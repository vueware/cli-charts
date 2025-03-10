import { BarChart } from "../barchart";

describe("BarChart", () => {
  it("should generate a bar chart with labels and colors", () => {
    const data = [
      { label: "Apples", value: 10, color: "red" },
      { label: "Bananas", value: 15, color: "green" },
      { label: "Cherries", value: 20, color: "blue" },
      { label: "Dates", value: 25, color: "yellow" },
      { label: "Elderberries", value: 30, color: "cyan" },
    ];

    const chart = new BarChart(data);
    const result = chart.generate();

    expect(result).toContain("Apples");
    expect(result).toContain("█".repeat(12));
    expect(result).toContain("\x1b[31m");
    expect(result).toContain("\x1b[32m");
    expect(result).toContain("\x1b[34m");
    expect(result).toContain("\x1b[33m");
    expect(result).toContain("\x1b[36m");
  });
});
