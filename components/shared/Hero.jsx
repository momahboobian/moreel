import Image from "next/image";
import bannerImage from "../../public/images/gui-yellow.png";
import CustomButton from "../reusable/CustomButton"; // Rename the imported component

export default function Hero() {
  return (
    <section className="flex flex-col w-full sm:justify-between items-center mt-5 md:mt-2 sm:flex-row bg-secondary-dark text-white rounded-2xl">
      <div className="w-full md:w-1/3 text-left p-4 ">
        <h1 className="text-5xl font-bold whitespace-pre ">
          Crafted Inspirations,
          <br />
          Through <span className="text-orange-400">Full Stack</span>
          <br />
          Innovation.
        </h1>
        <p className="font-normal text-base text-gray-500 py-6">
          Product Designer and Software developer. I specialized in responsive
          design and visual development.
        </p>
        <CustomButton title={"About Me ->"} link={""} />

        {/* <div className="p-20 bg-slate-400">Hi</div> */}
      </div>
      <div className="w-full sm:w-1/3 text-right float-right mt-8 sm:mt-0 ">
        <Image
          layout="responsive"
          src={bannerImage}
          alt="Data web banner image"
        />
      </div>
    </section>
  );
}
