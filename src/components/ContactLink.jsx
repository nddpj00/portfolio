export default function ContactLink() {
  return (
    <a
      href="mailto:danieljones625@gmail.com"
      className="inline-flex items-center font-league_spartan"
    >
      <span className="invisible mr-2 text-sm md:text-md md:visible lg:text-xl">
        Contact Me
      </span>
      <i className="fa-regular fa-paper-plane" />
    </a>
  );
}
