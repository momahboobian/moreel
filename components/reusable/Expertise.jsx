import Image from "next/image";
import CustomCard from "../expertise/CustomCard";

export default function Expertise() {
  return (
    <section className="flex flex-col justify-between mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center w-full p-4 ">
        <h1 className="text-5xl font-bold ">Expertise</h1>
        <p className="font-normal text-base text-gray-500 py-6">
          Experienced in software development and product design, I bring a
          versatile skill set that complements my proficiency in video and audio
          production. This diverse expertise fosters innovative problem-solving.
        </p>
      </div>
      <div className=" grid grid-cols-3 items-center text-center gap-6">
        <CustomCard
          icon={
            <Image
              className="text-base m-6"
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
              src="/images/svg/illustration.svg"
              alt="Web-Development"
              width={98}
              height={98}
            />
          }
          title={"Web Development"}
          desc={"Blog, E-Commerce"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-5"
              src="/images/svg/audio.svg"
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
              src="/images/svg/photographer.svg"
              alt="Web-Development"
              width={95}
              height={95}
            />
          }
          title={"Web Development"}
          desc={"Blog, E-Commerce"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-4"
              src="/images/svg/game-development.svg"
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
              src="/images/svg/microphone.svg"
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