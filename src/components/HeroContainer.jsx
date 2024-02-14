import Introduction from "./Introduction";
import Header from "./Header";
import HeroImage from "./HeroImage";
export default function HeroContainer() {
  return (
    <div className="container mx-28">
      <Header />
      <HeroImage />
      <Introduction />
    </div>
  );
}
