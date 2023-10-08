import cardImage from "../../public/images/design.jpg";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="flex flex-col justify-between mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center w-full p-4 ">
        <h4 className="text-5xl font-bold ">Portfolio</h4>
        <p className="font-normal text-base text-gray-500 py-6">portfolio</p>
      </div>
      <div className="flex justify-center font-normal	text-center">
        <ul className="flex text-start gap-6 ">
          <li className=" text-orange-400 hover:cursor-pointer ">
            All Categories
          </li>
          <li className=" hover:text-orange-400  hover:cursor-pointer ">
            UI Design
          </li>
          <li className=" hover:text-orange-400 hover:cursor-pointer ">
            Web Development
          </li>
          <li className=" hover:text-orange-400  hover:cursor-pointer ">
            Video Production
          </li>
          <li className=" hover:text-orange-400  hover:cursor-pointer ">
            Sound Design
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 items-center text-center gap-4 p-2">
        <div className="relative w-96 h-80 overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={cardImage}
            alt="Profile image"
          />
        </div>
        <div className="relative w-96 h-80 overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={cardImage}
            alt="Profile image"
          />
        </div>
        <div className="relative w-96 h-80 overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={cardImage}
            alt="Profile image"
          />
        </div>
        <div className="relative w-96 h-80 overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={cardImage}
            alt="Profile image"
          />
        </div>
        <div className="relative w-96 h-80 overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={cardImage}
            alt="Profile image"
          />
        </div>
        <div className="relative w-96 h-80 overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={cardImage}
            alt="Profile image"
          />
        </div>
      </div>
    </section>
  );
}
