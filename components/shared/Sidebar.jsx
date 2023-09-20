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
    <section className="flex flex-col sm:justify-between items-center p-10 mt-5 space-y-4 md:mt-2 bg-secondary-dark text-white rounded-2xl">
      <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <Image
          layout="fill"
          objectFit="cover"
          src={bannerImage}
          alt="Profile image"
        />
      </div>
      <div className="flex flex-col items-center w-full text-left ">
        <h2 className="text-2xl whitespace-pre ">Mo Mahboobian</h2>
        <p className="flex flex-col items-center mt-4 font-normal text-base text-gray-500 ">
          <span className="">Software Developer</span>{" "}
          <span className="whitespace-pre ">& Video Engineer</span>
        </p>
      </div>
      <div className="flex gap-2">
        <SocialIcons socialLinks={socialLinks} />
      </div>
      <hr className="my-4 w-full border-gray-300 opacity-40" />{" "}
      {/* Line separator */}
    </section>
  );
}
