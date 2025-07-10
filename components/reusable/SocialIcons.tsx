import { FaLinkedin, FaTwitter, FaGlobe, FaInstagram } from "react-icons/fa";

interface SocialLink {
  type: "linkedin" | "twitter" | "instagram" | "website";
  url: string;
}

const socialLinks: SocialLink[] = [
  { type: "linkedin", url: "https://www.linkedin.com/in/mo-mahboobian/" },
  { type: "twitter", url: "https://x.com/momahboobian" },
  { type: "instagram", url: "https://www.instagram.com/your-username" },
];

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-10">
      {socialLinks.map((link: SocialLink, index: number) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-2 overflow-hidden text-orange-400 transition-all duration-300 ease-out hover:text-orange-300"
        >
          {link.type === "linkedin" && <FaLinkedin size={24} />}
          {link.type === "twitter" && <FaTwitter size={24} />}
          {link.type === "instagram" && <FaInstagram size={24} />}
        </a>
      ))}
    </div>
  );
}
