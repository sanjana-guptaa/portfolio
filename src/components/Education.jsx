import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationData } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    timelineRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, x: -100 }, // Slide in from left
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: true,
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="education"
      className="py-20 bg-background dark:bg-darkBackground transition-colors duration-300"
    >
      <div className="container mx-auto px-5 relative">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-extrabold text-textPrimary dark:text-darkTextPrimary mb-8 uppercase tracking-wider"
          style={{
            textShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)", // Subtle shadow for emphasis
          }}
        >
          My Education Journey
        </motion.h2>

        {/* Education Timeline */}
        <div className="relative flex flex-col gap-8">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col lg:flex-row items-start gap-8 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Institution Logo */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <img
                  src={education.logo}
                  alt={`${education.institution} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white dark:bg-darkCardBackground border border-primary dark:border-darkTextSecondary p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary mb-2">
                  {education.degree}
                </h3>
                <p className="text-lg font-medium text-secondary dark:text-darkTextSecondary mb-2">
                  {education.institution} • {education.duration}
                </p>
                <p className="text-md text-textSecondary dark:text-darkTextSecondary mb-4">
                  <span className="font-semibold text-primary dark:text-darkTextPrimary">
                    GPA:
                  </span>{" "}
                  {education.GPA}
                </p>

                {/* Key Courses */}
                <div>
                  <h4 className="text-lg font-semibold text-textPrimary dark:text-darkTextPrimary mb-2">
                    Key Courses:
                  </h4>
                  <ul className="list-disc pl-5 text-md text-textSecondary dark:text-darkTextSecondary space-y-2">
                    {education.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
