import Image from "next/image";

interface CustomPortfolioProps {
  image: string;
  alt: string;
}

export default function PortfolioCard({ image, alt }: CustomPortfolioProps) {
  return (
    <div className="relative max-w-full cursor-pointer duration-500 hover:transform hover:scale-105">
      <Image src={image} alt={alt} width={500} height={500} priority={true} />
    </div>
  );
}