import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { GoArrowUpRight, GoArrowUp } from "react-icons/go";
import { RiBarChartLine } from "react-icons/ri";
import React, { HTMLAttributes } from "react";
import NextLink from "next/link";

interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  countInThousand: string | number;
  lastPercentage: string | number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  countInThousand,
  lastPercentage,
}) => {
  return (
    <Card className="max-w-[400px] flex-grow rounded-sm shadow-sm">
      <CardHeader className="flex justify-between">
        <p className="text-content4 text-sm">{title}</p>
        <GoArrowUpRight className="text-base" />
      </CardHeader>
      <CardBody className="py-1">
        <h6 className="font-medium text-3xl">{countInThousand}K</h6>
      </CardBody>
      <CardFooter className="flex justify-between py-3">
        <p className="flex gap-2 text-sm text-content4">
          <span className="text-secondary flex items-center">
            <GoArrowUp />
            <span className="text-sm">{lastPercentage}%</span>
          </span>
          in the last 7 days
        </p>
        <RiBarChartLine size={"20px"} className="text-secondary" />
      </CardFooter>
    </Card>
  );
};

const PerformanceMetrics = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h2 className="text-lg font-normal">Performance Metrics</h2>
        <Link
          as={NextLink}
          href="#"
          className="text-secondary text-sm underline"
        >
          Download Summary
        </Link>
      </div>
      <div className="flex  gap-5">
        <MetricCard
          title="Followers"
          countInThousand={93.2}
          lastPercentage={0.8}
        />
        <MetricCard title="Likes" countInThousand={400} lastPercentage={1.21} />
        <MetricCard
          title="Comments"
          countInThousand={289.1}
          lastPercentage={2.7}
        />
      </div>
    </div>
  );
};

export default PerformanceMetrics;
