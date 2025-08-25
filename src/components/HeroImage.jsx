import { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaperPlane } from "react-icons/fa";
import Introduction from "./Introduction";

export default function HeroImage() {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <div className="flex flex-col items-center py-6 md:py-12 lg:py-16 mb-48">
      <div className="w-full max-w-lg mx-auto text-center">
        {/* Introduction with callback */}
        <Introduction onFinalTextStart={() => setTypingDone(true)} />

        {/* Paper plane container with reserved height */}
        <div className="relative w-full" style={{ minHeight: "4rem" }}>
          {typingDone && (
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute left-0 top-0 flex justify-center w-full"
            >
              <a href="mailto:danieljones625@gmail.com">
                <FaPaperPlane className="text-3xl text-blue-500" />
              </a>
            </motion.div>
          )}
        </div>

        {/* Dan Jones */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 font-poppins leading-tight mt-16">
          Dan Jones
        </h1>

        {/* Laptop icon */}
        <div className="flex justify-center my-2 md:hidden">
          <FaLaptopCode className="text-3xl text-gray-700" />
        </div>

        {/* Role + Icon for larger screens */}
        <div className="hidden md:flex justify-center items-center gap-3 mt-2">
          <FaLaptopCode className="text-3xl text-gray-700" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 font-poppins">
            Software Development
          </h2>
        </div>

        {/* Role text only for mobile */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2 md:hidden font-poppins">
          Software Development
        </h2>
      </div>
    </div>
  );
}
