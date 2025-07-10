import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/store";
import bannerImage from "@/public/images/gui-yellow.png";
import CustomButton from "@components/reusable/CustomButton";

export default function Hero() {
  const { isModalOpen, setIsModalOpen } = useStore();

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-secondary-dark text-white rounded-2xl mx-auto ">
      <div className="w-full md:w-1/2 text-left p-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold whitespace-pre-line">
          Crafted Inspirations,
          <br />
          Through <span className="text-orange-400">Full Stack</span>
          <br />
          Innovation.
        </h1>

        <p className="font-normal text-sm md:text-base lg:text-lg text-gray-500 py-6 max-w-xl  ">
          Product Designer, Software Developer, and Content Creator, I
          specialize in responsive design and visual development, creating
          immersive and compelling digital experiences.
        </p>

        <CustomButton title={"About Me ->"} link="/about" />
      </div>

      <div className="hidden w-full md:block md:w-1/2 lg:w-1/3 mt-8 md:mt-0 ">
        <Image
          src={bannerImage}
          alt="Data web banner image"
          className="max-w-full h-auto"
          priority={true}
        />
      </div>
    </section>
  );
}
