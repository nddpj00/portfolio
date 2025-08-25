import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function FilterProjects({ handleFilteredTechUpdate }) {
  const [selectedTech, setSelectedTech] = useState([]);

  // Notify parent whenever selectedTech changes
  useEffect(() => {
    handleFilteredTechUpdate(selectedTech);
  }, [selectedTech, handleFilteredTechUpdate]);

  const techOptions = [
    {
      name: "Django",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1707944340/media/my_projects/images/django_uthxqc.png",
    },
    {
      name: "React",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1714140633/media/my_projects/images/7423887_react_react_native_icon_rlkoip.png",
    },
    {
      name: "Flask",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1707944142/media/my_projects/images/flask_fhng9b.png",
    },
    {
      name: "PostgreSQL",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1707943998/media/my_projects/images/postgresql_xrrcwh.png",
    },
    {
      name: "Python",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1707944605/media/my_projects/images/python_nx8cbm.png",
    },
    {
      name: "JavaScript",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1707944609/media/my_projects/images/javascript_fuaogb.png",
    },
    {
      name: "HTML",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1714141882/media/my_projects/images/HTML64_weoqxu.png",
    },
    {
      name: "CSS",
      img: "https://res.cloudinary.com/dhljiows0/image/upload/v1714141991/media/my_projects/images/css3_icon_blgksy.png",
    },
  ];

  const toggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => setSelectedTech([]);

  return (
    <div className="w-full">
      {/* Animated Projects line moved here */}
      <motion.div
        className="flex items-center justify-center mt-10 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="mx-4 text-xl font-semibold text-gray-700 tracking-wide">
          Projects
        </span>
        <div className="flex-grow border-t border-gray-700"></div>
      </motion.div>

      <h3 className="text-center mb-6 text-lg lg:text-xl text-gray-700 font-league_spartan">
        Filter projects by language, framework, or technology
      </h3>

      <ul className="grid justify-items-center gap-6 grid-cols-4 md:grid-cols-4 lg:grid-cols-8 mb-6 sm:ml-4 sm:mr-4">
        {techOptions.map((tech) => (
          <li key={tech.name}>
            <button
              type="button"
              onClick={() => toggleTech(tech.name)}
              className={`inline-flex items-center p-2 border-2 rounded-lg cursor-pointer transition
                ${
                  selectedTech.includes(tech.name)
                    ? "border-blue-600 animate-bounce"
                    : "border-gray"
                }
                hover:border-blue-400`}
            >
              <img className="h-16" src={tech.img} alt={`${tech.name} logo`} />
            </button>
          </li>
        ))}
      </ul>

      {selectedTech.length > 0 && (
        <div className="flex justify-center mt-4">
          <motion.button
            onClick={clearFilters}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear Filters
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default FilterProjects;
