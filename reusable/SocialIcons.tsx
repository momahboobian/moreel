import { FaLinkedin, FaTwitter, FaGlobe, FaInstagram } from "react-icons/fa";

interface SocialLink {
  type: "linkedin" | "twitter" | "instagram" | "website";
  url: string;
}

const socialLinks: SocialLink[] = [
  { type: "linkedin", url: "https://www.linkedin.com/your-profile" },
  { type: "twitter", url: "https://twitter.com/your-username" },
  { type: "instagram", url: "https://www.instagram.com/your-username" },
  { type: "website", url: "https://www.your-website.com" },
];

export default function SocialIcons() {
  return (
    <div className="flex space-x-5 sm:space-x-6 md:space-x-8">
      {socialLinks.map((link: SocialLink, index: number) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-orange-400 transition duration-300 hover:text-orange-600 hover:opacity-40"
        >
          {link.type === "linkedin" && <FaLinkedin size={24} />}
          {link.type === "twitter" && <FaTwitter size={24} />}
          {link.type === "instagram" && <FaInstagram size={24} />}
          {link.type === "website" && <FaGlobe size={24} />}
        </a>
      ))}
    </div>
  );
}
