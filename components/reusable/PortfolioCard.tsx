import Image from "next/image";

interface CustomPortfolioProps {
  image: string;
  alt: string;
}

export default function PortfolioCard({ image, alt }: CustomPortfolioProps) {
  return (
    <div className="relative max-w-full cursor-pointer rounded-md duration-500 hover:transform hover:scale-105 group overflow-hidden">
      <div className="rounded-md overflow-hidden ">
        <span className="absolute -right-10 w-[33rem] h-[33rem] -mt-8 transition-all duration-1000 transform translate-x-full bg-white opacity-80 rotate-12 group-hover:-translate-x-1 ease-in-out"></span>
        <Image src={image} alt={alt} width={500} height={500} priority={true} />
      </div>
      <div></div>
      <p className="absolute text-black bg-white">{/* short dispcription */}</p>
    </div>
  );
}
