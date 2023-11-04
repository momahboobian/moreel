import { useRecoilState } from "recoil";
import { skillsState } from "../../recoil/skillsState";
import { useEffect } from "react";

const skills = [
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

export default function SkillsCloud() {
  const [animatedSkills, setAnimatedSkills] = useRecoilState(skillsState);

  useEffect(() => {
    // Shuffle the skills array and update Recoil state
    const shuffledSkills = shuffleArray([...skills]);
    setAnimatedSkills(shuffledSkills);

    const intervalId = setInterval(() => {
      const shuffledSkills = shuffleArray([...skills]);
      setAnimatedSkills(shuffledSkills);
    }, 200000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [setAnimatedSkills]);

  return (
    <div id="skills-container" className="skills-container">
      {animatedSkills.map((skill, index) => (
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
