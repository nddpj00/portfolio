import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../index.css";

const ProjectDisplay = ({ filteredTech }) => {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://dpj-portfolio-139efb7ef574.herokuapp.com/projects/"
      : "http://127.0.0.1:8000/projects/";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const sortedData = response.data.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        );
        setProjects(sortedData);
        setDisplayedProjects(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [API_URL]);

  useEffect(() => {
    if (filteredTech.length === 0) {
      setDisplayedProjects(projects);
    } else {
      const filtered = projects.filter((project) => {
        const techNames = [
          ...project.languages_used.map((t) => t.name),
          ...project.frameworks_used.map((t) => t.name),
        ];
        return filteredTech.every((tech) => techNames.includes(tech));
      });
      setDisplayedProjects(filtered);
    }
  }, [filteredTech, projects]);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="mt-10">
      {/* Projects container with reserved minimum height */}
      <div className="min-h-[60vh]">
        {displayedProjects.length > 0 ? (
          <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <CSSTransition key={project.id} timeout={400} classNames="fade">
                <div className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {project.image && (
                    <div
                      className={`relative w-full h-64 bg-gray-700 ${
                        !loadedImages[project.id] ? "shimmer" : ""
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-64 object-cover transition-opacity duration-700 ${
                          loadedImages[project.id] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(project.id)}
                      />
                    </div>
                  )}

                  <div className="p-4 text-gray-100">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-3">{project.description}</p>

                    {/* Languages */}
                    {project.languages_used.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.languages_used.map((lang) => (
                          <span
                            key={lang.id}
                            className="px-2 py-1 bg-gray-700 text-sm rounded-lg border border-gray-600"
                          >
                            {lang.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Frameworks */}
                    {project.frameworks_used.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.frameworks_used.map((fw) => (
                          <span
                            key={fw.id}
                            className="px-2 py-1 bg-gray-800 text-sm rounded-lg border border-gray-600"
                          >
                            {fw.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Project Links */}
                    <div className="flex flex-col gap-2 mt-3">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-blue-400 hover:text-blue-200 hover:underline font-medium"
                        >
                          🌐 Live Site
                        </a>
                      )}
                      {project.git_url && (
                        <a
                          href={project.git_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-gray-400 hover:text-gray-200 hover:underline font-medium"
                        >
                          💻 GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-6">
            No projects match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectDisplay;
