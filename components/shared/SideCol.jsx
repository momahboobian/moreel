import { useEffect } from "react";
import Image from "next/image";
import bannerImage from "../../public/images/MoReel.jpg";
import SocialIcons from "../reusable/SocialIcons";
import { animateSkills } from "../utils/skillsCloud";
import CustomButton from "../reusable/CustomButton";
import { AiOutlineBlock, AiOutlineDownload } from "react-icons/ai";

const socialLinks = [
  {
    type: "linkedin",
    url: "https://www.linkedin.com/in/mo-mahboobian/",
  },
  { type: "twitter", url: "https://twitter.com/momahboobian/" },
  {
    type: "instagram",
    url: "https://www.instagram.com/mo.mahboobian/",
  },
  { type: "website", url: "https://www.moreel.me/" },
];

const extraSkills = [
  "Attention to details",
  "Adaptability",
  "Self-motivation",
  "Organisational skills",
  "Communication skills",
  "Problem-solving skills",
  "Professincy on",
];

export default function SideCol() {
  // Call the animation function

  useEffect(() => {
    animateSkills();
    setInterval(animateSkills, 200000);
  }, []);
  return (
    <section className="flex flex-col sm:justify-between items-center mt-5 md:ml-3 md:mt-2 p-6 space-y-6 bg-secondary-dark text-white rounded-2xl pb-36">
      <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <Image src={bannerImage} alt="Profile image" width={500} height={500} />
      </div>
      <div className="flex flex-col items-center w-full text-left">
        <h2 className="text-2xl whitespace-pre">Mo Mahboobian</h2>
        <p className="flex flex-col items-center mt-4 font-normal text-base text-gray-500">
          <span className="">Software Developer</span>{" "}
          <span className="whitespace-pre ">& Video Engineer</span>
        </p>
      </div>
      <div className="flex gap-2">
        <SocialIcons socialLinks={socialLinks} />
      </div>
      {/* Line separator */}
      <hr className="my-4 w-full border-gray-300 opacity-80" />
      <div className="text-left text-white whitespace-pre">
        <p className="flex justify-between text-base gap-24">
          <span>Email:</span>{" "}
          <a href="mailto:info@moreel.me" className="text-right">
            info@moreel.me
          </a>
        </p>
        <p className="flex justify-between text-base">
          <span>Location:</span> London, UK
        </p>
      </div>
      {/* Line separator */}
      <hr className="my-6 w-full border-gray-300 opacity-80" />
      <div className="w-full justify-start text-left space-y-2">
        <h3 className="text-xl">Languages</h3>
        <p className="font-normal  text-gray-500">English</p>
        <hr className="w-full border-orange-400 border-t-4 rounded-md" />
        <p className="pt-2 font-normal  text-gray-500">Persian</p>
        <hr className="w-full border-orange-400 border-t-4 rounded-md" />
      </div>
      {/* Line separator */}
      <hr className=" my-6 w-full border-gray-300 opacity-80" />
      <div className="w-full justify-start text-left space-y-2">
        <h3 className="text-xl">Skills</h3>
        <div id="skills-container"></div>
      </div>
      {/* Line separator */}
      <hr className=" my-6 w-full border-gray-300 opacity-80" />
      <div className="w-full justify-start text-left space-y-2">
        <h3 className="text-xl">Extra Skills</h3>
        <ul className="list-none text-orange-400 space-y-1">
          {extraSkills.map((skill, index) => (
            <li key={index} className="text-gray-500 flex items-center">
              <AiOutlineBlock size={24} className="text-orange-400 mr-2" />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Line separator */}
      <hr className=" my-6 w-full border-gray-300 opacity-80" />
      <CustomButton
        title={"Download CV"}
        link={""}
        icon={<AiOutlineDownload />}
      >
        Download CV
      </CustomButton>
    </section>
  );
}
