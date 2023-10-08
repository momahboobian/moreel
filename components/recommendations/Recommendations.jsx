export default function Recommendations() {
  return (
    <section className="flex flex-col justify-between pt-16 mt-5 md:mt-2 text-white rounded-2xl">
      <div className="flex flex-col items-center w-full p-4 ">
        <h4 className="text-5xl font-bold ">Recommendations</h4>
        <p className="font-normal text-base text-gray-500 py-6">
          Recommendations
        </p>
      </div>
      <div className="flex justify-center font-normal	text-center"></div>
    </section>
  );
}
<div className="grid grid-cols-3 items-center text-center gap-4 pt-10">
        <div className="relative  max-w-full">
          <Image src={cardImage} alt="Profile image" />
        </div>
        <div className="relative max-w-full">
          <Image src={cardImage} alt="Profile image" />
        </div>
        <div className="relative max-w-full">
          <Image src={cardImage} alt="Profile image" />
        </div>