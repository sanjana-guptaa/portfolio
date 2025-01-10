import { achievementsData } from "../constants/index.js";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-darkCardBackground dark:via-darkBackground dark:to-darkBackground transition-colors duration-300"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary to-primaryHover rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-primaryHover to-accent rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-extrabold text-textPrimary dark:text-darkTextPrimary mb-16 uppercase tracking-wider"
          style={{
            textShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)", // Subtle shadow for emphasis
          }}
        >
          My Achievements
        </motion.h2>

        {/* Cards Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="relative group bg-white dark:bg-darkCardBackground p-6 rounded-3xl shadow-lg hover:shadow-[rgba(255,255,255,0.1)_0px_4px_15px] border border-primary dark:border-darkTextSecondary transition-transform duration-300"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 rounded-3xl z-0 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start gap-4">
                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-textPrimary dark:text-darkTextPrimary">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-md text-textSecondary dark:text-darkTextSecondary leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative Divider */}
                <div className="w-16 h-1 bg-primary dark:bg-primary rounded-full mt-2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
