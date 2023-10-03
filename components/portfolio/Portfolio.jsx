export default function Portfolio() {
  return (
    <section className="flex flex-col justify-between mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center w-full p-4 ">
        <h2 className="text-5xl font-bold ">Portfolio</h2>
        <p className="font-normal text-base text-gray-500 py-6">portfolio</p>
      </div>
      <div className="flex items-center text-center w-full ">
        <ul className="flex text-start gap-6">
          <li className=" text-orange-400 hover:cursor-pointer ">
            All Categories
          </li>
          <li className=" hover:text-orange-400  hover:cursor-pointer ">
            UI Design
          </li>
          <li className=" hover:text-orange-400 hover:cursor-pointer ">
            Web Development
          </li>
          <li className=" hover:text-orange-400  hover:cursor-pointer ">
            Video Production
          </li>
          <li className=" hover:text-orange-400  hover:cursor-pointer ">
            Sound Design
          </li>
        </ul>
      </div>
    </section>
  );
}
