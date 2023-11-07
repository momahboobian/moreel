interface CustomButtonProps {
  title: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export default function CustomButton({
  title,
  icon,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex relative rounded-lg font-medium text-secondary-dark items-center px-5 py-3 overflow-hidden group bg-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 hover:ring-1 hover:ring-offset-1 hover:ring-orange-400 transition-all ease-out duration-300 whitespace-pre"
    >
      {title.toUpperCase()}
      <span className="relative text-xl">{icon}</span>
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    </button>
  );
}
