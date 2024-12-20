import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer
    className="py-8"
    style={{
      backgroundColor: "#FFD448", // Footer background color
      fontFamily: "'Kulim Park', sans-serif", // Apply Kulim Park for footer
    }}
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      {/* Footer Text */}
      <p
        className="text-center text-sm md:text-left text-black"
        style={{ fontFamily: "'Parkin Sans', sans-serif" }} // Apply Parkin Sans for text
      >
        © {new Date().getFullYear()} NeverMinds. All rights reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a
          href="#"
          className="text-black hover:text-white transition duration-300 transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          className="text-black hover:text-white transition duration-300 transform hover:scale-110"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="text-black hover:text-white transition duration-300 transform hover:scale-110"
          aria-label="Twitter"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
