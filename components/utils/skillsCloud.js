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

// Function to apply the cloud-like animation to skills
export function animateSkills() {
  // Check if window (client-side) is defined before accessing the DOM
  if (typeof window !== "undefined") {
    const skillsContainer = document.getElementById("skills-container");
    const shuffledSkills = shuffleArray([...skills]);

    skillsContainer.innerHTML = "";

    // Define the container's width and height
    const containerWidth = skillsContainer.offsetWidth;
    const containerHeight = skillsContainer.offsetHeight;

    shuffledSkills.forEach((skill, index) => {
      const skillElement = document.createElement("p");
      skillElement.textContent = skill;
      skillElement.classList.add("skill", "font-normal", "text-gray-500");

      // Calculate a random position within the container
      const randomX = Math.floor(Math.random() * (containerWidth - 100));
      const randomY = Math.floor(Math.random() * (containerHeight - 20));

      // Apply the initial position as inline styles
      skillElement.style.left = `${randomX}px`;
      skillElement.style.top = `${randomY}px`;

      // Apply random animation properties
      skillElement.style.animationDuration = `${
        Math.floor(Math.random() * 2) + 4
      }s`; // Random animation duration
      skillElement.style.animationDelay = `${index * 0.2}s`; // Incremental animation delay

      skillsContainer.appendChild(skillElement);
    });
  }
}
