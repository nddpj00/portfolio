import Introduction from "./Introduction";
import HeroImage from "./HeroImage";
import ContactLink from "./ContactLink";
export default function HeroContainer() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="mt-5 md:mt-10 col-span-6 justify-items-center">
          <Introduction />
        </div>
        <div className="mt-5 md:mt-10 col-span-3 col-start-9">
          <ContactLink />
        </div>
      </div>

      <div className="h-600">
        <HeroImage />
      </div>
    </div>
  );
}
