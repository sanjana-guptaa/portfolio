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
    "As a Data Scientist, I bring expertise in data analytics, machine learning, artificial intelligence, and cloud technologies to transform complex datasets into actionable insights. Skilled in Python, SQL, R, and modern visualization tools, I design and deploy scalable data solutions that drive decision-making across industries. My experience spans developing web-based tools, interactive dashboards, and advanced ML models, always with a focus on delivering measurable impact and user-centric outcomes.",
  highlights: [
    "Master's in Data Science - GPA 3.9/4.0",
    "Proficient in Python, SQL, R, and Power BI for end-to-end data solutions",
    "Experienced in Machine Learning & Cloud Technologies",
    "Developed web-based solutions and dashboards for enhanced user experiences",
    "Worked on advanced ML models, K-means clustering, time series and sentiment analysis",
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
    // {
    //   platform: "Instagram",
    //   url: "https://www.instagram.com",
    //   icon: "AiFillInstagram",
    // },
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
      "Developed a predictive model to forecast demand for surgical equipment based on historical usage data. Leveraged machine learning techniques for demand prediction and optimized inventory management in hospitals. Won the Choice Awards at Rutgers Health Hack 2024 for this project. ",
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
    title: "Graduate Assistant – Civil, Environmental and Ocean Engineering Department",
    company: "Stevens Institute of Technology, Hoboken, NJ",
    date: "Jan 2025 - May 2025",
    responsibilities: [
      "Directed a research initiative on 10+ years of Lake Hopatcong water quality data, applying time series analysis, trend detection, and multivariate statistical modeling to evaluate environmental health and sustainability.",
      "Led 40+ office hours for 150+ students, mentoring best practices in statistics and data analysis using Python, R, SQL."

    ]
  
    },
  {
    title: "Data Migration Assistant",
    company: "Stevens Institute of Technology, Hoboken, NJ",
    date: "Jul 2024 - Aug 2024",
    responsibilities: [
      "Designed web layouts using Contentful, JavaScript, HTML, and CSS.",
      "Analyzed user behavior using Power BI to improve site navigation and accessibility.",
    ],
  },
  {
    title: "Data Scientist",
    company: "Om Enterprises, Mumbai, India",
    date: "Jun 2022 - Jun 2023",
    responsibilities: [
      "Orchestrated the integration of multi-warehouse datasets for 50+ clients using Python, enhancing data consistency and reducing manual reconciliation errors by 95%, enhancing operational reliability across projects.",
      "Automated ETL pipelines with Python and SQL to consolidate and transform warehouse and procurement data, generating interactive dashboards that accelerated reporting and decision-making by 60%.",
      "Analyzed 100K+ SQL records to optimize resource allocation and project efficiency, using Excel & Power BI"
    ],
  },
  {
    title: "Summer Intern ",
    company: "D. Y. Patil University, Mumbai, India",
    date: "Jun 2021 - Oct 2021",
    responsibilities: [
      "Developed a full-stack learning management system in Python, SQL, and Flask; served 2000+ users with features like forums, meetups, and submission tracking; increased user engagement by 100%",
      "Integrated admin dashboards using Power BI for metrics like course completion, progress, grades, login activity, etc.",
    ],
  },
];

// Education Section
export const educationData = [
  {
    degree: "MS in Data Science",
    institution: "Stevens Institute of Technology, Hoboken, NJ",
    duration: "Aug 2023 - May 2025",
    GPA: "3.9/4\.0",
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
    institution: "Ramrao Adik Institute of Technology",
    duration: "Aug 2019 - May 2023",
    GPA: "3.8/4\.0",
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
    title: "Choice Award – Rutgers HealthHack 2024",
    description:
      "Developed an AI-driven hospital resource allocation system (SurgiTech) to optimize scheduling, equipment usage, and coordination between patients and doctors, improving operational efficiency and reducing delays in surgeries.",
  },
  {
    title: "Graduate Peer Leader",
    description:
      "Conducted mentoring sessions to support graduate students at Stevens Institute of Technology.",
  },
  {
    title: "Hackathon Team Lead",
    description:
      "NYU, Rutgers, Stevens - Multiple MVPs delivered in under 48 hours ",
  },
  {
    title: "Publicity Chief",
    description:
      "Directed the publicity team for social media marketing at RAIT ACM Student Chapter.",
  },
  {
    title: "Event Planning & Management",
    description:
      "Led the planning team for Annual Technical Festival, Elixir 2019 at Ramrao Adik Institute of Technology.",
  },
];

// Contact Section
export const contactData = {
  email: "sanjanagupta.ds@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjana-gupta-sg/",
  github: "https://github.com/sanjana-guptaa",
};
