import Image from "next/image";

interface CustomPortfolioProps {
  image: string;
  alt: string;
  tags: string;
}

export default function PortfolioCard({
  image,
  alt,
  tags,
}: CustomPortfolioProps) {
  return (
    <div className="relative max-w-full cursor-pointer duration-500 hover:transform hover:scale-105">
      <Image
        src={image}
        alt={alt}
        layout="responsive"
        objectFit="cover"
        width={400}
        height={400}
      />
    </div>
  );
}
