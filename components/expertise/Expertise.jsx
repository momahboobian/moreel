import Image from "next/image";
import CustomCard from "./CustomCard";

export default function Expertise() {
  return (
    <section className="flex flex-col justify-between pt-16 mt-5 md:mt-2 text-white rounded-2xl w-full">
      <div className="flex flex-col items-center p-4 sm:px-32 xl:px-48 2xl:px-60">
        <h2 className="text-4xl font-semibold">Expertise</h2>
        <p className="font-normal text-base text-center text-gray-500 p-4 ">
          Experienced in software development and product design, I bring a
          versatile skill set that complements my proficiency in video and audio
          production.
        </p>
      </div>
      <div className="grid 2xl:grid-cols-3 grid-cols-2 gap-4">
        <CustomCard
          icon={
            <Image
              className="m-6"
              src="/images/svg/coding.svg"
              alt="Web-Development"
              width={90}
              height={90}
            />
          }
          title={"Web Development"}
          desc={"Blog, E-Commerce"}
        />

        <CustomCard
          icon={
            <Image
              className="m-4"
              src="/images/svg/illustration.svg"
              alt="UI-UX-Design"
              width={88}
              height={88}
            />
          }
          title={"UI-UX Design"}
          desc={"User Interface, User Experience"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-5"
              src="/images/svg/audio.svg"
              alt="Video-Production"
              width={90}
              height={90}
            />
          }
          title={"Video Production"}
          desc={"Vide & Audio Multimedia showcase"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-4"
              src="/images/svg/photographer.svg"
              alt="Mobile-Application"
              width={85}
              height={85}
            />
          }
          title={"Mobile Application"}
          desc={"Smartphones & Tablet App"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-4"
              src="/images/svg/game-development.svg"
              alt="Game-Development"
              width={90}
              height={90}
            />
          }
          title={"Game Development"}
          desc={"2D & 3d Games"}
        />
        <CustomCard
          icon={
            <Image
              className="text-base m-4"
              src="/images/svg/microphone.svg"
              alt="Sound-Design"
              width={90}
              height={90}
            />
          }
          title={"Sound Design"}
          desc={"SFX, Music Product"}
        />
      </div>
    </section>
  );
}
