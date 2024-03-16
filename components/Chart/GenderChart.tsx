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
      align: "end",
      formatter: (value, ctx) => {
        return value + "%";
      },
    },
  },
};

const barOptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    datalabels: {
      color: "white",
      anchor: "start",
      align: "center",
      formatter: (value, ctx) => {
        if (ctx.datasetIndex == 0) {
          return ctx.chart.data.labels[ctx.dataIndex];
        } else {
          return "";
        }
      },
    },
    title: {
      display: false,
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

  // const totalCounts = maleData.map(
  //   (count, index) => count + femaleData[index] + otherData[index]
  // );

  return (
    <div className="flex">
      <div className="">
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
      <div className="">
        <Bar
          options={barOptions}
          data={{
            labels: ["16-25", "25-35", "35-55", "55+"],
            datasets: [
              {
                label: "Male",
                data: maleData,
                backgroundColor: "#283350",
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
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default GenderChart;
