import { FaLaptopCode } from "react-icons/fa";

export default function HeroImage() {
  return (
    <div className="flex justify-center md:justify-start items-center py-16 md:py-24 lg:py-32">
      <div className="w-full md:w-auto max-w-lg mx-auto md:mx-0 ml-0 md:ml-1/3 text-center md:text-left">
        {/* Dan Jones */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 font-poppins leading-tight">
          Dan Jones
        </h1>

        {/* Mobile view: Icon centred between name + role */}
        <div className="flex justify-center my-2 md:hidden">
          <FaLaptopCode className="text-3xl text-gray-700" />
        </div>

        {/* Role + Icon (for larger screens) */}
        <div className="hidden md:flex items-center gap-3 mt-2">
          <FaLaptopCode className="text-3xl text-gray-700" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 font-poppins">
            Software Development
          </h2>
        </div>

        {/* Role text only (for mobile, below icon) */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2 md:hidden font-poppins">
          Software Development
        </h2>
      </div>
    </div>
  );
}
