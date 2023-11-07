import { useRecoilValue } from "recoil";
import { shuffledSkillsSelector } from "@/recoil/skillsState";

export default function Skills() {
  const animatedSkills = useRecoilValue(shuffledSkillsSelector);

  return (
    <div id="skills-container" className="skills-container">
      {animatedSkills?.map((skill: string, index: number) => (
        <p
          key={index}
          className="skill font-normal text-gray-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
