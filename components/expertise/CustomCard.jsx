export default function CustomCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col text-center items-center whitespace-nowrap bg-secondary-dark text-white rounded-lg p-8 shadow-md">
      {icon && <div className="fill-current text-green-600 ">{icon}</div>}
      <div className="text-2xl">{title}</div>
      <div className="text-gray-500 mt-2">{desc}</div>
    </div>
  );
}
