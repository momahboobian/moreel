import Image from "next/image";
import bannerImage from "../../public/images/MoReel.jpg";
import SocialIcons from "../reusable/SocialIcons";

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

export default function Sidebar() {
  return (
    <section className="flex flex-col sm:justify-between items-center p-6 mt-5 space-y-6 md:mt-2 bg-secondary-dark text-white rounded-2xl">
      <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <Image
          layout="fill"
          objectFit="cover"
          src={bannerImage}
          alt="Profile image"
        />
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
        <p className="flex justify-between text-base gap-8">
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
      </div>

      {/* Line separator */}
      <hr className=" my-6 w-full border-gray-300 opacity-80" />
    </section>
  );
}
