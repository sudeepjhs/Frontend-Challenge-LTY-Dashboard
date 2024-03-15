import AudienceDemography from "@/components/Dashboard/AudienceDemography";
import EngagementRates from "@/components/Dashboard/EngagementRates";
import PerformanceMetrics from "@/components/Dashboard/PerformanceMetrics";

export default function Home() {
  return (
    <section className="flex flex-col my-3 gap-4 px-6">
      <PerformanceMetrics />
      <div className="flex gap-5">
        <div className="md:w-6/12 flex flex-col">
          <EngagementRates />
        </div>
        <div className="md:w-6/12 flex flex-col">
          <AudienceDemography />
        </div>
      </div>
    </section>
  );
}
