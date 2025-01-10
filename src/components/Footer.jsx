import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { contactData } from "../constants/index.js";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-darkBackground dark:to-darkCardBackground py-6 transition-colors duration-300">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary to-primaryHover rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-accent to-secondary rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-5 relative z-10 flex flex-col items-center gap-10">
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-textPrimary dark:text-darkTextPrimary mb-6">
            Connect With Me
          </h3>
          <ul className="flex flex-wrap justify-center gap-8 text-textSecondary dark:text-darkTextSecondary">
            <li className="flex items-center gap-3">
              <AiOutlineMail className="text-primary dark:text-darkTextPrimary text-3xl" />
              <a
                href={`mailto:${contactData.email}`}
                className="hover:text-primary dark:hover:text-darkTextPrimary transition text-lg"
              >
                {contactData.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <AiFillLinkedin className="text-primary dark:text-darkTextPrimary text-3xl" />
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-darkTextPrimary transition text-lg"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <AiFillGithub className="text-primary dark:text-darkTextPrimary text-3xl" />
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-darkTextPrimary transition text-lg"
              >
                GitHub
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="w-full h-px bg-primary dark:bg-darkTextSecondary opacity-50"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-textSecondary dark:text-darkTextSecondary text-sm"
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-textPrimary dark:text-darkTextPrimary font-bold">
            Sanjana Gupta
          </span>
          . All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
