import { BarChart, BarData } from "./barchart";

const data: BarData[] = [
  { label: "Apples", value: 10, color: "red" },
  { label: "Bananas", value: 15, color: "green" },
  { label: "Cherries", value: 20, color: "blue" },
  { label: "Dates", value: 25, color: "yellow" },
  { label: "Elderberries", value: 30, color: "magenta" },
];

const chart = new BarChart(data);

console.log(chart.generate());
