import Link from "next/link";
import Image from "next/image";
import extraSkills from "@data/extraSkills";
import bannerImage from "@/public/images/MoReel.jpg";
import SocialIcons from "@components/reusable/SocialIcons";

import SkillsCloud from "@components/reusable/SkillsCloud";
import CustomButton from "@components/reusable/CustomButton";
import { AiOutlineBlock, AiOutlineDownload } from "react-icons/ai";

export default function SideCol() {
  return (
    <section className="">
      <div className="flex flex-col p-6 space-y-6 text-white sm:justify-between bg-secondary-dark rounded-2xl pb-36">
        <div className="flex flex-col items-center w-full space-y-5 text-left">
          <div className="relative w-32 h-32 overflow-hidden rounded-full sm:w-48 sm:h-48 ">
            <Image
              src={bannerImage}
              alt="Profile image"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl">Mo Mahboobian</h2>{" "}
          <p className="flex flex-col items-center mt-4 text-base font-normal text-gray-500">
            <span className="">Software Developer</span>
            <span className="whitespace-pre ">& Video Engineer</span>
          </p>
        </div>

        <div className="flex items-center justify-center ">
          <SocialIcons />
        </div>

        <hr className="my-4 border-gray-300 opacity-80" />
        <div className="space-y-4 text-left text-white ">
          <p className="flex justify-between text-base">
            <span>Email:</span>
            <a href="mailto:info@moreel.me" className="text-right">
              info@moreel.me
            </a>
          </p>
          <p className="flex justify-between">
            <span>Location:</span> London, UK
          </p>
        </div>

        <hr className="my-6 border-gray-300 opacity-80" />
        <div className="">
          <h3 className="pb-2 text-xl">Skills</h3>
          <SkillsCloud />
        </div>

        <hr className="my-6 border-gray-300 opacity-80" />
        <div className="justify-start w-full space-y-2 text-left">
          <h3 className="text-xl">Extra Skills</h3>
          <ul className="space-y-1 text-orange-400 list-none">
            {extraSkills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center text-gray-500 whitespace-pre"
              >
                <AiOutlineBlock size={24} className="mr-2 text-orange-400" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-300 opacity-80" />
        <div className="justify-start w-full space-y-2 text-left">
          <h3 className="text-xl">Languages</h3>
          <p className="font-normal text-gray-500">English</p>
          <hr className="w-full border-t-4 border-orange-400 rounded-md" />
          <p className="pt-2 font-normal text-gray-500">Persian</p>
          <hr className="w-full border-t-4 border-orange-400 rounded-md" />
        </div>
        <hr className="my-6 border-gray-300  opacity-80" />
        <Link href="/download-cv">
          <CustomButton title={"Download CV "} icon={<AiOutlineDownload />} />
        </Link>
      </div>
    </section>
  );
}
