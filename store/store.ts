import {create} from 'zustand';

interface SkillProperty {
  left: string;
  top: string;
  animationDuration: number;
}

interface StoreState {
  selectedCategory: string;
  isModalOpen: boolean;
  skills: string[];
  shuffledSkills: string[];
  skillProperties: SkillProperty[];
  setSelectedCategory: (category: string) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  shuffleSkills: () => void;
  generateSkillProperties: () => void;
}

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

const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const generateProperties = (skills: string[]) => {
  return skills.map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: Math.random() * 10 + 5,
  }));
};

export const useStore = create<StoreState>((set) => ({
  selectedCategory: "All Categories",
  isModalOpen: false,
  skills: initialSkills,
  shuffledSkills: [],
  skillProperties: [],
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  shuffleSkills: () => set((state) => ({ shuffledSkills: shuffleArray(state.skills) })),
  generateSkillProperties: () => set((state) => ({ skillProperties: generateProperties(state.skills) })),
}));