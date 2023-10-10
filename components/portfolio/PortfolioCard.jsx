import Image from "next/image";

export default function PortfolioCard({ image }) {
  return (
    <div className="relative max-w-full hover:cursor-pointer duration-500 hover:transform hover:scale-105">
      <Image src={image} alt="Profile image" />
    </div>
  );
}
