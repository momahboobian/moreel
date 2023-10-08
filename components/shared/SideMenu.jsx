import Image from "next/image";
import Link from "next/link";
import { FaFileCode, FaUserGraduate } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import {
  BiSolidLeaf,
  BiSolidMessageDetail,
  BiSolidHomeAlt2,
} from "react-icons/bi";

export default function SideMenu() {
  return (
    <section className="flex ">
      <div className="flex flex-col sm:justify-between items-center mt-5 md:mr-3 md:mt-2 p-6 bg-secondary-dark text-white rounded-2xl ">
        <div className="flex-none">
          <GiMoon
            size={28}
            className="text-orange-400 mb-40 transform -rotate-45 hover:rotate-180 hover:text-white hover:cursor-pointer"
          />
        </div>
        <div className="flex-none space-y-10 ">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center group">
            <BiSolidHomeAlt2
              size={20}
              className="text-gray-800 group-hover:text-white hover:cursor-pointer"
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400  hover:cursor-pointer group">
            <FaFileCode
              size={20}
              className="text-gray-400 group-hover:text-gray-800"
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400  hover:cursor-pointer group">
            <MdWork
              size={20}
              className="text-gray-400 group-hover:text-gray-800"
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400  hover:cursor-pointer group">
            <BiSolidLeaf
              size={20}
              className="text-gray-400 group-hover:text-gray-800"
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400  hover:cursor-pointer group">
            <FaUserGraduate
              size={18}
              className="text-gray-400 group-hover:text-gray-800"
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-400  hover:cursor-pointer group">
            <BiSolidMessageDetail
              size={20}
              className="text-gray-400 group-hover:text-gray-800"
            />
          </div>
        </div>
        <div className="grow h-96 mt-4 mb-36"> </div>
      </div>
    </section>
  );
}
