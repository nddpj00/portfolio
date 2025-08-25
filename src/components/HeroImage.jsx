import { FaLaptopCode } from "react-icons/fa";

export default function HeroImage() {
  return (
    <div className="flex justify-center items-center py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-lg mx-auto text-center">
        {/* Dan Jones */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 font-poppins leading-tight">
          Dan Jones
        </h1>

        {/* Icon between name + role */}
        <div className="flex justify-center my-2">
          <FaLaptopCode className="text-3xl text-gray-700" />
        </div>

        {/* Role */}
        <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-700 font-poppins">
          Software Development
        </h2>
      </div>
    </div>
  );
}
