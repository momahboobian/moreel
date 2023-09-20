export default function Sidebar() {
  return (
    <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2 bg-secondary-dark text-white rounded-2xl">
      <div className="w-full md:w-1/3 text-left p-4 ">
        <h2 className="text-2xl font-bold whitespace-pre  ">Mo Mahboobian</h2>
        <p className="font-normal text-base text-gray-500 py-6">
          <span className=" whitespace-pre py-6">Software Developer &</span>
          <span className="whitespace-pre py-6"> Video Engineer</span>
        </p>
      </div>
    </section>
  );
}
