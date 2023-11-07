interface CustomCardProps {
  icon?: JSX.Element;
  title: string;
  desc: string;
}

export default function CustomCard({ icon, title, desc }: CustomCardProps) {
  return (
    <div className="flex flex-col text-center items-center bg-secondary-dark text-white rounded-2xl p-8 duration-500 hover:transform hover:scale-105">
      <div className="fill-current text-green-600 ">{icon}</div>
      <div className="text-xl">{title}</div>
      <div className="text-gray-500 mt-2">{desc}</div>
    </div>
  );
}
