import Introduction from "./Introduction";
import HeroImage from "./HeroImage";
import ContactLink from "./ContactLink";

export default function HeroContainer() {
  return (
    <div className="mx-6 md:mx-14 lg:mx-18 xl:mx-60">
      {/* Top Row: Introduction + ContactLink */}
      <div className="grid grid-cols-12 gap-4 items-start mt-5 md:mt-10">
        <div className="col-span-8">
          <Introduction />
        </div>
        <div className="col-span-4 flex justify-end">
          <ContactLink />
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-10">
        <HeroImage />
      </div>
    </div>
  );
}
