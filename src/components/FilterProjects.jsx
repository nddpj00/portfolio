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
      <h3 className="mb-5 text-lg font-orbitron text-white">
        Filter projects by language, framework or technology.
        {filteredData.length}
      </h3>
      <ul className=" grid w-full justify-center gap-6 md:grid-cols-3 lg:grid-cols-7 mb-6">
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
            className="inline-flex items center justify-between  p-5 text-white bg-white border-2 border-gray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            onChange={addTechToFilterArray}
            id="flask-option"
            value="Flask"
            className=" hidden peer"
            required=""
          />
          <label
            htmlFor="flask-option"
            className="inline-flex items center justify-between  p-5 text-white bg-white border-2 border-gray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            className="inline-flex items center justify-between  p-5 text-white bg-white border-2 border-gray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            className="inline-flex items center justify-between  p-5 text-white bg-white border-2 border-gray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            className="inline-flex items center justify-between  p-5 text-white bg-white border-2 border-gray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            className="inline-flex items center justify-between  p-5 text-white bg-white border-2 border-gray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1707944608/media/my_projects/images/html_lctegg.png"
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
            className="inline-flex items center justify-between  p-5 text-white bg-white border-2 border-gray rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="block">
              <img
                className="h-16"
                src="https://res.cloudinary.com/dhljiows0/image/upload/v1707944606/media/my_projects/images/css_mn6adb.png"
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
