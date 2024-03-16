import React from "react";
import GenderChart from "../Chart/GenderChart";

function AudienceDemography() {
  return (
    <div className="flex flex-col">
      <h2>Audience Demography</h2>
      <div className="flex">
        <GenderChart />
      </div>
    </div>
  );
}

export default AudienceDemography;
