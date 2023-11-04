import PortfolioCard from "./PortfolioCard";
import portfolioData from "./portfolioData";

export default function Portfolio() {
  return (
    <section className="mt-2 md:mt-10 text-white w-full">
      <div className="flex flex-col items-center justify-center p-4 xl:px-40">
        <h2 className="text-4xl font-semibold">Portfolio</h2>
        <p className="font-normal text-base text-center text-gray-500 p-4">
          Explore my professional journey through software development, product
          design, and multimedia production.
        </p>
      </div>
      <div className="flex justify-center font-normal text-center">
        <ul className="flex flex-wrap text-start gap-6 ">
          <li className="text-orange-400 hover:cursor-pointer">
            All Categories
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            UI Design
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Web Development
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Video Production
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            WordPress
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {portfolioData.map((item) => (
          <PortfolioCard key={item.id} image={item.image} />
        ))}
      </div>
    </section>
  );
}
