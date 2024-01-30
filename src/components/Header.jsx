import ContactLink from "./ContactLink";

export default function Header() {
  return (
    <div className="flex items-center h-64">
      <div className="w-8/12 ">
        <h1 className="text-3xl font-bold">Dan Jones - Portfolio</h1>
      </div>

      <ContactLink />
    </div>
  );
}
