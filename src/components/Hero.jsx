import { styles } from "../styles.js";
import { logo } from "../assets";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { techLogos } from "../assets";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { aboutData } from "../constants";
import { resume } from "../assets";
import { gsap } from "gsap";

const Hero = () => {
  const iconsRef = useRef([]);

  const { description, highlights, buttons, socialLinks } = aboutData;
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Sanjana_Gupta_Resume.pdf";
    link.click();
  };

  useEffect(() => {
    gsap.fromTo(
      ".tech-logo",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 },
    );
  }, []);

  return (
    <section
      id="about"
      className="relative py-32 w-full min-h-screen mx-auto bg-background dark:bg-darkBackground"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-5 md:px-10 lg:px-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 border border-primary dark:border-darkCardBackground rounded-lg bg-white dark:bg-darkCardBackground shadow-lg w-full md:w-2/3"
        >
          <h3 className="text-textPrimary dark:text-darkTextPrimary text-base md:text-xl leading-relaxed mb-5">
            {description}
          </h3>

          <ul className="text-textSecondary dark:text-darkTextSecondary text-sm md:text-base list-disc ml-5 mb-5 space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            {buttons.map((button, index) => {
              const Icon =
                button.icon === "AiOutlineDownload"
                  ? AiOutlineDownload
                  : button.icon === "AiOutlineUserAdd"
                    ? AiOutlineUserAdd
                    : null;

              return button.action === "downloadResume" ? (
                <button
                  key={index}
                  onClick={handleDownloadResume}
                  className="bg-accent text-background dark:text-darkBackground px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:bg-primaryHover dark:hover:bg-darkCardBackground transition transform"
                >
                  {Icon && <Icon className="text-xl" />}
                  {button.label}
                </button>
              ) : (
                <Link
                  key={index}
                  to={button.link}
                  smooth={true}
                  duration={500}
                  className="bg-accent text-background dark:text-darkBackground px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:bg-primaryHover dark:hover:bg-darkCardBackground transition transform"
                >
                  {Icon && <Icon className="text-xl" />}
                  {button.label}
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Right Tilt Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full md:w-1/3"
        >
          <TiltCard />
          <div className="flex mt-14 gap-6 justify-center sm:justify-start">
            {socialLinks.map((social, index) => {
              const Icon =
                social.icon === "AiFillLinkedin"
                  ? AiFillLinkedin
                  : social.icon === "AiFillGithub"
                    ? AiFillGithub
                    : AiFillInstagram;

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primaryHover dark:text-darkTextPrimary dark:hover:text-darkTextSecondary text-5xl transition transform hover:scale-110"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="relative py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:bg-gradient-to-b dark:from-darkBackground dark:to-darkCardBackground transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-10 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20"></div>
        <div className="absolute bottom-0 right-10 w-60 h-60 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-5 relative z-10">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-4xl font-extrabold text-textPrimary dark:text-darkTextPrimary mb-8 uppercase tracking-wider"
            style={{
              textShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)", // Subtle shadow for emphasis
            }}
          >
            Tech Stack
          </motion.h2>

          {/* Tech Logos */}
          <div className="flex flex-wrap gap-6 justify-center">
            {Object.entries(techLogos).map(([key, logo], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                }}
                className="flex items-center justify-center w-20 h-20 bg-white dark:bg-darkCardBackground rounded-2xl shadow-lg hover:shadow-xl transition-transform"
              >
                <img
                  src={logo}
                  alt={key}
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center">
        <Link to="projects" smooth={true} duration={500}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary dark:border-darkTextPrimary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent dark:bg-darkTextPrimary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-72 w-60 md:h-96 md:w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 dark:from-darkCardBackground dark:to-darkBackground object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <motion.img
        src={logo}
        alt="Dynamic Tilt Image"
        className="w-full h-full rounded-xl object-cover shadow-hero-light dark:shadow-hero-dark-rich"
        style={{
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
};
