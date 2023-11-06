import { FaLinkedin, FaTwitter, FaGlobe, FaInstagram } from "react-icons/fa";
import socialLinks from "@/data/socialLinks";

interface SocialLink {
  type: "linkedin" | "twitter" | "instagram" | "website";
  url: string;
}

export default function SocialIcons() {
  return (
    <div className="flex space-x-5 sm:space-x-6 md:space-x-8">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 transition duration-300 hover:text-orange-600 hover:opacity-40"
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
