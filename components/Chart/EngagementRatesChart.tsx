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
import { useTheme } from "next-themes";
import React, { memo, useMemo } from "react";
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

// Define EngagementRatesChartProps interface
interface EngagementRatesChartProps {
  chartData?: number[];
}

const EngagementRatesChart: React.FC<EngagementRatesChartProps> = ({
  chartData,
}) => {
  const theme = useTheme();
  // Define bar chart options
  const options: ChartOptions<"bar"> = useMemo(
    () => ({
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
      datasets: {
        bar: {
          backgroundColor:
            theme.theme === "light"
              ? "rgba(15, 164, 74, .1)"
              : "rgba(15, 164, 74, .2)",
        },
      },
      scales: {
        y: {
          grid: {
            color:
              theme.theme === "light" ? "#d4d4d8" : "rgba(143, 143, 143, .5)",
          },
          beginAtZero: true,
          ticks: {
            stepSize: 20,
            font: {
              family: "Aeonik",
              size: 20,
            },
          },
          border: {
            dash: [5, 5],
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: "Aeonik",
              size: 20,
            },
          },
        },
      },
    }),
    [theme]
  );

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
          },
        ],
      }}
    />
  );
};

export default memo(EngagementRatesChart);
