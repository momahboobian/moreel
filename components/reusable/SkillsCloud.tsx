import { useRecoilValue } from "recoil";
import {
  skillPropertiesSelector,
  shuffledSkillsSelector,
} from "@/recoil/skillsState";

export default function Skills() {
  const animatedSkills = useRecoilValue(shuffledSkillsSelector);
  const skillProperties = useRecoilValue(skillPropertiesSelector);

  return (
    <div id="skills-container" className="skills-container">
      {animatedSkills.map((skill, index) => (
        <p
          key={index}
          className="skill font-normal text-gray-500"
          style={{
            left: skillProperties[index].left,
            top: skillProperties[index].top,
            animation: `move-skill ${skillProperties[index].animationDuration}s linear infinite`,
            animationDelay: `${index * 0.7}s`,
          }}
        >
          {skill}
        </p>
      ))}
    </div>
  );
}
