import { GiMoon } from "react-icons/gi";

export default function SideMenu() {
  return (
    <section className="flex flex-col sm:justify-between items-center mt-5 md:mr-3 md:mt-2 p-6 space-y-6 bg-secondary-dark text-white rounded-2xl">
      <GiMoon size={24} className="text-orange-400 transform -rotate-45" />
    </section>
  );
}
