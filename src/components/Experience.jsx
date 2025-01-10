import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { experienceData } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const timelineRef = useRef([]);

  useEffect(() => {
    timelineRef.current.forEach((el) => {
      if (!el) return; // Skip null refs

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 }, // Start with opacity 0 and below position
        {
          opacity: 1,
          y: 0, // Fade in and slide up
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Trigger when 80% of the element is in view
            toggleActions: "play none none none",
            once: true, // Animation happens only once
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-darkBackground dark:to-darkCardBackground transition-colors duration-300"
    >
      {/* Decorative Circles */}
      {/*<div className="absolute top-0 left-10 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30"></div>*/}
      {/*<div className="absolute bottom-0 right-10 w-60 h-60 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-30"></div>*/}

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
          My Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary dark:bg-darkTextPrimary h-full"></div>

          {experienceData.map((experience, index) => (
            <div
              key={index}
              ref={(el) => (timelineRef.current[index] = el)}
              className={`relative mb-4 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary dark:bg-darkTextPrimary rounded-full"></div>

              {/* Date Marker */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0
                    ? "left-[calc(50%+50px)]"
                    : "right-[calc(50%+50px)]"
                } text-sm text-textSecondary dark:text-darkTextSecondary font-medium`}
              >
                {experience.date}
              </div>

              {/* Timeline Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-white dark:bg-darkCardBackground border border-primary dark:border-darkTextSecondary p-6 rounded-lg shadow-lg hover:shadow-2xl max-w-lg transition-transform"
              >
                {/* Content */}
                <h3 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary mb-2">
                  {experience.title}
                </h3>
                <p className="text-sm text-textSecondary dark:text-darkTextSecondary font-semibold mb-3">
                  {experience.company}
                </p>
                <ul className="list-disc list-inside text-textSecondary dark:text-darkTextSecondary">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
