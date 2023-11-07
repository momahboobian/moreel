import { atom, selector } from "recoil";

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
