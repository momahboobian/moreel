import Image from "next/image";
import bannerImage from "../../public/images/gui-yellow.png";
import CustomButton from "../reusable/CustomButton"; // Rename the imported component

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mt-5 md:mt-2 bg-secondary-dark text-white rounded-2xl">
      <div className="w-full md:w-1/2 text-left p-4 ">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold whitespace-pre-line">
          Crafted Inspirations,
          <br />
          Through <span className="text-orange-400">Full Stack</span>
          <br />
          Innovation.
        </h1>
        <p className="font-normal text-sm md:text-base lg:text-lg text-gray-500 py-6">
          Product Designer and Software developer. I specialized in responsive
          design and visual development.
        </p>
        <CustomButton title={"About Me ->"} link={""} />

        {/* <div className="p-20 bg-slate-400">Hi</div> */}
      </div>
      <div className="hidden w-full md:block md:w-1/2 lg:w-1/3 mt-8 md:mt-0 ">
        <Image src={bannerImage} alt="Data web banner image" />
      </div>
    </section>
  );
}
