import { useState } from "react";

export default function Introduction() {
  const [intro, setIntro] = useState("");

  const introText = `Welcome! I'm Daniel Jones, a dynamic Software Developer whose journey
      from a rich background in sales to the tech industry showcases a unique
      blend of analytical prowess and problem-solving skills. With over two
      decades of experience in developing exceptional communication and project
      management skills, I've made a successful transition to software
      development, earning a Level 5 Diploma in Web Application Development. My
      portfolio is a testament to my expertise in HTML, CSS, JavaScript, and
      Python, along with frameworks like React, Flask, and Django. Through
      projects for non-profit organizations and a bespoke e-commerce site for a
      local business, I've demonstrated a deep commitment to crafting
      innovative, user-centric digital solutions. As I advance in my career, I
      am eager to leverage my skills in dynamic teams, driving success through
      technology and collaborative innovation.`;

  const displayIntro = () => {
    setIntro(intro === "" ? introText : "");
  };

  return (
    <div className="h-5 mb-4">
      <div className="text-xl">
        <img
          className="mx-auto"
          src="https://res.cloudinary.com/dhljiows0/image/upload/v1713905031/media/my_projects/images/media_my_projects_images_about_me_nmipgi-c_scale_w_168_ljilg3.png"
          alt="about me keys"
          onClick={displayIntro}
        />
      </div>
      <div>{intro}</div>
      <hr className="border-white mt-4" />
    </div>
  );
}
