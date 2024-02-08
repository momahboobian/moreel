import { atom, selector } from "recoil";

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "All Categories",
});


export const heroState = atom({
  key: "heroState",
  default: false,
});



const initialSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "Jest",
  "GitHub",
  "Python",
  "Express.js",
  "PostgreSQL",
  "AWS",
  "Next.js",
];

export const skillsState = atom<string[]>({
  key: "skillsState",
  default: initialSkills,
});

export const shuffledSkillsSelector = selector({
  key: "shuffledSkillsSelector",
  get: ({ get }) => {
    const skills = get(skillsState);
    const shuffledSkills = [...skills];
    for (let i = shuffledSkills.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSkills[i], shuffledSkills[j]] = [
        shuffledSkills[j],
        shuffledSkills[i],
      ];
    }
    return shuffledSkills;
  },
});

export const skillPropertiesSelector = selector({
  key: "skillProperties",
  get: ({ get }) => {
    const skills = get(shuffledSkillsSelector);
    return skills.map((_, index) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: Math.floor(Math.random() * 2) + 4,
    }));
  },
});
