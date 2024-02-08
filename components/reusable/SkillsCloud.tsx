import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  skillPropertiesSelector,
  shuffledSkillsSelector,
} from "../../recoil/atomStates";

interface SkillAnimationStyle {
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
}

export default function Skills() {
  const animatedSkills = useRecoilValue(shuffledSkillsSelector);
  const skillProperties = useRecoilValue(skillPropertiesSelector);

  const [animationStyles, setAnimationStyles] = useState<SkillAnimationStyle[]>(
    []
  );

  useEffect(() => {
    const styles = animatedSkills.map((skill, index) => ({
      left: skillProperties[index].left,
      top: skillProperties[index].top,
      animation: `move-skill ${skillProperties[index].animationDuration}s linear infinite`,
      animationDelay: `${index * 0.7}s`,
    }));

    setAnimationStyles(styles);
  }, [animatedSkills, skillProperties]);

  return (
    <div className="skills-container">
      {animatedSkills.map((skill, index) => (
        <p
          key={index}
          className="skill font-normal text-gray-500"
          style={animationStyles[index]}
          dangerouslySetInnerHTML={{ __html: skill }}
        />
      ))}
    </div>
  );
}
