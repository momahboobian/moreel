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
      className="flex font-medium text-secondary-dark items-center rounded-lg bg-orange-400 px-4 py-2 hover:ring-orange-200 hover:ring-2 transition duration-150 ease-in-out whitespace-pre"
    >
      {title.toUpperCase()}
      {<span className="text-xl">{icon}</span>}
    </button>
  );
}
