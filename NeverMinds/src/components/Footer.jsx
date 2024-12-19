const Footer = () => (
  <footer className="py-6 bg-deep-charcoal text-soft-pearl">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-center text-sm md:text-left">
        © {new Date().getFullYear()} NeverMinds. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        {["Facebook", "Instagram", "Twitter"].map((platform) => (
          <a
            key={platform}
            href="#"
            className="text-soft-pearl hover:text-dandelion-yellow transition duration-300"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
export default Footer;