import React from "react";
import GenderChart from "../Chart/GenderChart";
import Box from "../Container/Box";

function AudienceDemography() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="h-unit-10 min-h-unit-10 flex items-center text-xl">Audience Demography</h2>
      <Box className="flex py-3 px-5">
        <GenderChart />
      </Box>
    </div>
  );
}

export default AudienceDemography;
