import { atom, selector } from "recoil";

// Function to shuffle an array randomly
function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex, tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
}

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
