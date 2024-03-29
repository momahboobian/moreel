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
      <div className="flex flex-col sm:justify-between p-6 space-y-6 bg-secondary-dark text-white rounded-2xl pb-36">
        <div className="flex flex-col items-center w-full text-left space-y-5">
          <div className="relative w-32 sm:w-48 h-32 sm:h-48 overflow-hidden rounded-full ">
            <Image
              src={bannerImage}
              alt="Profile image"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl">Mo Mahboobian</h2>{" "}
          <p className="flex flex-col items-center mt-4 font-normal text-base text-gray-500">
            <span className="">Software Developer</span>
            <span className="whitespace-pre ">& Video Engineer</span>
          </p>
        </div>

        <div className="flex items-center justify-center ">
          <SocialIcons />
        </div>

        <hr className="my-4 border-gray-300 opacity-80" />
        <div className="text-left text-white space-y-4 ">
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
        <div className=" ">
          <h3 className="text-xl pb-2">Skills</h3>
          <SkillsCloud />
        </div>

        <hr className="my-6 border-gray-300 opacity-80" />
        <div className="w-full justify-start text-left space-y-2">
          <h3 className="text-xl">Extra Skills</h3>
          <ul className="list-none text-orange-400 space-y-1">
            {extraSkills.map((skill, index) => (
              <li
                key={index}
                className="text-gray-500 flex items-center whitespace-pre"
              >
                <AiOutlineBlock size={24} className="text-orange-400 mr-2" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-300 opacity-80" />
        <div className="w-full justify-start text-left space-y-2">
          <h3 className="text-xl">Languages</h3>
          <p className="font-normal  text-gray-500">English</p>
          <hr className="w-full border-orange-400 border-t-4 rounded-md" />
          <p className="pt-2 font-normal  text-gray-500">Persian</p>
          <hr className="w-full border-orange-400 border-t-4 rounded-md" />
        </div>
        <hr className=" my-6 border-gray-300 opacity-80" />
        <Link href="/download-cv">
          <CustomButton title={"Download CV "} icon={<AiOutlineDownload />} />
        </Link>
      </div>
    </section>
  );
}
