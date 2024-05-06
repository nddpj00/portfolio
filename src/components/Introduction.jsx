import { useState } from "react";
import { ReactTyped } from "react-typed"; // Corrected import

export default function Introduction() {
  const [showIntro, setShowIntro] = useState(false);

  const introText = `
  Welcome to my portfolio site! I'm Daniel Jones, a dynamic Software Developer with a rich background in sales, now fully immersed in the tech industry. With over two decades of experience honing my communication and project management skills, I've transitioned successfully into software development, earning a Level 5 Diploma in Web Application Development.
  
  My portfolio showcases a range of projects that highlight my expertise in HTML, CSS, JavaScript, and Python, as well as frameworks like React, Flask, and Django. From non-profit initiatives to bespoke e-commerce solutions for local businesses, I'm committed to crafting innovative, user-centric digital solutions.
  
  Explore my projects, filter them by technology, and don't hesitate to get in touch via email. Let's connect and discuss how I can contribute to your next project or venture!`;

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
