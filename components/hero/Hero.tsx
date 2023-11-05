import { useRecoilState } from "recoil";
import { heroState } from "../../recoil/heroState";
import Image from "next/image";
import bannerImage from "../../public/images/gui-yellow.png";
import CustomButton from "../reusable/CustomButton";
import Link from "next/link";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(heroState);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`${isModalOpen ? "filter blur-[5px]" : ""}`}>
        <section className="flex flex-col md:flex-row justify-between items-center mt-5 md:mt-2 bg-secondary-dark text-white rounded-2xl  mx-auto ">
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
            <CustomButton title={"About Me ->"} onClick={handleButtonClick} />

            {/* <div className="p-20 bg-slate-400">Hi</div> */}
          </div>
          <div className="hidden w-full md:block md:w-1/2 lg:w-1/3 mt-8 md:mt-0 ">
            <Image
              src={bannerImage}
              alt="Data web banner image"
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-start justify-center p-2 z-50"
        >
          <section className="flex flex-col md:flex-row justify-between items-center mt-3 md:mt-20 bg-secondary-dark text-white rounded-2xl">
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full rounded-lg p-8 "
            >
              <h2 className="text-3xl font-medium mb-4">About Me</h2>
              <p className="font-normal text-m md:text-base lg:text-lg py-6 max-w-4xl ">
                I am a software developer and video engineer with a passion for
                coding and visual storytelling. Adapting to evolving
                circumstances and mastering new technologies are among my
                strengths. <br />
                My experience extends from digital journalism to video
                engineering, utilizing a range of tools to create engaging
                content. I thrive in team settings, valuing collaboration and
                agile methodologies to deliver high-quality software and visual
                solutions...
              </p>
              <Link href="/about-me">
                <CustomButton title={"Read More ->"} />
              </Link>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
