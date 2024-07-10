import developer from "./assets/Home/categories/developer.svg";
import designer from "./assets/Home/categories/designer.svg";
import finance from "./assets/Home/categories/finance.svg";
import engineer from "./assets/Home/categories/engineer.svg";
import marketing from "./assets/Home/categories/marketing.svg";
import projectmanager from "./assets/Home/categories/projectmanager.svg";
import sticker from "./assets/Home/sticker.png";
import sticker2 from "./assets/Home/sticker2.png";
import sticker3 from "./assets/Home/sticker3.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import frontend from "./assets/Home/frontend.webp";
import graphic from "./assets/Home/graphic.avif";
import productmanager from "./assets/Home/productmanager.webp";
import uidesigner from "./assets/Home/uidesigner.jpg";
import photography from "./assets/Home/photography.webp";
export const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Become a Freelancer",
    url: "/freelancer",
  },
  {
    title: "Browse Tasks",
    url: "/tasks",
  },

  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

export const topTalents = [
  {
    name: "Timmy Dax",
    avatar: "https://picsum.photos/200/300",
    skill: "Full Stack Developer",
    customers: "5k customers",
    description: "I make fullstack websites for my clients at a low price",
  },
  {
    name: "Thomas White",
    avatar: "https://picsum.photos/200/300",
    skill: "Backend Developer",
    customers: "2k customers",
    description: "I develop backend services for my clients at a low price",
  },
  {
    name: "Jane Doe",
    avatar: "https://picsum.photos/200/300",
    skill: "Frontend Developer",
    customers: "1k customers",
    description: "I develop frontend services for my clients at a low price",
  },
];
export const heroData = [
  {
    image: frontend,
    role: "Frontend Developer",
    name: "Timmy Dax",
    star: 5.0,
    reviews: 241
  },
  {
    image: graphic,
    role: "Graphic Designer",
    name: "Oluwaseun Oyebade",
    star: 4.9,
    reviews:93
  },
  {
    image: productmanager,
    role: "Product Manager",
    name: "Chibuzor Okafor",
    star: 4.9,
    reviews: 75
  },
  {
    image: uidesigner,
    role: "UI/UX Designer",
    name: "Joyce Aries",
    star: 5.0,
    reviews: 60
  },
  {
    image: photography,
    role: "Photographer",
    name: "Idika Precious",
    star: 4.9,
    reviews: 139
  },
];
export const categories = [
  {
    category: "Developers",
    image: developer,
    skills: 1500,
  },
  {
    category: "Designers",
    image: designer,
    skills: 1000,
  },
  {
    category: "Finance",
    image: finance,
    skills: 500,
  },
  {
    category: "Engineers",
    image: engineer,
    skills: 200,
  },
  {
    category: "Marketing",
    image: marketing,
    skills: 100,
  },
  {
    category: "Project Managers",
    image: projectmanager,
    skills: 50,
  },
];

export const projects = [
  {
    project: "Basic Website Development with HTML & CSS",
    task: "Hi, I need urgent help to code a simple, responsive web page using HTML & CSS. I will send detailed instructions and a screenshot of the desired design.",
    techStack: ["HTML", "CSS"],
    amount: "$30",
    time: "7 hours ago",
    level: "Entry level",
  },
  {
    project: "Graphic Design for Social Media Posts",
    task: "Looking for a designer to create engaging and visually appealing social media graphics for our upcoming campaign. Templates and brand guidelines will be provided.",
    techStack: ["Canva", "Photoshop"],
    amount: "$150",
    time: "2 hours ago",
    level: "Entry level",
  },
  {
    project: "Agile Project Management for a Startup",
    task: "We need a project manager to help set up and oversee Agile processes for our new app development. Responsibilities include sprint planning, team coordination, and progress tracking.",
    techStack: ["Jira", "Trello", "Slack"],
    amount: "$500",
    time: "3 days ago",
    level: "Intermediate",
  },
  {
    project: "Social Media Marketing Campaign",
    task: "We're looking for a marketing person to create and execute a social media campaign for our new product launch. The goal is to increase brand awareness and engagement.",
    // techStack: ["Facebook Ads", "Instagram", "Twitter", "Canva"],
    techStack: ["Twitter", "Canva"],
    amount: "$400",
    time: "1 day ago",
    level: "Entry Level",
  },
  {
    project: "Mechanical Engineering CAD Design",
    task: "Our startup needs a mechanical engineer to design a CAD model for a new product. The design should be precise and ready for 3D printing.",
    techStack: ["AutoCAD", "SolidWorks"],
    amount: "$350",
    time: "5 hours ago",
    level: "Intermediate",
  },
  {
    project: "Simple Bookkeeping for Small Business",
    task: "We need someone to help with basic bookkeeping tasks, such as recording transactions and reconciling accounts, for a small business.",
    techStack: ["Excel", "QuickBooks"],
    amount: "$100",
    time: "10 hours ago",
    level: "Entry level",
  },
  {
    project: "Financial Analysis for Business Plan",
    task: "Seeking a finance expert to analyze our business plan and provide detailed financial projections, including cash flow, profit margins, and break-even analysis.",
    techStack: ["Excel", "QuickBooks"],
    amount: "$250",
    time: "2 days ago",
    level: "Pro",
  },
  {
    project: "UI/UX Design for Mobile App",
    task: "We need a talented designer to create a user-friendly and visually appealing UI/UX design for our mobile app. The design should be intuitive and align with our brand identity.",
    // techStack: ["Figma", "Sketch", "Adobe XD"],
    techStack: ["Figma", "Sketch"],
    amount: "$600",
    time: "12 hours ago",
    level: "Intermediate",
  },
  {
    project: "React Native Mobile App Development",
    task: "Looking for a developer to build a cross-platform mobile app using React Native. The app should be responsive and include features such as user authentication and real-time data updates.",
    // techStack: ["React Native", "Firebase", "JavaScript"],
    techStack: ["React Native", "Firebase"],
    amount: "$700",
    time: "8 hours ago",
    level: "Intermediate",
  },
];

