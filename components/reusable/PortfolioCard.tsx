import Image from "next/image";
import Link from "next/link";

interface CustomPortfolioProps {
  image: string;
  alt: string;
  shortDesc: string;
  tags: string[];
  deployedUrl?: string;
  githubUrl?: string;
}

export default function PortfolioCard({
  image,
  alt,
  shortDesc,
  tags,
  deployedUrl,
  githubUrl,
}: CustomPortfolioProps) {
  return (
    <div className="relative max-w-full cursor-pointer rounded-md duration-500 hover:transform hover:scale-105 group overflow-hidden">
      {deployedUrl && (
        <Link href={deployedUrl} target="_blank" rel="noopener noreferrer">
          <div className="rounded-md overflow-hidden">
            <div className="absolute -right-10 w-[33rem] h-[33rem] -mt-8 transition-all duration-1000 transform translate-x-full bg-white opacity-80 rotate-12 group-hover:translate-x-1 ease-in-out"></div>
            <Image src={image} alt={alt} width={500} height={500} priority={true} />
          </div>
       
      <div className="flex justify-center items-center w-full relative">
        <p className="absolute text-black bottom-48 left-2 space-x-2 opacity-0 group-hover:opacity-80 transition-opacity duration-1000">
          {shortDesc}
        </p>
        {tags && tags.length > 0 && (
          <div className="absolute flex flex-wrap items-center justify-center bottom-1 left-2 space-y-1 space-x-2 -ml-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary-light text-black text-xs rounded-full  opacity-0 group-hover:opacity-80 transition-opacity duration-1000"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      </Link>
      )}
    </div>
  );
}
