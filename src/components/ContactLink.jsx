export default function ContactLink() {
  return (
    <a
      href="mailto:danieljones625@gmail.com"
      className="inline-flex items-right"
    >
      <span className="invisible mr-2 text-sm md:text-md md:visible lg:text-xl font-league_spartan">
        Contact Me
      </span>
      <i className="fa-regular fa-paper-plane" />
    </a>
  );
}
