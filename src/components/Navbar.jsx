import { navLinks } from "../constants";
import { styles } from "../styles.js";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { logo, menu, close } from "../assets";
import Typical from "react-typical";

const Navbar = () => {
  const [active, setActive] = useState("About");
  const [toggle, setToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary dark:bg-darkCardBackground shadow-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 mr-auto"
          onClick={() => setActive("About")}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <p className="flex font-heading text-white dark:text-darkTextPrimary text-[22px] font-bold cursor-pointer">
            Sanjana Gupta&nbsp;
            <span className="hidden lg2:block">
              |{" "}
              <Typical
                steps={[
                  "Data Scientist",
                  6000,
                  "Data Analyst",
                  6000,
                  "Business Intelligence Analyst",
                  6000,
                  "Deep Learning Engineer",
                  6000,
                  "Big Data Analyst",
                  6000,
                  "Statistical Analyst",
                  6000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm2:flex flex-row gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              className={`${
                active === link.title
                  ? "text-white dark:text-primaryHover border-b-2 border-primaryHover"
                  : "text-white dark:text-darkTextSecondary hover:text-primaryHover"
              } text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </Link>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mx-3 p-2 bg-primary dark:bg-darkBackground text-background dark:text-darkTextPrimary rounded-full shadow-md hover:scale-105 transition-transform"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {/* Mobile Navigation Toggle */}
        <div className="sm2:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-4 bg-cardBackground dark:bg-darkBackground absolute top-16 right-4 min-w-[180px] rounded-xl z-30 shadow-lg`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-primaryHover dark:text-darkTextPrimary font-semibold"
                      : "text-textSecondary dark:text-darkTextSecondary hover:text-primaryHover"
                  } text-[14px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false); // Close menu on selection
                  }}
                >
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    className="block w-full"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
