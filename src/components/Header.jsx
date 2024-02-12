import ContactLink from "./ContactLink";

export default function Header() {
  return (
    <div className="flex items-center h-64 mx-10 ">
      <div className="w-8/12 flex flex-col">
        <h1 className="text-3xl font-bold font-orbitron tracking-widest mb-3">
          <span className="mr-5">D a n</span>
          <span>J o n e s</span>
        </h1>
        <h2 className="font-orbitron text-3xl tracking-widest font-bold">
          <span className="mr-5">S o f t w a r e</span>{" "}
          <span>D e v e l o p e r</span>
        </h2>
      </div>
      <div>
        <ContactLink />
      </div>
    </div>
  );
}
