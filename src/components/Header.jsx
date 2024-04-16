import ContactLink from "./ContactLink";

export default function Header() {
  return (
    <div className="flex items-center h-64">
      <div className="w-8/12 flex flex-col">
        <h1 className="text-2xl lg:text-3xl font-extrabold font-orbitron tracking-widest mb-3">
          <span className="mr-5">D a n</span>
          <br></br>
          <span>J o n e s</span>
        </h1>
      </div>
      <div>
        <ContactLink />
      </div>
    </div>
  );
}
