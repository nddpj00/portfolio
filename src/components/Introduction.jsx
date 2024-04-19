import { useState } from "react";

export default function Introduction() {
  const [intro, setIntro] = useState("");

  const introText = `Welcome! I'm Daniel Jones, a dynamic Software Developer whose journey
  from a rich background in sales to the tech industry showcases a
  unique blend of analytical prowess and problem-solving skills. With
  over two decades of experience in developing exceptional communication
  and project management skills, I've made a successful transition to
  software development, earning a Level 5 Diploma in Web Application
  Development. My portfolio is a testament to my expertise in HTML, CSS,
  JavaScript, and Python, along with frameworks like React, Flask, and
  Django. Through projects for non-profit organizations and a bespoke
  e-commerce site for a local business, I've demonstrated a deep
  commitment to crafting innovative, user-centric digital solutions. As
  I advance in my career, I am eager to leverage my skills in dynamic
  teams, driving success through technology and collaborative
  innovation.`;

  const displayIntro = () => {
    setIntro(intro === "" ? introText : "");
  };

  return (
    <div className=" justify-center h-5 mb-4">
      <div className="text-xl">
        <img
          className=""
          src="https://res.cloudinary.com/dhljiows0/image/upload/v1713542978/media/my_projects/images/portfolio_monitor_image_q8vhmd.png"
          alt="monitor"
          onClick={displayIntro}
        />
        <button
          onClick={displayIntro}
          className="bg-blue-500 hover:bg-blue-700 text-gray-700 font-league_spartan py-2 px-4 border border-blue-700 rounded"
        >
          Click for introduction....
        </button>
      </div>
      <div>
        <p>{intro}</p>
      </div>
      <hr className="border-white mt-4" />
    </div>
  );
}
