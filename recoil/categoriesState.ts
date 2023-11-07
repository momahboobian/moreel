import { atom } from "recoil";

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "All Categories",
});
