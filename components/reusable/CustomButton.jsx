import React from "react";

export default function CustomButton({ title, link, icon }) {
  return (
    <button className="font-medium text-secondary-dark items-center rounded-lg bg-orange-400 px-4 py-2">
      <a href={link} className="text-right flex items-center whitespace-pre">
        {title.toUpperCase()}
        {icon &&
          React.cloneElement(icon, { size: 24, style: { marginLeft: "8px" } })}
      </a>
    </button>
  );
}
