![Vueware](https://www.vueware.nl/logo.png)

# @vueware/cli-charts

`@vueware/cli-charts` is a simple TypeScript library that generates simple charts in the command line interface.

## Installation

Install via npm:

```bash
npm install @vueware/cli-charts
```

## Usage

Import and use the `bar` function to generate a Bar Chart:

```bash
import { BarChart, BarData } from "@vueware/cli-charts";

const data: BarData[] = [
  { label: "Apples", value: 10, color: "red" },
  { label: "Bananas", value: 15, color: "green" },
  { label: "Cherries", value: 20, color: "blue" },
  { label: "Dates", value: 25, color: "yellow" },
  { label: "Elderberries", value: 30, color: "magenta" },
];

const chart = bar(data);
console.log(chart);
```
