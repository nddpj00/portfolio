import { useState } from "react";
import { ReactTyped } from "react-typed";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Introduction({ onFinalTextStart }) {
  const [showIntro, setShowIntro] = useState(false);

  const introText = `Welcome to my portfolio site! I'm <strong>Dan Jones</strong>, a creative Software Developer.`;
  const middleText = `My portfolio showcases a range of projects I've worked on, from e-commerce sites to this site you are on right now!`;
  const endText = `Explore my projects, filter them, and get in touch. Let's connect and discuss how I can contribute to your next project!`;

  const displayIntro = () => setShowIntro(!showIntro);

  return (
    <div className="relative w-full flex flex-col items-center mb-8">
      {/* Lightbulb at top */}
      <div className="flex justify-center mb-2">
        <HiOutlineLightBulb
          size={60}
          className={`cursor-pointer animate-pulse transition duration-300 ${
            showIntro ? "text-yellow-400" : "text-black"
          }`}
          onClick={displayIntro}
        />
      </div>

      {/* Typed text container with fixed height to prevent content shifting */}
      <div
        className="w-full text-base md:text-lg lg:text-lg leading-relaxed text-center px-4 pt-2"
        style={{ minHeight: "6rem" }} // preallocated space for all lines
      >
        {showIntro && (
          <ReactTyped
            strings={[introText, middleText, endText]}
            typeSpeed={30}
            backSpeed={10}
            preStringTyped={(arrayPos) => {
              if (arrayPos === 2 && onFinalTextStart) onFinalTextStart();
            }}
          />
        )}
      </div>
    </div>
  );
}
