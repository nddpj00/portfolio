import { useState, useEffect } from "react";

function FilterProjects({ handleFilteredTechUpdate, filteredData }) {
  const [filteredTech, setFilteredTech] = useState([]);

  useEffect(() => {
    handleFilteredTechUpdate(filteredTech);
  }, [filteredTech]);

  const addTechToFilterArray = (e) => {
    const tech = e.target.value;
    setFilteredTech([tech]);
  };

  console.log(filteredTech);
  console.log(filteredData);

  return (
    <>
      <h3 className="flex justify-center mb-5 text-lg lg:text-xl text-gray-700 font-league_spartan mb-10">
        Filter projects by language, framework or technology.
      </h3>
      <ul className=" mb-10 grid justify-items-center gap-6 grid-cols-4 md:grid-cols-4 lg:grid-cols-8 mb-6 sm:ml-4 sm:mr-4">
        <li>
          <input
            type="radio"
            name="tech-option"
            id="django-option"
            onChange={addTechToFilterArray}
            value="Django"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="django-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1707944340/media/my_projects/images/django_uthxqc.png"
                alt="django logo"
              />
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="tech-option"
            id="react-option"
            onChange={addTechToFilterArray}
            value="React"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="react-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1714140633/media/my_projects/images/7423887_react_react_native_icon_rlkoip.png"
                alt="react logo"
              />
            </div>
          </label>
        </li>

        <li>
          <input
            type="radio"
            name="tech-option"
            onChange={addTechToFilterArray}
            id="flask-option"
            value="Flask"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="flask-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1707944142/media/my_projects/images/flask_fhng9b.png"
                alt="flask logo"
              />
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="tech-option"
            onChange={addTechToFilterArray}
            id="postgres-option"
            value="PostgreSQL"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="postgres-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1707943998/media/my_projects/images/postgresql_xrrcwh.png"
                alt="postgres logo"
              />
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="tech-option"
            onChange={addTechToFilterArray}
            id="python-option"
            value="Python"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="python-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1707944605/media/my_projects/images/python_nx8cbm.png"
                alt="python logo"
              />
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="tech-option"
            onChange={addTechToFilterArray}
            id="javascript-option"
            value="JavaScript"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="javascript-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1707944609/media/my_projects/images/javascript_fuaogb.png"
                alt="javascript logo"
              />
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="tech-option"
            onChange={addTechToFilterArray}
            id="html-option"
            value="HTML"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="html-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1714141882/media/my_projects/images/HTML64_weoqxu.png"
                alt="html logo"
              />
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="tech-option"
            id="css-option"
            onChange={addTechToFilterArray}
            value="CSS"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="css-option"
            className="inline-flex items-center p-2 border-2 border-gray rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:animate-bounce peer-checked:border-blue-600  hover:bg-gray-700 dark:bg-gray-800"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1714141991/media/my_projects/images/css3_icon_blgksy.png"
                alt="css logo"
              />
            </div>
          </label>
        </li>
      </ul>
    </>
  );
}

export default FilterProjects;
