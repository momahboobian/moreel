import { atom } from "recoil";

export const skillsState = atom<string[]>({
  key: "skillsState",
  default: [
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
  ],
});
