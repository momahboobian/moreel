import { useRecoilState } from "recoil";
import { selectedCategoryState } from "@/recoil/categoriesState";
import PortfolioCard from "@/reusable/PortfolioCard";
import portfolioData from "@/data/portfolioData";

interface Category {
  name: string;
}

const categories: Category[] = [
  { name: "All Categories" },
  { name: "UI Design" },
  { name: "Web Development" },
  { name: "Video Production" },
  { name: "WordPress" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPortfolioData =
    selectedCategory === "All Categories"
      ? portfolioData
      : portfolioData.filter((item) => item.tags.includes(selectedCategory));

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
                key={cat.name}
                className={`${
                  selectedCategory === cat.name ? "text-orange-400" : ""
                } hover:text-orange-400 hover:cursor-pointer`}
                onClick={() => handleCategoryClick(cat.name)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredPortfolioData.map((item) => (
          <PortfolioCard key={item.id} image={item.image} alt={item.alt} />
        ))}
      </div>
    </section>
  );
}
