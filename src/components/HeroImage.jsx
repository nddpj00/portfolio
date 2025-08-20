import { FaLaptopCode } from "react-icons/fa"; // Font Awesome icon

export default function HeroImage() {
  return (
    <div className="flex flex-col justify-start items-start py-16 md:py-24 lg:py-32">
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 font-poppins leading-tight">
        Dan Jones
      </h1>
      <div className="flex items-center mt-4">
        <FaLaptopCode className="text-blue-500 text-3xl md:text-4xl mr-3" />
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 font-poppins">
          Software Development
        </h2>
      </div>
    </div>
  );
}
