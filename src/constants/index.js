import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tensorflow,
  redis,
  csharp,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  tripguide,
  threejs,
  bosch,
  siemens,
  pathvu,
  airbnb,
  blog,
  cassandra,
  resnet50,
  mindgrid,
  ppg

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "CSharp",
    icon: csharp,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Siemens",
    icon: siemens,
    iconBg: "#383E56",
    date: "Feb 2025 - Apr 2025 | May 2024 - Aug 2024",
    points: [
      "Developed a waveform selection feature using C# and .NET, enabling users to filter simulation outputs and reduce unnecessary storage usage.",
      "Designed and tested RESTful APIs, using Postman to debug integrations; ensuring smooth communication across system components.",
      "Implemented front-end features with ASP.NET, TypeScript, and Kendo UI enhancing simulation workflows and user interaction",
      "Restructured Azure storage handling after analyzing simulation bottlenecks, which significantly improved data retrieval speed and overall responsiveness.",
      "Ensured robust and maintainable code through high-coverage unit tests, SonarQube analysis, and continuous performance monitoring with Azure tools."
    ],
  },
  {
    title: "Software Engineer Fellow",
    company_name: "PathVu",
    icon: pathvu,
    iconBg: "#383E56",
    date: "Feb 2024 - Apr 2024",
    points: [
      "Developed a Python-based application using Tkinter and CloudCompare to evaluate LiDAR files and compute slope metrics (running, cross, transition, landing).",
      "Designed a modular GUI with guided point selection, reference images, and automated CloudCompare launch to assist users with no prior LiDAR experience.",
      "Evaluated alternative slope measurement tools and data workflows, helping select the most effective approach for data collection.",
      "Participated in data collection and validation, aligning LiDAR-derived slopes with level gauge readings and achieving <3% error in most categories.",
      "Documented usage workflows, performance metrics, and proposed recommendations for future automation using ML-based point selection and segmentation."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Bosch",
    icon: bosch,
    iconBg: "#383E56",
    date: "Aug 2021 - Jul 2023",
    points: [
      "Developed and maintained core software modules responsible for event-trigger logic, fault detection, and structured data handling in diagnostic applications.",
      "Designed unit tests from the ground up(TDD approach) to validate module functionality and edge cases, boosting overall code reliability and maintainability.",
      "Collaborated with cross-functional teams to identify, debug, and resolve software issues, supporting smooth integration across system components.",
      "Participated in the full SDLC, from interpreting technical specifications through design, implementation, integration, and system testing—gaining deep experience in agile workflows.",
      "Maintained compliance with industry standards by following guidelines, ensuring adherence to automotive quality and safety practices."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const git_link = "https://github.com/hithaishree98"
const projects = [
  {
    name: "Roam & Relish Blogging Platform",
    description:
      "Designed a food & travel blog featuring user authentication, dynamic CRUD for posts/comments, and an admin dashboard with analytics.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: git_link,
  },
  {
    name: "Distributed Log Analysis & Verifiable Queries",
    description:
      "Built a multi-node Cassandra cluster to ingest and analyze real web-server logs and integrated Merkle tree layer verify query results.",
    tags: [
      {
        name: "cassandra",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: cassandra,
    source_code_link: git_link,
  },
  {
    name: "PPG Paint Preference Analysis",
    description:
      "Performed end-to-end paint color EDA in R, built regression models to predict durability, and trained classifiers to distinguish popular vs. unpopular paints.",
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "tidyverse",
        color: "green-text-gradient",
      },
      {
        name: "ggplot2",
        color: "pink-text-gradient",
      },
    ],
    image: ppg,
    source_code_link: git_link,
  },
  {
    name: "MindGrid: AI Tic Tac Showdown",
    description:
      "Python-based Tic Tac Toe game with an unbeatable AI powered by the Minimax algorithm, featuring a PyGame interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "minimax",
        color: "pink-text-gradient",
      },
    ],
    image: mindgrid,
    source_code_link: git_link,
  },
  {
    name: "NYC Airbnb Analysis Dashboard",
    description:
      "Interactive Tableau dashboard to explore NYC Airbnb listings analyzing bookings by room type, pricing trends and more features.",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: git_link,
  },
  {
    name: "ResNet50 Chest Cancer Detection",
    description:
      "Implemented a custom ResNet50 to classify chest CT scans into four medical conditions, regularization, dropout, and early stopping.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: resnet50,
    source_code_link: git_link,
  },
];

export { services, technologies, experiences, testimonials, projects };
