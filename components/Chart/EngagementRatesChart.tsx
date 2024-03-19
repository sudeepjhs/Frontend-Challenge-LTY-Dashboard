import { Weekdays } from "@/data/chart";
import { DummyEngagementData } from "@/data/dummy/chartDummyData";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Define bar chart options
const options: ChartOptions<"bar"> = {
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

// Define EngagementRatesChartProps interface
interface EngagementRatesChartProps {
  chartData?: number[]
}

const EngagementRatesChart: React.FC<EngagementRatesChartProps> = ({ chartData }) => {
  return (
    <Bar
      height={"auto"}
      width={"auto"}
      options={options}
      data={{
        labels: Weekdays,
        datasets: [
          {
            data: chartData || DummyEngagementData, // dummay data if chartData is null
            backgroundColor: "rgba(15, 164, 74, .1)",

          },
        ],
      }}
    />
  );
}

export default EngagementRatesChart;
