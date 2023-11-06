import { useRecoilValue, useSetRecoilState } from "recoil";
import { shuffledSkillsSelector, skillsState } from "@/recoil/skillsState";
import skills from "@/data/skills";

export default function SkillsCloud() {
  const animatedSkills = useRecoilValue(shuffledSkillsSelector);
  const setSkillsState = useSetRecoilState(skillsState);

  // Initialize Recoil state with the skills array
  setSkillsState(skills);

  return (
    <div id="skills-container" className="skills-container">
      {animatedSkills?.map((skill: string, index: number) => (
        <p
          key={index}
          className="skill font-normal text-gray-500"
          style={{
            left: `${Math.random() * 100}%`, // Randomize initial left position
            top: `${Math.random() * 100}%`, // Randomize initial top position
            animation: `move-skill ${
              Math.floor(Math.random() * 2) + 4
            }s linear infinite`,
            animationDelay: `${index * 0.7}s`,
          }}
        >
          {skill}
        </p>
      ))}
    </div>
  );
}
