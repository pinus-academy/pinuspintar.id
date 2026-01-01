import { CourseCardProps } from "@/lib/courseTypes";

export const courses: CourseCardProps[] = [
  {
    id: 1,
    slug: "batch-6-devops",
    title: "DevOps Engineer Bootcamp - Batch 6",
    description:
      "Bootcamp DevOps Engineer PinusPintar adalah program bootcamp offline dan gratis khusus laki-laki yang dirancang secara intensif untuk membekali peserta dengan kompetensi DevOps dan Cloud Engineering melalui pembelajaran terstruktur dan praktik langsung, dilaksanakan selama 3 bulan mulai Januari 2026 di PT Pinus Pintar Teknologi, Kendal – Jawa Tengah, ditujukan bagi peserta yang ingin meningkatkan keterampilan teknis, beralih karier ke bidang IT, dan siap bersaing di dunia kerja dengan kuota peserta terbatas.",
    benefits: [
      "Makan Siang",
      "Laptop Dipinjamkan",
      "Penyaluran Kerja",
      "Sertifikat"
    ],
    price: 2000000,
    discountPrice: 0,
    startDate: "Januari 2026",
    duration: 3,
    durationType: "months",
    level: "Beginner",
    type: "Offline",
    categories: ["DevOps", "Cloud Engineering", "Linux", "Docker", "Kubernetes"],
    featured: true,
    image: "/course/batch-6-devops.png",
    location: "PT Pinus Pintar Teknologi, Kendal – Jawa Tengah",
    time: "09:00 - 17:00 WIB (Senin - Jumat)",
    mentor: [
      {
        image: "/teams/logo-pinus.png",
        name: "Tim PinusPintar",
        role: "DevOps Engineer"
      }
    ],
    education: [
      { key: "DevOps", value: "DevOps Engineering" },
      { key: "Cloud Engineering", value: "Cloud Engineering" },
      { key: "Linux", value: "Linux Administration" },
      { key: "Docker", value: "Docker Containerization" },
      { key: "Kubernetes", value: "Kubernetes Orchestration" },
      { key: "AWS", value: "AWS Cloud" },
    ],
    learningFlow: [
      { modul: 1, title: "Git & GitHub", description: "Version Control & Collaboration" },
      { modul: 2, title: "Linux Basics", description: "Command Line & Shell Scripting" },
      { modul: 3, title: "Docker Basics", description: "Containerization & Image Management" },
      { modul: 4, title: "Kubernetes Basics", description: "Orchestration & Deployment" },
      { modul: 5, title: "AWS Basics", description: "Cloud Computing & Services" },
      { modul: 6, title: "CI/CD Pipeline", description: "Automation & Deployment" },
      { modul: 7, title: "Monitoring & Logging", description: "Observability & Metrics" },
      { modul: 8, title: "Security & Networking", description: "Network Configuration & Firewall" },
      { modul: 9, title: "Infrastructure as Code", description: "Configuration Management" },
      { modul: 10, title: "High Availability & Backup", description: "Disaster Recovery & Data Protection" },
    ]
  },
  // {
  //   id: 2,
  //   slug: "next.js-development-part-1",
  //   title: "Next.js Development - Part 1",
  //   description:
  //     "Belajar pengembangan frontend menggunakan Next.js",
  //   benefits: [
  //     "Sertifikat",
  //     "Asistensi Kerja",
  //     "Proyek Portofolio",
  //     "Konseling Karir",
  //     "Sesi Koding Langsung"
  //   ],
  //   price: 0,
  //   discountPrice: 0,
  //   startDate: "2025-12-01",
  //   duration: 2,
  //   durationType: "days",
  //   level: "Beginner",
  //   type: "Online",
  //   categories: ["Backend Development", "Java", "Spring Boot"],
  //   featured: true,
  //   image: "/course/kirab.jpg",
  //   url: "https://crm.deployaja.id/lp/full-stack-web-development",
  //   classType: "Live Class",
  //   time: "19:00 - 21:00 WIB",
  //   mentor: [
  //     {
  //       image: "/teams/Berland.png",
  //       name: "Berland Vardy",
  //       role: "Backend Developer"
  //     }
  //   ],
  //   education: [
  //     { key: "Java", value: "Java Programming" },
  //     { key: "Spring Boot", value: "Spring Boot Framework" },
  //   ],
  //   learningFlow: [
  //     { modul: 1, title: "Java Basics", description: "Variables, operators, loops" },
  //     { modul: 2, title: "OOP", description: "Classes, objects, polymorphism" },
  //     { modul: 3, title: "Projects", description: "Build simple real Java apps" }
  //   ]
  // }
];
