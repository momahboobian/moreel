import { atom, selector } from "recoil";
import { shuffleArray } from "../reusable/skillsCloud";

export const skillsState = atom({
  key: "skillsState",
  default: [],
});

export const shuffledSkillsSelector = selector({
  key: "shuffledSkillsSelector",
  get: ({ get }) => {
    const skills = get(skillsState);
    return shuffleArray([...skills]);
  },
});
