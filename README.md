![Vueware](https://www.vueware.nl/logo.png)

# @vueware/cli-charts

`@vueware/cli-charts` is a simple TypeScript library that generates simple charts in the command line interface.

## Installation

Install via npm:

```bash
npm install @vueware/cli-charts
```

## Usage

Import and use the `BarChart` and `BarData` function to generate a Bar Chart:

```bash
import { BarChart, BarData } from "@vueware/cli-charts";

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

const chart = new BarChart(data, "Income");
console.log(chart.generate());
```

## Result

```
+--------------------------------------------------------------------------------+
 INCOME
+--------------------------------------------------------------------------------+
 Salary          ████████████████████████████████████████ € 10.00
 Bonus           ██████████ € 2.50
 Investment      ████████████ € 3.00
+--------------------------------------------------------------------------------+
```
