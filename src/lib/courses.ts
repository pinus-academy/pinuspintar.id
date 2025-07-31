import { CourseCardProps } from "@/lib/types";

export const courses:CourseCardProps[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Master modern web development with JavaScript, React, and Node.js",
    instructor: "Haidar Alfatah",
    instructorAvatar: "",
    price: 2500000,
    discountPrice: 0,
    startDate: '2025-04-30',
    duration: 12,
    durationType: 'weeks', // atau 'days'
    level: "Intermediate",
    type: "online",
    category: "development",
    featured: true,
    image: "/js.png",
    url: "https://crm.deployaja.id/lp/full-stack-web-development",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user-centered design and create stunning interfaces",
    instructor: "Daffa ",
    instructorAvatar: "",
    price: 1800000,
    discountPrice: 1499000,
    startDate: '2025-09-01',
    duration: 12,
    durationType: 'weeks', // atau 'days'
    level: "Beginner",
    type: "hybrid",
    category: "design",
    featured: true,
    image: "/js.png",
    url: "",
  },
  {
    id: 3,
    title: "Data Science Bootcamp",
    description:
      "Analytics, machine learning, and AI fundamentals for real-world applications",
    instructor: "Agus Wijaya",
    instructorAvatar: "",
    price: 3000000,
    discountPrice: 2499000,
    startDate: '2025-09-01',
    duration: 12,
    durationType: 'weeks', // atau 'days'
    level: "Advanced",
    type: "offline",
    category: "data",
    featured: false,
    image: "/cloud.png",
    url: "",
  },
  {
    id: 4,
    title: "Java Programming",
    description:
      "Learn the fundamentals of Java programming and build your first Java application",
    instructor: "Dewi Pratiwi",
    instructorAvatar: "",
    price: 1500000,
    discountPrice: 1299000,
    startDate: '2025-09-01',
    duration: 12,
    durationType: 'weeks', // atau 'days'
    level: "Beginner",
    type: "online",
    category: "marketing",
    featured: true,
    image: "/java.png",
    url: "",
  },
];
