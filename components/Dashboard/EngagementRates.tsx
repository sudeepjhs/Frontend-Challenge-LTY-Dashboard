"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import EngagementRatesChart from "../Chart/EngagementRatesChart";

function EngagementRates() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="text-lg">Engagement Rates</h2>
        <Select
          className="max-w-[100px]"
          radius="sm"
          color="secondary"
          defaultSelectedKeys={["weekly"]}
          aria-label="report type"
        >
          <SelectItem key={"weekly"} value={"weekly"}>
            Weekly
          </SelectItem>
          <SelectItem key={"monthly"} value={"monthly"}>
            Monthly
          </SelectItem>
          <SelectItem key={"yearly"} value={"yearly"}>
            Yearly
          </SelectItem>
        </Select>
      </div>
      <div className="max-w-full">
        <EngagementRatesChart />
      </div>
    </div>
  );
}

export default EngagementRates;
