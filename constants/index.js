import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import AppleIcon from "./../public/assets/icons/apple.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "iOS Developer",
    icon: <AppleIcon />,
  },
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
];

const technologies = {
  mobile: [
    {
      name: "iOS",
      icon: "/assets/icons/apple.svg",
      link: "https://developer.apple.com/ios/",
    },
    {
      name: "Swift",
      icon: "/assets/tech/swift.svg",
      link: "https://www.swift.org/",
    },
    {
      name: "SwiftUI",
      icon: "/assets/tech/swiftui.svg",
      link: "https://developer.apple.com/xcode/swiftui/",
    },
    {
      name: "Xcode",
      icon: "/assets/tech/xcode.svg",
      link: "https://developer.apple.com/xcode/",
    },
    {
      name: "Kotlin (KMM)",
      icon: "/assets/tech/kotlin.svg",
      link: "https://kotlinlang.org/docs/multiplatform.html",
    },
    {
      name: "React Native",
      icon: "/assets/tech/react.svg",
      link: "https://reactnative.dev/",
    },
  ],
  languages: [
    {
      name: "C++",
      icon: "/assets/tech/cpp.svg",
      link: "https://isocpp.org/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
};

const experiences = [
  {
    title: "iOS Developer",
    company_name: "Motive",
    icon: "/assets/company/motive-logo.svg",
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Present",
    points: [
      "Led iOS development for Find Asset on Map, driving BLE-based nearby asset discovery in the Driver App.",
      "Built the Locate Asset iOS flow with BLE scanning, search and filters, Bluetooth permissions, and navigation support.",
      "Added feature-flag-based rollout support for BLE asset finding to enable staged releases.",
      "Refactored Reefer Monitoring formatting into reusable components with automated test coverage.",
      "Fixed key Reefer Monitoring iOS UX issues, including refresh state retention and log-detail scrolling.",
    ],
  },
  {
    title: "iOS Developer Intern",
    company_name: "Motive",
    icon: "/assets/company/motive-logo.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Jun 2025",
    points: [
      "Integrated chatbot support into the iOS app and built cross-platform modules using Kotlin Multiplatform Mobile (KMM).",
      "Applied RxSwift to enable reactive architecture and enhance the overall user experience.",
      "Collaborated with the mobile team to ship maintainable, well-tested features following best practices.",
    ],
  },
  {
    title: "B.Tech in Information Technology",
    company_name: "IIIT Allahabad",
    icon: "/assets/company/iiita-logo.svg",
    iconBg: "#E6DEDD",
    date: "2021 - 2025",
    points: [
      "Bachelor of Technology in Information Technology, CGPA 8.22 / 10.",
      "Built a strong foundation in data structures, algorithms, and full-stack development.",
      "Solved 1000+ problems across LeetCode and Codeforces through competitive programming.",
    ],
  },
  {
    title: "Higher & Secondary Education",
    company_name: "Army Public School, S.P. Marg, Lucknow",
    icon: "/assets/company/aps-logo.svg",
    iconBg: "#E6DEDD",
    date: "Until 2021",
    points: [
      "Class XII (Senior Secondary) - scored 95.2%.",
      "Class X (Secondary) - scored 94.4%.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "StoreSavvy",
    description:
      "A full-stack E-Commerce platform with product search and filtering, cart and payments, JWT authentication, and separate user and admin panels. Admins can monitor payments, orders, and users through a dedicated dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express", color: "orange-text-gradient" },
      { name: "jwt", color: "yellow-text-gradient" },
    ],
    image: "/assets/projects/storesavvy.png",
    source_code_link: "https://github.com/MohitLucifer/ECOMMERCE_HOST",
    deployed_link: "https://storesavvy.netlify.app/",
  },
  {
    name: "SnappyTalk",
    description:
      "A real-time chat application where users can join and message each other instantly. Built with Node.js and Socket.IO for multi-user, low-latency communication across devices and locations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/snappytalk.png",
    source_code_link: "https://github.com/MohitLucifer/chatAppHost",
    deployed_link: "https://snappytalk.netlify.app/login",
  },
  {
    name: "Face Attendance Tracker",
    description:
      "An AI-based attendance system that uses facial recognition to identify and verify students from webcam images in real time. Integrates with a Firebase database to manage attendance records using computer vision techniques.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
      { name: "computer-vision", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/face-attendance.png",
    source_code_link:
      "https://github.com/MohitLucifer/Face-recognition_attendenec",
    deployed_link:
      "https://github.com/MohitLucifer/Face-recognition_attendenec",
  },
  {
    name: "Work Manager",
    description:
      "A productivity app to organize and manage work efficiently. Provides the tools to streamline your workflow, track tasks, and collaborate seamlessly with colleagues.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/work-manager.png",
    source_code_link: "https://github.com/MohitLucifer/Work-manager",
    deployed_link: "https://work-manager-ten.vercel.app/login",
  },
  {
    name: "Weather App",
    description:
      "A weather-finding application where users can look up the current weather for any city. Uses the OpenWeatherMap API to report conditions including humidity, atmospheric pressure, and wind speed.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "openweather-api", color: "green-text-gradient" },
      { name: "html5", color: "pink-text-gradient" },
      { name: "css3", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/weather.png",
    source_code_link: "https://github.com/MohitLucifer/weatherapp",
    deployed_link: "https://github.com/MohitLucifer/weatherapp",
  },
  {
    name: "Hostel Management System",
    description:
      "A system that automates lodging operations - managing room allocation, student details, and fee records. It simplifies administrative tasks, adds check-in/check-out security logs, and enables efficient resource allocation.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/hostel.png",
    source_code_link:
      "https://github.com/MohitLucifer/Hostel-management-System-Project",
    deployed_link:
      "https://github.com/MohitLucifer/Hostel-management-System-Project",
  },
  {
    name: "Email Spam Detection",
    description:
      "A machine learning project that classifies emails as spam or ham. Uses natural language processing to extract features such as word frequency and keywords, training models like Naive Bayes and SVM on labeled datasets.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
      { name: "scikit-learn", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/email-spam.png",
    source_code_link: "https://github.com/MohitLucifer/Email_sapm",
    deployed_link: "https://github.com/MohitLucifer/Email_sapm",
  },
  {
    name: "BuzzBit",
    description:
      "A React Native news app that fetches and displays live news updates. Features multiple tabs (Discover, News, Profile, Saved) offering trending news, quick segment access, profile management, and article bookmarking.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "news-api", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/buzzbit.png",
    source_code_link: "https://github.com/MohitLucifer/React-Native-NewsApp",
    deployed_link: "https://github.com/MohitLucifer/React-Native-NewsApp",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/MohitLucifer",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/mohitkumar00228",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/mohit_kumar_real/",
  },
];

const heroTexts = [
  "iOS Developer",
  500,
  "Software Developer",
  500,
  "MERN Stack Developer",
  500,
  "Backend Developer",
  500,
  "Problem Solver",
  500,
  "Freelancer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
