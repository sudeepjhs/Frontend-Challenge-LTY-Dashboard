import AudienceDemography from "@/components/Dashboard/AudienceDemography";
import EngagementRates from "@/components/Dashboard/EngagementRates";
import PerformanceMetrics from "@/components/Dashboard/PerformanceMetrics";
import PostActivity from "@/components/Dashboard/PostActivity";
import TopLocations from "@/components/Dashboard/TopLocations";

export default function Home() {
  return (
    <section className="flex flex-col my-3 gap-4 px-6">
      <PerformanceMetrics />
      <div className="flex gap-5 flex-col-reverse md:flex-row">
        <div className="md:w-6/12 flex flex-col gap-6">
          <EngagementRates />
          <PostActivity />
        </div>
        <div className="md:w-6/12 flex flex-col gap-1">
          <AudienceDemography />
          <TopLocations />
        </div>
      </div>
    </section>
  );
}
