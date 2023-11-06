import { atom, selector } from "recoil";

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

// Update the atom with the correct type
export const skillsState = atom<string[]>({
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
