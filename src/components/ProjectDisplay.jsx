import React, { useState, useEffect } from "react";

import axios from "axios";

const ProjectDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("http://localhost:8000/projects/")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("Render data:", data);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="my-4">
          <h3>Project Name: {item.title}</h3>
          <p>
            Description: <br></br>
            {item.description}
          </p>
          <img src={item.image} alt="project logo" />
          <a href="{item.live_url}">Click here for the live site</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;
