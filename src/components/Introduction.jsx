import { useState } from "react";
import { ReactTyped } from "react-typed"; // Corrected import

export default function Introduction() {
  const [showIntro, setShowIntro] = useState(false);

  const introText = `Welcome to my portfolio site! I'm <strong>Dan Jones</strong>, a creative Software Developer.`;

  const middleText = `My portfolio showcases a range of projects I've worked on, from e-commerce sites to this site you are on right now!`;
  const endText = `Explore my projects, filter them by technology, and don't hesitate to get in touch via email. Let's connect and discuss how I can contribute to your next project or venture!`;

  const displayIntro = () => {
    setShowIntro(!showIntro);
  };

  return (
    <div className="mb-4">
      <div className="text-xl justify-items-center font-league_spartan">
        <img
          src="https://res.cloudinary.com/dhljiows0/image/upload/v1714142944/media/my_projects/images/About_Me_109x50_cjsv9q.png"
          alt="about me keys"
          onClick={displayIntro}
        />
      </div>
      <div>
        {showIntro && (
          <ReactTyped
            strings={[introText, middleText, endText]}
            typeSpeed={35}
            backSpeed={20}
          />
        )}
      </div>
      <hr className="border-white mt-4" />
    </div>
  );
}
