interface CustomCardProps {
  icon?: JSX.Element;
  title: string;
  desc: string;
}

export default function CustomCard({ icon, title, desc }: CustomCardProps) {
  return (
    <div className="flex flex-col text-center items-center justify-between bg-secondary-dark text-white rounded-2xl p-8 transition-all hover:transform hover:scale-105 ease-out duration-500 ">
      <div className="w-2/4 p-2">{icon}</div>
      <div>
        <div className="text-xl">{title}</div>
        <div className="text-gray-500 mt-2">{desc}</div>
      </div>
    </div>
  );
}
