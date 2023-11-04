import React from "react";

interface CustomButtonProps {
  title: string;
  link?: string;
  icon?: any;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  link,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="font-medium text-secondary-dark items-center rounded-lg bg-orange-400 px-4 py-2 hover:ring-orange-200 hover:ring-2  transition duration-150 ease-in-out"
    >
      <a href={link} className="text-right flex items-center whitespace-pre">
        {title.toUpperCase()}
        {icon &&
          React.cloneElement(icon, { size: 24, style: { marginLeft: "8px" } })}
      </a>
    </button>
  );
};

export default CustomButton;
