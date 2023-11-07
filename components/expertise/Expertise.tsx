import Image from "next/image";
import CustomCard from "@components/reusable/CustomCard";

export default function Expertise() {
  return (
    <section className="mt-2 md:mt-10 text-white w-full">
      <div className="flex flex-col items-center justify-center p-4 xl:px-40">
        <h2 className="text-4xl font-semibold">Expertise</h2>
        <p className="font-normal text-base text-center text-gray-500 p-4">
          Experienced in software development and product design, I bring a
          versatile skill set that complements my proficiency in video and audio
          production.
        </p>
      </div>

      {/* sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <CustomCard
          icon={
            <Image
              className="w-full h-auto"
              src="/images/svg/coding.svg"
              alt="Web-Development"
              width={150}
              height={150}
            />
          }
          title="Web Development"
          desc="Blog, E-Commerce"
        />

        <CustomCard
          icon={
            <Image
              className="w-full h-auto"
              src="/images/svg/illustration.svg"
              alt="UI-UX-Design"
              width={100}
              height={100}
            />
          }
          title="UI-UX Design"
          desc="User Interface, User Experience"
        />
        <CustomCard
          icon={
            <Image
              className="w-full h-auto"
              src="/images/svg/audio.svg"
              alt="Video-Production"
              width={100}
              height={100}
            />
          }
          title="Video Production"
          desc="Multimedia Video & Audio"
        />
        <CustomCard
          icon={
            <Image
              className=" w-full h-auto"
              src="/images/svg/mobile.svg"
              alt="Mobile-Application"
              width={100}
              height={100}
            />
          }
          title="Mobile Application"
          desc="Smartphones & Tablet App"
        />
        <CustomCard
          icon={
            <Image
              className="w-full h-auto"
              src="/images/svg/game-development.svg"
              alt="Game-Development"
              width={100}
              height={100}
            />
          }
          title="Game Development"
          desc="2D & 3d Games"
        />
        <CustomCard
          icon={
            <Image
              className="w-full h-auto"
              src="/images/svg/photographer.svg"
              alt="Photographer"
              width={100}
              height={100}
            />
          }
          title="Photography"
          desc="Portrait & Landscape"
        />
      </div>
    </section>
  );
}
