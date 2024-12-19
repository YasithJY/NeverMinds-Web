import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="py-8 bg-gradient-to-r from-[#FFD448] to-[#FFD448] text-soft-pearl">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      {/* Footer Text */}
      <p className="text-center text-sm md:text-left">
        © {new Date().getFullYear()} NeverMinds. All rights reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a
          href="#"
          className="text-soft-pearl hover:text-dandelion-yellow transition duration-300 transform hover:scale-110"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          className="text-soft-pearl hover:text-dandelion-yellow transition duration-300 transform hover:scale-110"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="text-soft-pearl hover:text-dandelion-yellow transition duration-300 transform hover:scale-110"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
