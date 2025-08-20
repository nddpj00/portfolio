import React, { useState, useEffect } from "react";
import FilterProjects from "./components/FilterProjects";
import HeroContainer from "./components/HeroContainer";
import ProjectDisplay from "./components/ProjectDisplay";

export default function App() {
  const [filteredTech, setFilteredTech] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log("Filtered tech inside APP.js:", filteredTech);
  }, [filteredTech]);

  const handleFilteredTechUpdate = (filteredTech) => {
    setFilteredTech(filteredTech);
  };

  const handleFilteredDataUpdate = (data) => {
    setFilteredData(data);
  };

  return (
    <div className=" bg-gradient-to-r from-cyan-50 to-orange-50 text-gray-700 min-h-screen">
      <div className="mx-6 md:mx-14 lg:mx-18 xl:mx-60">
        <div>
          <HeroContainer />
        </div>
        <div>
          <FilterProjects
            handleFilteredTechUpdate={handleFilteredTechUpdate}
            filteredData={filteredData}
          />
        </div>
        <div>
          <ProjectDisplay
            filteredTech={filteredTech}
            handleFilteredDataUpdate={handleFilteredDataUpdate}
            filteredData={filteredData}
          />
        </div>
      </div>
    </div>
  );
}
