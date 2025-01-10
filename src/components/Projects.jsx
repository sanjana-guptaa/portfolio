import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { projectsData } from "../constants/index.js";
import { techLogos } from "../assets/index.js";
import {
  FaPython,
  FaBrain,
  FaTwitter,
  FaChartLine,
  FaStethoscope,
  FaDatabase,
  FaShapes,
} from "react-icons/fa";
import {
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineGithub,
  AiFillPieChart,
} from "react-icons/ai";
import { GiAbacus, GiArtificialIntelligence } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import { TbDatabaseSearch } from "react-icons/tb";
import { SiThealgorithms } from "react-icons/si";
import { MdInsertChart } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const techIconMap = {
  python: FaPython,
  "time series analysis": FaChartLine,
  arima: AiOutlineBarChart,
  sarima: MdInsertChart,
  "machine learning": GiArtificialIntelligence,
  "naive bayes": GiAbacus,
  "bi-lstm": SiThealgorithms,
  nlp: FaBrain,
  "social media analysis": FaTwitter,
  "k-means": FaShapes,
  "power bi": AiFillPieChart,
  "data visualization": AiOutlineLineChart,
  "data analysis": TbDatabaseSearch,
  pandas: FaDatabase,
  "scikit-learn": FaBrain,
  healthcare: FaStethoscope,
  "predictive analysis": AiOutlineLineChart,
};

const getTechIcon = (tech) => {
  const Icon = techIconMap[tech.toLowerCase()];
  return Icon || null;
};

const Projects = () => {
  const projectRefs = useRef([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Machine Learning",
    "Data Analysis",
    "NLP",
    "Time Series",
    "Healthcare",
    "Clustering",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(selectedCategory),
        );

  useEffect(() => {
    // Simple GSAP Animation for Entrance
    projectRefs.current.forEach((el) => {
      if (!el) return; // Prevent errors for missing refs

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50, // Start below
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true, // Animation happens only once
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-darkBackground dark:to-darkCardBackground transition-colors duration-300"
    >
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-extrabold text-textPrimary dark:text-darkTextPrimary mb-8 uppercase tracking-wider"
        >
          Creative Works & Contributions
        </motion.h2>

        {/* Categories */}
        <div className="flex justify-center mb-8 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group relative h-full w-full overflow-hidden rounded-3xl bg-white dark:bg-darkCardBackground shadow-lg transform hover:scale-[1.02] transition-transform`}
            >
              {/* Background Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-50 z-0"
              />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col gap-4 h-full">
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-textPrimary dark:text-darkTextPrimary hover:underline"
                  >
                    {project.title}
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-darkTextPrimary hover:text-primaryHover dark:hover:text-darkTextSecondary transition text-2xl"
                      title="GitHub"
                    >
                      <AiOutlineGithub />
                    </a>
                    {/*<a*/}
                    {/*  href={project.external}*/}
                    {/*  target="_blank"*/}
                    {/*  rel="noopener noreferrer"*/}
                    {/*  className="text-primary dark:text-darkTextPrimary hover:text-primaryHover dark:hover:text-darkTextSecondary transition text-2xl"*/}
                    {/*  title="Live Project"*/}
                    {/*>*/}
                    {/*  <FiExternalLink />*/}
                    {/*</a>*/}
                  </div>
                </div>
                <p className="text-textSecondary dark:text-darkTextSecondary leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.technologies.map((tech, i) => {
                    const Icon = getTechIcon(tech); // Get the icon from the helper function
                    return Icon ? (
                      <div
                        key={i}
                        className="flex p-2 gap-2 items-center justify-center rounded-full bg-background dark:bg-darkBackground shadow-md hover:scale-105 transition-transform"
                      >
                        <Icon className="text-primary w-8 h-8" />{" "}
                        {/* Render the icon */}
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {tech}
                        </span>
                        {/* Render the label */}
                      </div>
                    ) : (
                      <span
                        key={i}
                        className="px-2 py-1 leading-8 text-xs rounded-lg bg-accent text-white"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
