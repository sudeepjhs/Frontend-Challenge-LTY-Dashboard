import { PerformanceMetricData } from "@/data/dashboardData";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import React, { HTMLAttributes } from "react";
import { GoArrowUpRight } from "react-icons/go";
import GrowthIndicator from "../Misc/GrowthIndicator";
import { UimAnalytics } from "../icons";
import { dummyPerformanceMetricData } from "@/data/dummy/dashboardDummyData";

interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  countInThousand: string | number;
  lastPercentage: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  countInThousand,
  lastPercentage,
}) => {
  return (
    <Card className="max-w-[400px] flex-grow rounded-sm shadow-sm">
      <CardHeader className="flex justify-between">
        <p className="text-content4">{title}</p>
        <GoArrowUpRight className="text-base" />
      </CardHeader>
      <CardBody className="py-1">
        <h6 className="font-medium text-4xl">{countInThousand}K</h6>
      </CardBody>
      <CardFooter className="flex justify-between py-3">
        <p className="flex gap-2 text-content4">
          <GrowthIndicator percentage={lastPercentage} />
          in the last 7 days
        </p>
        <UimAnalytics width={38.25} height={20} className="text-secondary" />
      </CardFooter>
    </Card>
  );
};

interface PerformanceMetricsProps {
  metricData?: PerformanceMetricData[]
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ metricData }) => {

  if (!metricData || metricData.length <= 0) metricData = dummyPerformanceMetricData;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h2 className="text-lg md:text-2xl font-normal">Performance Metrics</h2>
        <Link
          as={NextLink}
          href="#"
          className="text-secondary underline md:text-[16px] text-sm"
        >
          Download Summary
        </Link>
      </div>
      <div className="flex justify-between gap-3 md:flex-row flex-col">
        {metricData.map((data, i) =>
          <MetricCard
            key={data.title + "_" + i}
            title={data.title}
            countInThousand={data.record / 1000}
            lastPercentage={data.incPerc}
          />
        )}
      </div>
    </div>

  );
};

export default PerformanceMetrics;
