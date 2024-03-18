"use client";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  BarElement,
  ChartOptions,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement
);

const doughnutOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 50,
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: "end",
      offset: 0,
      color: "black",
      align: "end",
      font: {
        family: "Aeonik",
        size: 12,
        weight: "bold"
      },
      formatter: (value, ctx) => {
        return value + "%";
      },
    },
  },
};

const barOptions: ChartOptions<"bar"> = {
  responsive: true,
  layout: {
    padding: {
      right: 8,
      y: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: (ctx) => {
        if (
          ctx.datasetIndex === 0 ||
          ctx.datasetIndex === ctx.chart.data.datasets.length - 1
        )
          return true;
        return false;
      },
      font: {
        family: "Aeonik",
        size: 12,
        weight: "bold"
      }
    },
  },
  indexAxis: "y",
  scales: {
    x: {
      stacked: true,
      display: false,
    },
    y: {
      stacked: true,
      display: false,
    },
  },
};

function GenderChart() {
  const maleData = [20, 30, 40, 50];
  const femaleData = [10, 20, 30, 40];
  const otherData = [5, 10, 15, 20];

  const totalCounts = maleData
    .map((count, index) => count + femaleData[index] + otherData[index])
    .reduce((a, b) => a + b, 0);

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
      <div className="flex">
        <div className="flex flex-col gap-3">
          <h6>Gender</h6>
          <div>
            <Doughnut
              options={doughnutOptions}
              data={{
                labels: ["Male", "Female", "Other"],
                datasets: [
                  {
                    data: [35, 55, 15],
                    backgroundColor: ["#283350", "#0FA44A", "#FFF854"],
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
                labels: ["16-25", "25-35", "35-55", "55+"],
                datasets: [
                  {
                    label: "Male",
                    data: maleData,
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
                    data: femaleData,
                    backgroundColor: "#0FA44A",
                  },
                  {
                    label: "Others",
                    data: otherData,
                    backgroundColor: "#FFF854",
                    datalabels: {
                      color: "black",
                      anchor: "end",
                      align: "end",
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
}

export default GenderChart;
