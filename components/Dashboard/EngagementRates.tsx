"use client";
import { Select, SelectItem } from "@nextui-org/react";
import EngagementRatesChart from "../Chart/EngagementRatesChart";
import Box from "../Container/Box";
import React from "react";

interface EngagementRatesProps {
  rates?: number[]
}
const EngagementRates: React.FC<EngagementRatesProps> = ({ rates }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-xl">Engagement Rates</h2>
        <Select
          className="max-w-[100px] text-black dark:text-white"
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
      <Box className="p-4">
        <EngagementRatesChart chartData={rates} />
      </Box>
    </div>
  );
}

export default EngagementRates;
