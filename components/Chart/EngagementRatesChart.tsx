import { Weekdays } from "@/data/chart";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    datalabels: {
      display: false,
    },
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20,
        font: {
          family: "Aeonik",
          size: 20
        }
      },
      border: {
        dash: [5, 5],
      },
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: "Aeonik",
          size: 20
        }
      }
    }
  },
};

function EngagementRatesChart() {
  return (
    <Bar
      options={options}
      data={{
        labels: Weekdays,
        datasets: [
          {
            data: [35, 20, 65, 50, 95, 55, 80],
            backgroundColor: "rgba(15, 164, 74, .1)",

          },
        ],
      }}
    />
  );
}

export default EngagementRatesChart;
