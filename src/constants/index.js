// Navigation Links
import { uniLogos } from "../assets/index.js";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

// About Section
export const aboutData = {
  description:
    "As a Data Scientist with expertise in data analytics, machine learning, and cloud technologies, I specialize in transforming data into actionable insights. Proficient in Python, SQL, R, and Power BI, I am dedicated to continuously evolving with industry trends. My goal is to leverage data-driven solutions to deliver meaningful value and impactful results across diverse domains.",
  highlights: [
    "Master's in Data Science with a GPA of 3.95/4",
    "Strong expertise in Python, SQL, R, and Power BI",
    "Experienced in Machine Learning & Cloud Technologies",
    "Developed web-based solutions and dashboards for enhanced user experiences",
    "Proficient in data visualization using Tableau, Power BI, and Seaborn",
    "Worked on advanced ML models, K-means clustering, and sentiment analysis",
  ],
  buttons: [
    {
      label: "Download Resume",
      icon: "AiOutlineDownload",
      action: "downloadResume",
    },
    {
      label: "Hire Me",
      icon: "AiOutlineUserAdd",
      link: "contact",
    },
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sanjana-gupta-sg/",
      icon: "AiFillLinkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/sanjana-guptaa",
      icon: "AiFillGithub",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
      icon: "AiFillInstagram",
    },
  ],
};

// Projects Section
export const projectsData = [
  {
    title: "Time Series Analysis for Seasonal and Non-Seasonal Data",
    description:
      "Forecasted Bitcoin prices using ARIMA and airline passenger traffic using SARIMA. Applied Box-Jenkins methodology for model selection and evaluation.",
    link: "https://github.com/sanjana-guptaa/Time-Series-Analysis-for-seasonal-and-non-seasonal-data",
    technologies: ["Python", "Time Series Analysis", "ARIMA", "SARIMA"],
    categories: ["Time Series", "Forecasting", "Data Analysis"],
  },
  {
    title: "Sentiment Analysis for Twitter Data",
    description:
      "Applied data preprocessing techniques and machine learning algorithms for sentiment analysis. Achieved 86% accuracy using Naive Bayes and 78% using Bi-LSTM.",
    link: "https://github.com/sanjana-guptaa/sentiment-analysis",
    technologies: ["Python", "Machine Learning", "Naive Bayes", "Bi-LSTM"],
    categories: ["Machine Learning", "NLP", "Social Media Analysis"],
  },
  {
    title: "Customer Segmentation and Recommendation",
    description:
      "Performed clustering with K-means and developed a recommendation system. Visualized customer segments and key metrics with Power BI.",
    link: "https://github.com/sanjana-guptaa/customer-segmentation-recommendation",
    technologies: ["Python", "K-means", "Power BI", "Data Visualization"],
    categories: ["Clustering", "Recommendation System", "Data Visualization"],
  },
  {
    title: "Equipment Predictive Analysis",
    description:
      "Developed a predictive model to forecast demand for surgical equipment based on historical usage data. Leveraged machine learning techniques for demand prediction and optimized inventory management in hospitals.",
    link: "https://github.com/RU-Health-Hack-SurgiTech/Equipment-Predictive-Analysis",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "Scikit-learn",
    ],
    categories: ["Healthcare", "Predictive Analysis", "Machine Learning"],
  },
];

// Experience Section
export const experienceData = [
  {
    title: "Web Support and Content Migration Assistant",
    company: "Stevens Institute of Technology, Hoboken, NJ",
    date: "Aug 2024 - Aug 2024",
    responsibilities: [
      "Designed web layouts using Contentful, JavaScript, HTML, and CSS.",
      "Analyzed user behavior to improve site navigation and accessibility.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Om Enterprises, Mumbai, India",
    date: "Jun 2022 - May 2023",
    responsibilities: [
      "Streamlined data integration across warehouses with Python scripts, reducing errors by 90%.",
      "Visualized insights with Power BI to optimize inventory levels and billing cycles.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "D. Y. Patil University, Nerul, India",
    date: "Jun 2021 - Oct 2021",
    responsibilities: [
      "Developed a web-based learning management system with Python, SQL, and JavaScript.",
      "Integrated Power BI dashboards to monitor student performance trends.",
    ],
  },
];

// Education Section
export const educationData = [
  {
    degree: "MS in Data Science",
    institution: "Stevens Institute of Technology, Hoboken, NJ",
    duration: "Aug 2023 - May 2025",
    GPA: "3.95/4",
    logo: uniLogos.uniStevens,
    courses: [
      "Time Series",
      "Statistical Methods",
      "Optimization Models",
      "Deep Learning",
      "Machine Learning",
    ],
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "University of Mumbai, India",
    duration: "Aug 2019 - May 2023",
    GPA: "8.27/10",
    logo: uniLogos.uniMumbai,
    courses: [
      "Artificial Intelligence",
      "Python",
      "SQL",
      "Data Science & Business Intelligence",
      "Data Mining",
    ],
  },
];

// Achievements Section
export const achievementsData = [
  {
    title: "Peer Leader",
    description:
      "Conducted mentoring sessions to support graduate students at Stevens Institute of Technology.",
  },
  {
    title: "Publicity Chief",
    description:
      "Directed the publicity team for social media marketing at RAIT ACM Student Chapter.",
  },
  {
    title: "Event Planning & Management",
    description:
      "Led the planning team for Annual Technical Festival, Elixir 2019 at Ramrao Adik Institute.",
  },
];

// Contact Section
export const contactData = {
  email: "sgupta58@stevens.edu",
  linkedin: "https://www.linkedin.com/in/sanjana-gupta-sg/",
  github: "https://github.com/sanjana-guptaa",
};
