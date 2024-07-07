import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// Define the FooterProps interface
interface FooterProps {
  sections?: {
    title: string;
    links: { text: string; url: string }[];
  }[];
}

const Footer: React.FC<FooterProps> = ({ sections = [] }) => {
  return (
    <footer className="bg-[#151b5b] text-white">
      <div className="container mx-auto w-full py-12">
        {/* Logo and About Section */}
        <div className="p-8 md:p-0 flex flex-col md:flex-row justify-between md:items-end">
          <div>
            <h2 className="text-4xl font-bold py-2">Ultra</h2>
            <p className="opacity-70 py-2 md:w-[32ch]">
              Join our community of tech enthusiasts to learn, collaborate, and
              grow together in the ever-evolving world of technology.
            </p>
            <div className="pt-8">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Ultra. All rights reserved.
              </p>
            </div>
          </div>
          {sections &&
            sections.map((section, index) => (
              <div key={index} className="col-span-1">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <a href={link.url} className="hover:text-blue-400">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div className="flex mt-4 space-x-4 py-2">
            <a
              href="https://twitter.com/p-s1dharth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={28} className="text-white hover:text-blue-400" />
            </a>
            <a
              href="https://Instagarm.com/p-s1dharth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={28}
                className="text-white hover:text-blue-600"
              />
            </a>
            <a
              href="https://linkedin.com/in/p-sidharth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="text-white hover:text-blue-500"
              />
            </a>
            <a
              href="https://github.com/Ultra-v1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={28}
                className="text-white hover:text-neutral-600"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
