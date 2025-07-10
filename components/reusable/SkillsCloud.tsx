import { useEffect, useState } from "react";
import { useStore } from "../../store/store";

interface SkillAnimationStyle {
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
}

export default function Skills() {
  const {
    shuffledSkills,
    skillProperties,
    shuffleSkills,
    generateSkillProperties,
  } = useStore();

  const [animationStyles, setAnimationStyles] = useState<SkillAnimationStyle[]>(
    []
  );

  useEffect(() => {
    shuffleSkills();
    generateSkillProperties();
  }, [shuffleSkills, generateSkillProperties]);

  useEffect(() => {
    if (shuffledSkills.length > 0 && skillProperties.length > 0) {
      const styles = shuffledSkills.map((skill, index) => ({
        left: skillProperties[index].left,
        top: skillProperties[index].top,
        animation: `move-skill ${skillProperties[index].animationDuration}s linear infinite`,
        animationDelay: `${index * 0.7}s`,
      }));

      setAnimationStyles(styles);
    }
  }, [shuffledSkills, skillProperties]);

  return (
    <div className="skills-container">
      {shuffledSkills.map((skill, index) => (
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
