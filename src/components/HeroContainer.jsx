import Introduction from "./Introduction";
import HeroImage from "./HeroImage";
import ContactLink from "./ContactLink";

export default function HeroContainer() {
  return (
    <div className="relative">
      {/* Top intro and contact links */}
      <div className="flex justify-between items-center mt-5 md:mt-10 mx-6 md:mx-14 lg:mx-20">
        <div>
          <Introduction />
        </div>
        <div>
          <ContactLink />
        </div>
      </div>

      {/* Hero section */}
      <div className="h-[600px] flex items-center">
        <div className="ml-[33%]">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
