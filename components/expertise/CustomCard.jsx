export default function CustomCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col text-center items-center whitespace-nowrap bg-secondary-dark sm:min-w-[20rem] sm:max-w-[28rem] text-white rounded-3xl p-8 duration-500 hover:transform hover:scale-105 ">
      {icon && <div className="fill-current text-green-600 ">{icon}</div>}
      <div className="text-xl">{title}</div>
      <div className="text-gray-500 mt-2">{desc}</div>
    </div>
  );
}
