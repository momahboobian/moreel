import Image from "next/image";
import bannerImage from "../../public/images/MoReel.jpg";

export default function Sidebar() {
  return (
    <section className="flex flex-col sm:justify-between items-center p-4 mt-5 md:mt-2 bg-secondary-dark text-white rounded-2xl">
      <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <Image
          layout="fill"
          objectFit="cover"
          src={bannerImage}
          alt="Profile image"
        />
      </div>
      <div className="flex flex-col items-center w-full text-left ">
        <h2 className="text-2xl font-bold whitespace-pre mt-4">
          Mo Mahboobian
        </h2>
        <p className="flex flex-col items-center mt-4 font-normal text-base text-gray-500 ">
          <span className="">Software Developer</span>{" "}
          <span className="whitespace-pre ">& Video Engineer</span>
        </p>
      </div>
    </section>
  );
}
