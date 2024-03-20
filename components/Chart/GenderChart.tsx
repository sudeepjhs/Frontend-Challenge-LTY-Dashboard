"use client";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React, { memo, useMemo } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

import { Gender, GenderAge } from "@/data/chart";
import { DummyGenderData } from "@/data/dummy/chartDummyData";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTheme } from "next-themes";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement
);

// Define GenderChartProps interface
interface GenderChartProps {
  chartData?: Gender;
}

const GenderChart: React.FC<GenderChartProps> = ({ chartData }) => {
  const theme = useTheme();

  // Define doughnut chart options
  const doughnutOptions: ChartOptions<"doughnut"> = useMemo(
    () => ({
      responsive: true, // Make the chart responsive
      maintainAspectRatio: false, // Do not maintain aspect ratio
      cutout: 50, // Cutout size of the doughnut
      layout: {
        padding: 10, // Padding around the chart
      },
      // rotation: 45,
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        datalabels: {
          anchor: "end", // Anchor position of datalabels
          offset: -2, // Offset of datalabels
          color: theme.theme === "light" ? "black" : "white", // Color of datalabels
          align: "end", // Alignment of datalabels
          font: {
            family: "Aeonik", // Font family of datalabels
            size: 12, // Font size of datalabels
            weight: "bold", // Font weight of datalabels
          },
        },
      },
    }),
    [theme]
  );

  // Define bar chart options
  const barOptions: ChartOptions<"bar"> = useMemo(
    () => ({
      responsive: true, // Make the chart responsive
      maintainAspectRatio: false, // Do not maintain aspect ratio
      layout: {
        padding: {
          right: 8, // Padding on the right side
          y: 0, // Padding on the y-axis
        },
      },
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        datalabels: {
          display: (ctx) => {
            if (
              ctx.datasetIndex === 0 ||
              ctx.datasetIndex === ctx.chart.data.datasets.length - 1
            )
              return true; // Show datalabels for the first and last dataset
            return false;
          },
          font: {
            family: "Aeonik", // Font family of datalabels
            size: 12, // Font size of datalabels
            weight: "bold", // Font weight of datalabels
          },
          color: theme.theme === "light" ? "black" : "white", // Color of datalabels
        },
      },
      indexAxis: "y", // Set the index axis to the y-axis
      scales: {
        x: {
          stacked: true, // Stack the x-axis
          display: false, // Hide the x-axis
        },
        y: {
          stacked: true, // Stack the y-axis
          display: false, // Hide the y-axis
        },
      },
    }),
    [theme]
  );

  // If chartData is not provided, use the dummy data
  if (!chartData) chartData = DummyGenderData;

  // Calculate the sum of male, female, and other data
  const sumOfMaleData = chartData.male.reduce((acc, curr) => acc + curr, 0);
  const sumOfFemaleData = chartData.female.reduce((acc, curr) => acc + curr, 0);
  const sumOfOtherData = chartData.others.reduce((acc, curr) => acc + curr, 0);

  // Calculate the total counts
  const totalCounts = sumOfMaleData + sumOfFemaleData + sumOfOtherData;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end gap-3">
        <div className="flex items-center">
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: "#283350" }}
          ></div>
          <span className="ml-1 text-xs">Male</span>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-secondary"></div>
          <span className="ml-1 text-xs">Female</span>
        </div>
        <div className="flex items-center">
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: "#FFF854" }}
          ></div>
          <span className="ml-1 text-xs">Others</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-3">
          <h6>Gender</h6>
          <div>
            <Doughnut
              options={doughnutOptions}
              data={{
                labels: ["Male", "Female", "Other"],
                datasets: [
                  {
                    data: [sumOfMaleData, sumOfFemaleData, sumOfOtherData],
                    backgroundColor: ["#283350", "#0FA44A", "#FFF854"],
                    datalabels: {
                      formatter: (value, ctx) => {
                        return Math.round((value / totalCounts) * 100) + "%"; // Format datalabels as percentage
                      },
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h6>Age Group</h6>
          <div>
            <Bar
              options={barOptions}
              data={{
                labels: GenderAge,
                datasets: [
                  {
                    label: "Male",
                    data: chartData.male,
                    backgroundColor: "#283350",
                    datalabels: {
                      color: "white",
                      anchor: "start",
                      align: "end",
                      formatter: (value, ctx) => {
                        return ctx.chart.data.labels![ctx.dataIndex];
                      },
                    },
                  },
                  {
                    label: "Female",
                    data: chartData.female,
                    backgroundColor: "#0FA44A",
                  },
                  {
                    label: "Others",
                    data: chartData.others,
                    backgroundColor: "#FFF854",
                    datalabels: {
                      anchor: "end",
                      align: "end",
                      offset: 0,
                      formatter: (value, ctx) => {
                        const dataIndex = ctx.dataIndex;
                        const sum = ctx.chart.data.datasets.reduce(
                          (acc: number, dataset: any) => {
                            const data = dataset.data;
                            if (data) return acc + data[dataIndex];
                            else return acc + 0;
                          },
                          0
                        );
                        return Math.round((sum / totalCounts) * 100) + "%";
                      },
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(GenderChart);
