import Introduction from "./Introduction";
import HeroImage from "./HeroImage";
import ContactLink from "./ContactLink";
export default function HeroContainer() {
  return (
    <div className="mx-12">
      <ContactLink />
      <span>
        <HeroImage />
      </span>
      <span>
        <Introduction />
      </span>
    </div>
  );
}
