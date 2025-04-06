import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur border-b border-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <div className="text-white text-xl font-bold tracking-wide cursor-pointer">
          <span className="text-indigo-500">/</span>nikhil.dev
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {navItems.map((item) => (
            <li key={item} className="hover:text-white transition-all duration-300">
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

      
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-[#0f0f0f] border-t border-gray-800 px-6 py-4 space-y-4 text-sm text-gray-300">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer hover:text-white transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
