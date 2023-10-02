import Image from "next/image";
import CustomCard from "./CustomCard";

export default function Expertise() {
  return (
    <section className="flex flex-col sm:justify-between items-start mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center w-full p-4 ">
        <h1 className="text-5xl font-bold ">Expertise</h1>
        <p className="font-normal text-base text-gray-500 py-6">
          Experienced in software development and product design, I bring a
          versatile skill set that complements my proficiency in video and audio
          production. This diverse expertise fosters innovative problem-solving.
        </p>
      </div>
      <div className=" flex gap-6">
        <CustomCard
          icon={
            <Image
              className="text-base m-4"
              src="/images/svg/coding.svg"
              alt="Web-Development"
              width={100}
              height={100}
            />
          }
          title={"Web Development"}
          desc={"Blog, E-Commerce"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-4"
              src="/images/svg/coding.svg"
              alt="Web-Development"
              width={100}
              height={100}
            />
          }
          title={"Web Development"}
          desc={"Blog, E-Commerce"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-4"
              src="/images/svg/coding.svg"
              alt="Web-Development"
              width={100}
              height={100}
            />
          }
          title={"Web Development"}
          desc={"Blog, E-Commerce"}
        />
      </div>
    </section>
  );
}
