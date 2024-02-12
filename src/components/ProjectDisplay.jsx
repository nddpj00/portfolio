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
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // console.log("Render data:", data);
  // console.log(data[0].image);

  return (
    <div className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 lg:py-12 group-hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col h-full"
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 flex-grow">
              <CloudinaryContext>
                <Image
                  src={`https://res.cloudinary.com/dhljiows0/${item.image}`}
                  className="w-full h-64 object-scale-down"
                  alt={item.title}
                ></Image>
              </CloudinaryContext>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <h3>{item.title}</h3>
                </div>
                <p className="text-lg">Description:</p>
                <p className="text-sm">{item.description}</p>
                <div>
                  <ul>
                    <li className="text-lg">
                      Languages used:<br></br>
                    </li>
                    {item.language_used.map((language, index) => (
                      <li className="text-sm" key={index}>
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="text-lg">
                      Techstack & Technologies used:<br></br>
                    </li>
                    {item.framework_used.map((framework, index) => (
                      <li className="text-sm" key={index}>
                        {framework}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a href={item.live_url}>Click here for the live site</a>
                </div>
                <div>
                  <a href={item.git_url}>Click here for the repository</a>
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
