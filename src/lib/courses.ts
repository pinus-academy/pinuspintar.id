import { CourseCardProps } from "@/lib/courseTypes";

export const courses: CourseCardProps[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Master modern web development with JavaScript, React, and Node.js",
    benefits: [
      "Certificate",
      "Job Assistance",
      "Job Assistance",
      "Job Assistance",
      "Job Assistance",
      "Job Assistance"
    ],
    price: 25000000000,
    discountPrice: 13000000,
    startDate: "2025-04-30",
    duration: 12,
    durationType: "weeks",
    level: "Intermediate",
    type: "Online",
    category: "development",
    featured: true,
    image: "/js.png",
    url: "https://crm.deployaja.id/lp/full-stack-web-development",
    classType: "Live Class",
    time: "19:00 - 21:00 WIB",

    mentor: [
      {
        image: "/mentor.png",
        name: "Muhammad Haedar Alfatah",
        role: "Full-Stack Developer"
      }
    ],

    education: [
      { key: "Frontend Development", value: "HTML, CSS, JavaScript, Next.js" },
      { key: "Backend Development", value: "Node.js, Express.js, MongoDB" },
      { key: "API", value: "RESTful APIs & GraphQL" },
      { key: "Auth", value: "API integration and authentication" },
      { key: "Version Control", value: "Git & GitHub" },
      { key: "Deployment", value: "Cloud service deployment" },
      { key: "Final Project", value: "Build and present portfolio project" }
    ]
  },

  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user-centered design and create stunning interfaces",
    benefits: ["Certificate"],
    price: 1800000,
    discountPrice: 1499000,
    startDate: "2025-09-01",
    duration: 12,
    durationType: "weeks",
    level: "Beginner",
    type: "Hybrid",
    category: "design",
    featured: true,
    image: "/js.png",
    url: "",
    classType: "Online & Offline",
    time: "18:30 - 20:30 WIB",

    mentor: [
      {
        image: "/mentor.png",
        name: "Jane Doe",
        role: "UI/UX Designer"
      }
    ],

    education: [
      {
        key: "Introduction",
        value: "UI/UX principles, design thinking, user research"
      },
      {
        key: "Wireframing",
        value: "Low-fidelity sketches and design structure"
      },
      {
        key: "Prototyping",
        value: "High-fidelity prototypes with modern tools"
      }
    ]
  },

  {
    id: 3,
    title: "Data Science Bootcamp",
    description:
      "Analytics, machine learning, and AI fundamentals for real-world applications",
    benefits: ["Certificate", "Job Assistance", "Internship Opportunities"],
    price: 3000000,
    discountPrice: 2499000,
    startDate: "2025-09-01",
    duration: 12,
    durationType: "weeks",
    level: "Advanced",
    type: "Offline",
    category: "data",
    featured: false,
    image: "/cloud.png",
    url: "",
    classType: "Offline Class",
    time: "09:00 - 12:00 WIB",

    mentor: [
      {
        image: "/mentor.png",
        name: "John Smith",
        role: "Data Scientist"
      }
    ],

    education: [
      { key: "Python", value: "Data analysis & visualization" },
      { key: "Machine Learning", value: "Supervised & unsupervised models" },
      { key: "AI Fundamentals", value: "Neural networks & ML workflow" }
    ]
  },

  {
    id: 4,
    title: "Java Programming",
    description:
      "Learn the fundamentals of Java programming and build your first Java application",
    benefits: [],
    price: 1500000,
    discountPrice: 1299000,
    startDate: "2025-09-01",
    duration: 12,
    durationType: "weeks",
    level: "Beginner",
    type: "Online",
    category: "marketing",
    featured: true,
    image: "/java.png",
    classType: "Live Class",
    time: "19:00 - 21:00 WIB",

    mentor: [
      {
        image: "/mentor.png",
        name: "Alex Johnson",
        role: "Java Developer"
      }
    ],

    education: [
      { key: "Java Basics", value: "Syntax, variables, control flow" },
      { key: "OOP", value: "Classes, objects, inheritance, polymorphism" },
      { key: "Apps", value: "Building simple Java applications" }
    ]
  },

  {
    id: 5,
    title: "Digital Marketing Essentials",
    description:
      "Master the basics of digital marketing, including SEO, social media, and email marketing",
    benefits: ["Certificate", "Job Assistance"],
    price: 2000000,
    discountPrice: 1799000,
    startDate: "2025-09-01",
    duration: 12,
    durationType: "weeks",
    level: "Intermediate",
    type: "Hybrid",
    category: "marketing",
    featured: false,
    image: "/marketing.png",
    url: "",
    classType: "Hybrid Class",
    time: "18:00 - 20:00 WIB",

    mentor: [
      {
        image: "/mentor.png",
        name: "Sarah Kim",
        role: "Digital Marketing Specialist"
      }
    ],

    education: [
      { key: "SEO", value: "Keyword research & on-page optimization" },
      { key: "Social Media", value: "Instagram, TikTok, Facebook strategy" },
      { key: "Ads", value: "Google Ads & Meta Ads setup" },
      { key: "Analytics", value: "Tracking & optimization" }
    ]
  }
];
