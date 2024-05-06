import { useState } from "react";
import { ReactTyped } from "react-typed"; // Corrected import

export default function Introduction() {
  const [showIntro, setShowIntro] = useState(false);

  const introText = `Hello and welcome to my site! I'm Daniel Jones, and welcome to my portfolio site. I'm a dynamic Software Developer whose journey from a rich background in sales to the tech industry showcases a unique blend of analytical prowess and problem-solving skills. With over two decades of experience in developing exceptional communication and project management skills, I've made a successful transition to software development, earning a Level 5 Diploma in Web Application Development. My portfolio is a testament to my expertise in HTML, CSS, JavaScript, and Python, along with frameworks like React, Flask, and Django. Through projects for non-profit organizations and a bespoke e-commerce site for a local business, I've demonstrated a deep commitment to crafting innovative, user-centric digital solutions. As I advance in my career, I am eager to leverage my skills in dynamic teams, driving success through technology and collaborative innovation.`;

  const displayIntro = () => {
    setShowIntro(!showIntro);
  };

  return (
    <div className="mb-4">
      <div className="text-xl justify-items-center">
        <img
          src="https://res.cloudinary.com/dhljiows0/image/upload/v1714142944/media/my_projects/images/About_Me_109x50_cjsv9q.png"
          alt="about me keys"
          onClick={displayIntro}
        />
      </div>
      <div>
        {showIntro && (
          <ReactTyped
            strings={[introText]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        )}
      </div>
      <hr className="border-white mt-4" />
    </div>
  );
}
