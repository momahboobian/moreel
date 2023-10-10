import cardImage from "../../public/images/design.jpg";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section className="flex flex-col justify-between pt-16 mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center p-4 sm:px-32 xl:px-48 2xl:px-60">
        <h4 className="text-4xl font-semibold">Portfolio</h4>
        <p className="font-normal text-base text-center text-gray-500 p-4">
          Explore my professional journey through software development, product
          design, and multimedia production.
        </p>
      </div>
      <div className="flex justify-center font-normal text-center">
        <ul className="flex text-start gap-6 whitespace-nowrap">
          <li className=" text-orange-400 hover:cursor-pointer ">
            All Categories
          </li>
          <li className=" hover:text-orange-400 hover:cursor-pointer ">
            UI Design
          </li>
          <li className=" hover:text-orange-400 hover:cursor-pointer ">
            Web Development
          </li>
          <li className=" hover:text-orange-400 hover:cursor-pointer ">
            Video Production
          </li>
          <li className=" hover:text-orange-400 hover:cursor-pointer ">
            Sound Design
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 items-center text-center gap-4 pt-10  ">
        <PortfolioCard image={cardImage} />
        <PortfolioCard image={cardImage} />
        <PortfolioCard image={cardImage} />
        <PortfolioCard image={cardImage} />
        <PortfolioCard image={cardImage} />
        <PortfolioCard image={cardImage} />
      </div>
    </section>
  );
}
