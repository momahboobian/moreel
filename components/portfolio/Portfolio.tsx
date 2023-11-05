import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { selectedCategoryState } from "../../recoil/portfolioState";
import FilteredPortfolio from "./FilteredPortfolio";

const categories = [
  "All Categories",
  "UI Design",
  "Web Development",
  "Video Production",
  "WordPress",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  useEffect(() => {
    if (selectedCategory === "All Categories") {
      setSelectedCategory("All Categories");
    }
  }, []);

  return (
    <section className="mt-2 md:mt-10 text-white w-full">
      <div className="flex flex-col items-center justify-center p-4 xl:px-40">
        <h2 className="text-4xl font-semibold">Portfolio</h2>
        <p className="font-normal text-base text-center text-gray-500 p-4">
          Explore my professional journey through software development, product
          design, and multimedia production.
        </p>
      </div>

      <div className="flex justify-center font-normal text-center pb-4">
        <div>
          <ul className="flex flex-wrap text-start gap-6">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`${
                  selectedCategory === cat ? "text-orange-400" : ""
                } hover:text-orange-400 hover:cursor-pointer`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <FilteredPortfolio />
      </div>
    </section>
  );
}
