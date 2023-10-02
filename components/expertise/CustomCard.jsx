export default function CustomCard({ icon, title, desc }) {
  return (
    <div className=" flex flex-col text-white  items-center rounded-lg bg-secondary-dark px-4 py-2">
      <div className="flex">
        {icon &&
          React.cloneElement(icon, { size: 34, style: { marginLeft: "8px" } })}
      </div>
      <h3 className="text-xl">{title.toUpperCase()}</h3>
      <p className="font-normal text-base text-gray-500 py-6">{desc}</p>
    </div>
  );
}
