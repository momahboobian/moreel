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
    <section className="flex flex-col sm:justify-between items-center mt-5 md:mr-3 md:mt-2 p-6 space-y-6 bg-secondary-dark text-white rounded-2xl">
      <GiMoon size={28} className="text-orange-400 transform -rotate-45" />
      <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
        <BiSolidHomeAlt2 size={20} className="text-gray-800" />
      </div>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <FaFileCode size={20} className="text-gray-400" />
      </div>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <MdWork size={20} className="text-gray-400" />
      </div>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <BiSolidLeaf size={20} className="text-gray-400" />
      </div>
    </section>
  );
}
