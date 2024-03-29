import React, { useState, useEffect } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import axios from "axios";

const ProjectDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("http://localhost:8000/projects/")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        const sortedData = response.data.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        );
        setData(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
      <div className="max-w-sm mx-auto grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start lg:max-w-none group">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 lg:py-12 group-hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full relative"
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg  from-slate-900 flex-grow relative">
              <CloudinaryContext>
                <Image
                  src={`https://res.cloudinary.com/dhljiows0/${item.image}`}
                  className="w-full h-64 mt-2 object-scale-down"
                  alt={item.title}
                ></Image>
              </CloudinaryContext>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center font-orbitron">
                  <h3>{item.title}</h3>
                </div>
                <p className="text-lg">Description:</p>
                <p className="text-sm">{item.description}</p>
                <div>
                  <ul>
                    <li className="text-lg">Languages used:</li>
                    {item.language_used.map((language, index) => (
                      <li className="text-sm" key={index}>
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="text-lg">Techstack & Technologies used:</li>
                    {item.framework_used.map((framework, index) => (
                      <li className="text-sm" key={index}>
                        {framework}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <a
                      className="animate-pulse text-yellow-300"
                      href={item.live_url}
                    >
                      Live Site
                    </a>
                  </div>
                  <div>
                    <a className="text-green-500" href={item.git_url}>
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
