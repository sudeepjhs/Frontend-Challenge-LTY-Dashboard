import AudienceDemography from "@/components/Dashboard/AudienceDemography";
import EngagementRates from "@/components/Dashboard/EngagementRates";
import PerformanceMetrics from "@/components/Dashboard/PerformanceMetrics";
import PostActivity from "@/components/Dashboard/PostActivity";
import TopLocations from "@/components/Dashboard/TopLocations";
import { createEngagementRateData, createGenderChart } from "@/data/chart";
import { createLocationVistorData, createPerformanceMetricData, createPostActivityData } from "@/data/dashboardData";

export default function Home() {
  return (
    <section className="flex flex-col my-3 gap-4 px-6">
      <PerformanceMetrics metricData={createPerformanceMetricData()} />
      <div className="flex gap-5 flex-col-reverse md:flex-row">
        <div className="md:w-6/12 flex flex-col gap-6">
          <EngagementRates rates={createEngagementRateData()} />
          <PostActivity activites={createPostActivityData(3)} />
        </div>
        <div className="md:w-6/12 flex flex-col gap-1">
          <AudienceDemography genderData={createGenderChart()} />
          <TopLocations visitorsData={createLocationVistorData()} />
        </div>
      </div>
    </section>
  );
}
