import { atom, selector } from "recoil";
import portfolioData from "@data/portfolioData";

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "All Categories",
});

export const filteredPortfolioDataState = selector({
  key: "filteredPortfolioDataState",
  get: ({ get }) => {
    const selectedCategory = get(selectedCategoryState);

    if (selectedCategory === "All Categories") {
      return portfolioData;
    }

    return portfolioData.filter((item) => item.tags.includes(selectedCategory));
  },
});