export const people = [
  {
    avatar: sticker2,
    name: "Getty Pink",
    text: "Gained a lot from the networks here",
  },
  {
    avatar: sticker,
    name: "Timmy Dax",
    text: "Got a full time job from InTask",
  },
  {
    avatar: sticker3,
    name: "Paul Hete",
    text: "I have made lots of money from projects",
  },
];

export const howitworks = [
  // Clients section
  [
    {
      step: 1,
      heading: "Sign Up and Complete Your Profile",
      description:
        "Create your free inTask account and fill out your profile with your skills, interests, and portfolio. A complete profile helps you stand out and attracts more project opportunities.",
    },
    {
      step: 2,
      heading: "Browse and Apply for Projects",
      description:
        "Explore a wide range of projects across various fields. Use filters to find projects that match your skills and interests. Submit applications with a cover letter and portfolio to get noticed.",
    },
    {
      step: 3,
      heading: "Start Working and Earn Money",
      description:
        "Once hired, communicate with the client to understand project requirements. Complete the project on time and to the client's satisfaction. Get paid securely through inTask and build your reputation with positive reviews.",
    },
  ],
  // Recruiters section
  [
    {
      step: 1,
      heading: "Create an Employer Account",
      description:
        "Sign up for a free employer account on inTask. Fill out your company profile with relevant details to attract talented freelancers to your projects.",
    },
    {
      step: 2,
      heading: "Post Your Project",
      description:
        "Describe your project requirements, budget, and timeline. Specify the skills and experience level needed. Your project will be visible to a pool of young talents ready to take on the challenge.",
    },
    {
      step: 3,
      heading: "Review Applications and Hire",
      description:
        "Browse through applications from qualified freelancers. Review their profiles, portfolios, and cover letters. Communicate with candidates through inTask to find the perfect match for your project.",
    },
  ],
];

export const footerLinks = [
  {
    text1: "Get to Know Us",
    text2: "About Us",
  },
  {
    text1: "Join inTask",
    text2: "Sign Up",
  },
  {
    text1: "Have a Project?",
    text2: "Talent Marketplace",
  },
];
export const footer = [
  {
    heading: "Clients",
    text: ["Sign Up", "How to Hire", "Talent Marketplace", "Hire an Agency"],
  },
  {
    heading: "Talent",
    text: [
      "Sign Up",
      "How to land a project",
      "Latest Projects",
      "inTask Plus",
    ],
  },
  {
    heading: "Resources",
    text: [
      "Help & Support",
      "Success Stories",
      "inTask Reviews",
      "Blog",
      "Community",
    ],
  },
  {
    heading: "Company",
    text: [
      "About Us",
      "Our Impact",
      "Contact Us",
      "Partner with Us",
      "Privacy Policy",
    ],
  },
];
export const socials = [<FaFacebookF />, <FaInstagram />, <FaLinkedin />];
export const done=[
"Get matched with expert freelancers in minutes",
"Dedicated 24/7 customer service team",
"Secure payments and transactions",
"Money back guarantee and anti-fraud protection"
]