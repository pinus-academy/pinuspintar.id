import { CourseCardProps } from "@/lib/courseTypes";

export const courses: CourseCardProps[] = [
  {
    id: 1,
    title: "Java Backend Development - Part 1",
    description:
      "Belajar pengembangan backend menggunakan Java dengan Spring Boot",
    benefits: [
      "Sertifikat",
      "Asistensi Kerja",
      "Proyek Portofolio",
      "Konseling Karir",
      "Sesi Koding Langsung"
    ],
    price: 1500000,
    discountPrice: 20000,
    startDate: "2025-12-01",
    duration: 2,
    durationType: "days",
    level: "Beginner",
    type: "Online",
    categories: ["Backend Development", "Java", "Spring Boot"],
    featured: true,
    image: "/course/java.png",
    url: "https://crm.deployaja.id/lp/full-stack-web-development",
    classType: "Live Class",
    time: "19:00 - 21:00 WIB",
    mentor: [
      {
        image: "/teams/Berland.png",
        name: "Berland Vardy",
        role: "Backend Developer"
      }
    ],
    education: [
      { key: "Java", value: "Java Programming" },
      { key: "Spring Boot", value: "Spring Boot Framework" },
    ],
    learningFlow: [
      { modul: 1, title: "Java Basics", description: "Variables, operators, loops" },
      { modul: 2, title: "OOP", description: "Classes, objects, polymorphism" },
      { modul: 3, title: "Projects", description: "Build simple real Java apps" }
    ]
  },

  // {
  //   id: 2,
  //   title: "UI/UX Design Fundamentals",
  //   description:
  //     "Learn the principles of user-centered design and create stunning interfaces",
  //   benefits: ["Certificate", "Portfolio Ready"],
  //   price: 1800000,
  //   discountPrice: 1499000,
  //   startDate: "2025-09-01",
  //   duration: 12,
  //   durationType: "weeks",
  //   level: "Beginner",
  //   type: "Hybrid",
  //   category: "design",
  //   featured: true,
  //   image: "/js.png",
  //   url: "",
  //   classType: "Online & Offline",
  //   time: "18:30 - 20:30 WIB",
  //   mentor: [
  //     {
  //       image: "/teams/Haedar.png",
  //       name: "Muhammad Haedar Alfatah",
  //       role: "UI/UX Designer"
  //     }
  //   ],
  //   education: [
  //     { key: "Introduction", value: "UI/UX design fundamentals" },
  //     { key: "Wireframing", value: "Low to high fidelity wireframes" },
  //     { key: "Prototyping", value: "Interactive prototypes using Figma" }
  //   ],
  //   learningFlow: [
  //     { modul: 1, title: "Design Basics", description: "Typography, colors, layout" },
  //     { modul: 2, title: "Wireframing", description: "Sketching and low fidelity wireframes" },
  //     { modul: 3, title: "Prototyping", description: "Turning wireframes into interactive designs" }
  //   ]
  // },

  // {
  //   id: 3,
  //   title: "Data Science Bootcamp",
  //   description:
  //     "Analytics, machine learning, and AI fundamentals for real-world applications",
  //   benefits: ["Certificate", "Job Assistance", "Internship Opportunities"],
  //   price: 3000000,
  //   discountPrice: 2499000,
  //   startDate: "2025-09-01",
  //   duration: 12,
  //   durationType: "weeks",
  //   level: "Advanced",
  //   type: "Offline",
  //   category: "data",
  //   featured: false,
  //   image: "/cloud.png",
  //   url: "",
  //   classType: "Offline Class",
  //   time: "09:00 - 12:00 WIB",
  //   mentor: [
  //     {
  //       image: "/teams/Haedar.png",
  //       name: "Muhammad Haedar Alfatah",
  //       role: "Data Scientist"
  //     }
  //   ],
  //   education: [
  //     { key: "Data Analysis", value: "Fundamental analytics workflow" },
  //     { key: "ML Models", value: "Supervised & unsupervised learning" },
  //     { key: "Python", value: "NumPy, Pandas, Matplotlib" },
  //     { key: "AI", value: "Neural networks & basic AI concepts" }
  //   ],
  //   learningFlow: [
  //     { modul: 1, title: "Python Essentials", description: "Numpy, Pandas, data cleaning" },
  //     { modul: 2, title: "Data Visualization", description: "Charts, graphs, EDA" },
  //     { modul: 3, title: "Machine Learning", description: "Regression, clustering, models" },
  //     { modul: 4, title: "AI Basics", description: "Neural networks & deep learning intro" }
  //   ]
  // },

  // {
  //   id: 4,
  //   title: "Java Programming",
  //   description:
  //     "Learn the fundamentals of Java programming and build your first Java application",
  //   benefits: ["Certificate"],
  //   price: 1500000,
  //   discountPrice: 1299000,
  //   startDate: "2025-09-01",
  //   duration: 12,
  //   durationType: "weeks",
  //   level: "Beginner",
  //   type: "Online",
  //   category: "development",
  //   featured: true,
  //   image: "/java.png",
  //   classType: "Live Class",
  //   time: "19:00 - 21:00 WIB",
  //   mentor: [
  //     {
  //       image: "/teams/Haedar.png",
  //       name: "Muhammad Haedar Alfatah",
  //       role: "Data Scientist"
  //     }
  //   ],
  //   education: [
  //     { key: "Java Basics", value: "Syntax, variables, data types" },
  //     { key: "OOP", value: "Classes, objects, inheritance, polymorphism" },
  //     { key: "Applications", value: "Build simple real Java applications" }
  //   ],
  //   learningFlow: [
  //     { modul: 1, title: "Java Basics", description: "Variables, operators, loops" },
  //     { modul: 2, title: "OOP", description: "Classes, objects, polymorphism" },
  //     { modul: 3, title: "Projects", description: "Build simple real Java apps" }
  //   ]
  // },

  // {
  //   id: 5,
  //   title: "Digital Marketing Essentials",
  //   description:
  //     "Master the basics of digital marketing, including SEO, social media, and email marketing",
  //   benefits: ["Certificate", "Job Assistance"],
  //   price: 2000000,
  //   discountPrice: 1799000,
  //   startDate: "2025-09-01",
  //   duration: 12,
  //   durationType: "weeks",
  //   level: "Intermediate",
  //   type: "Hybrid",
  //   category: "marketing",
  //   featured: false,
  //   image: "/marketing.png",
  //   url: "",
  //   classType: "Hybrid Class",
  //   time: "18:00 - 20:00 WIB",
  //   mentor: [
  //     {
  //       image: "/teams/Haedar.png",
  //       name: "Haedar Alfatah",
  //       role: "Digital Marketer"
  //     }
  //   ],
  //   education: [
  //     { key: "SEO", value: "On-page & technical SEO" },
  //     { key: "Social Media", value: "Content planning & growth strategy" },
  //     { key: "Ads", value: "Meta Ads & Google Ads" },
  //     { key: "Analytics", value: "Tracking, insight, optimization" }
  //   ],
  //   learningFlow: [
  //     { modul: 1, title: "SEO Basics", description: "Keyword research & optimization" },
  //     { modul: 2, title: "Social Media Strategy", description: "Content planning & execution" },
  //     { modul: 3, title: "Ads Management", description: "Google & Meta ads campaigning" },
  //     { modul: 4, title: "Analytics", description: "Understanding and analyzing data" }
  //   ]
  // }
];
