import React, { useState } from "react";
import FilterProjects from "./components/FilterProjects";
import HeroContainer from "./components/HeroContainer";
import ProjectDisplay from "./components/ProjectDisplay";

export default function App() {
  const [filteredTech, setFilteredTech] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-orange-50 text-gray-700 flex flex-col">
      <div className="mx-6 md:mx-14 lg:mx-18 xl:mx-60 flex-1">
        {/* Hero Section */}
        <div className="pt-8 md:pt-12 lg:pt-16">
          <HeroContainer />
        </div>

        {/* Filter Section */}
        <div className="mt-10">
          <FilterProjects handleFilteredTechUpdate={setFilteredTech} />
        </div>

        {/* Projects Grid */}
        <div className="mt-10 mb-20">
          <ProjectDisplay
            filteredTech={filteredTech}
            handleFilteredDataUpdate={setFilteredData}
            filteredData={filteredData}
          />
        </div>
      </div>
    </div>
  );
}
