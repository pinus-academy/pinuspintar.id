import { TalentCardProps } from "./talentTypes";

export const talents: TalentCardProps[] = [
    {
        id: 1,
        name: "Ahmad Ghozali",
        type: "Senior", // Sudah ada
        skill: "React • Node.js • Express • MongoDB • REST API", // Sudah ada
        role: "Director",
        photo: "/teams/Ghozali.png",
        description: "A passionate developer who enjoys building end-to-end web solutions, combining creative UI design with powerful backend logic. Experienced ...",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]

    },
    {
        id: 2,
        name: "Akhmad Zidan Nafi'a",
        type: "Junior",
        skill: "pyhton • javascript",
        role: "Backend Developer",
        photo: "",
        description: "I'm a Backend Developer skilled at building and maintaining robust, scalable server-side applications using JavaScript, Python, and SQL. Experienced with Node.js and Express.js, I specialize in designing RESTful APIs, managing databases, and optimizing application performance. I'm detail-oriented, efficient, and focused on writing clean, maintainable, and secure code.",
        experiences: [
            {
                position: "Backend Engineer",
                company: "PT Pinuspintar Tehcnology",
                year: "June 2025 - prasent",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Develop and maintain scalable RESTful APIs using Node.js and Express.js,Design and manage database schemas using PostgreSQL and MongoDB for efficient data storage and retrieval.,Optimize backend performance through query optimization, caching (Redis), and load balancing.,Implement authentication and authorization using JWT and middleware security.,Integrate third-party APIs and handle real-time data using WebSocket.,Utilize Git and GitHub for version control within Agile (Scrum) workflows.,Conduct unit and integration testing using Jest and Postman to ensure API reliability."
            },
            {
                position: "Backend Engineer",
                company: "PT Nusantara Digital Solutions",
                year: "January 2024 - May 2025",
                tech: "Node.js, Express.js, MySQL, Redis, Docker, AWS",
                responsibility: "Develop and deploy microservices-based backend systems using Node.js and Express.js.,Design efficient database models and write optimized SQL queries in MySQL.,Implement caching and session management using Redis to improve system performance.,Build and maintain RESTful and GraphQL APIs for internal and external services.,Containerize backend applications using Docker and manage deployments on AWS EC2 and ECS.,Collaborate with frontend and DevOps teams to ensure seamless CI/CD integration.,Implement logging, monitoring, and alerting to ensure high system availability and reliability."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Node.js, Express.js, Sequelize, Mongoose"
            },
            {
                key: "Bahasa Pemrograman",
                value: "JavaScript (ES6+), Python, SQL "
            },
            {
                key: "Tools",
                value: " Git, GitHub, Postman, Docker, Redis, Jira, Trello "
            },

        ],
        education: [
            {
                year: "2025 - prasent",
                name: "Pinus Pintar Community IT"
            },
            {
                year: "2021 - 2023",
                name: "SMA Takhasus Al-Qur'an An-Nida'"
            },
        ]

    },
    {
        id: 3,
        name: "Daffa Haidar Ahmad",
        role: "DevOps Engineer",
        photo: "",
        type: "Junior",
        skill: "Kubernetes • Apache • Nginx • Docker",
        description: "I'm a DevOps engineer with a strong passion for learning and a strong determination to thrive in the technology world, and I'm able to work both in teams and independently. I'm currently focusing on DevOps Engineering.",
        experiences: [
            {
                position: "DevOps Engineer",
                company: "PT Pinuspintar Technology",
                year: "July 2025 - Present",
                tech: "Grafana, Kubernetes, Docker",
                responsibility: "Design, implement, and maintain CI/CD pipelines using GitHub Actions to automate build, test, and deployment processes.,Manage containerized applications using Docker and orchestrate deployments with Kubernetes.,Monitor application performance and system health using Grafana and other observability tools.,Maintain and secure Linux-based servers for development and testing environments.,Collaborate with development teams to improve deployment reliability and optimize infrastructure efficiency."
            },
            {
                position: "Quality Assurance",
                company: "PT Pinuspintar Tehcnology",
                year: "Januari 2025 - June 2025",
                tech: "Grafana, Kubernetes, Docker",
                responsibility: "Participate in code reviews and contribute to development process improvements.,Create a CI/CD pipeline using GitHub Actions to automate the build and deployment of Node.js applications.,Create and manage a Linux server for simple application testing.,Participate in code reviews and contribute to development process improvements."
            },
        ],
        skillset: [
            {
                key: "Framework",
                value: "Node.js"
            },
            {
                key: "Bahasa Pemrograman",
                value: "HTML, CSS, JavaScript, SQL"
            },
            {
                key: "Tools",
                value: "Git, Docker, Kubernetes, Apache, Nginx, MySQL, PostgreSQL"
            },
            {
                key: "soft skills",
                value: "Problem Solving, Team Collaboration, Continuous Learning, Adaptability, Analytical Thinking"
            }

        ],
        education: [
            {
                year: "2025 - prasent",
                name: "Pinus Pintar Community IT"
            },
            {
                year: "2022 - 2025",
                name: "SMK Muhammadiyah 2 Jatinom"
            },
        ]
    },
    {
        id: 4,
        name: "Rizal shofwan rizki",
        role: "Fullstack Developer",
        photo: "/teams/Rizal.png",
        type: "Senior",
        skill: "JavaScript • Next.js • Svelte js • React js • Typescript",
        description: "Full-stack developer with 1 year of experience developing and maintaining web applications using Next.js and 1 year of experience developing and maintaining websites using Laravel. Proficient in front-end, back-end, and supporting infrastructure. Experienced in ensuring application performance, solving problems with efficient solutions, and collaborating within a team.",
        experiences: [
            {
                position: "Full Stack Developer",
                company: "PT. Pinus Technology",
                year: "September 2025 - present",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Develop and maintain scalable RESTful APIs using Node.js and react.js,Design and manage database schemas using PostgreSQL and MongoDB for efficient data storage and retrieval.,Optimize backend performance through query optimization, caching (Redis), and load balancing.,Implement authentication and authorization using JWT and middleware security.,Integrate third-party APIs and handle real-time data using WebSocket.,Utilize Git and GitHub for version control within Agile (Scrum) workflows.,Conduct unit and integration testing using Jest and Postman to ensure API reliability."
            },
            {
                position: "Full Stack Developer",
                company: "PT. Pinus Technology",
                year: "July 2025 - Septemner 2025",
                tech: "Next.js, PostgreSQL, Docker",
                responsibility: "Build a system to process transactions and integrate with payment gateways,enabling seamless payment processing and transaction tracking., Developing a recon tool comparing two data, data from the payment gateway and our internal data with match and unmatch results., Developing a bidding queue system using RabbitMQ or Kafka to manage and process bids, ensuring efficient handling of bid requests and tracking the bidding queue status., Working on squad with sprint agile methodology, Daily stand up, provide suggestions, discuss challenges, update tickets on PM tools, and work collaboratively with Lark."
            },
            {
                position: "Backend Developer",
                company: "PT. Pinus Technology",
                year: "Februari 2025 - June 2025",
                tech: "Laravel, Blade, PHP, Postgresql",
                responsibility: "Collaborated within a team to maintain project responsiveness., Developed the project from scratch using Laravel and PostgreSQL., Managed user authentication and authorization., Handled academic grading and reporting features., Managed student data, including registration, profiles, and active status., Developed payment features for tuition fees and other charges."
            },
            {
                position: "Frontend Developer",
                company: "PT. Pinus Technology",
                year: "December 2024 - Februari 2025",
                tech: "Svelte.js, Tailwind css",
                responsibility: "Developed a real-time monitoring feature that enables guardians/parents to view students' daily attendance, academic scores, and activities at the pesantren/school., Designed the user flow for SPP (school fee) and other payment processes, incorporating multi-method payment integration, including Bank Virtual Accounts and QRIS, to facilitate cashless transactions.,Created a centralized calendar and event organizer feature to display the pesantren/school's schedule and events."
            },
            {
                position: "Fullstack Developer",
                company: "PT. Pinus Technology",
                year: "October 2024 - December 2024",
                tech: "Next.js, react.js",
                responsibility: "Redesigned the company's digital profile comprehensively to enhance a professional and appealing brand image, Developed content structure and user flow for the bootcamp class registration and access sections, resulting in a 15% increase in registration conversion., Optimized client-side rendering performance to improve page load speed and overall user experience."
            },
        ],
        skillset: [
            {
                key: "Framework",
                value: "Next.js, Laravel, Node.js, Next.js, Svelte js,React js"
            },
            {
                key: "Bahasa Pemrograman",
                value: "JavaScript, Typescript, PHP"
            },
            {
                key: "Tools",
                value: "Git, Github, GitLab"
            },
            {
                key: "Database",
                value: "MySQL, PostgreSQL"
            },
            {
                key: "Soft Skill",
                value: "Problem Solving, Collaboration & Communication, Continuous Learning,Adaptability, Analytical Thinking"
            },

        ],
        education: [
            {
                year: "September 2025 - present",
                name: "Universitas Siber Muhammadiyah"
            },
            {
                year: " July 2021 - Januari 2024",
                name: "SMK Askhabul Kahfi"
            }
        ]
    },
    {
        id: 5,
        name: "Dita Setya",
        role: "Community Coordinator",
        photo: "/teams/Dita.png",
        type: "Intermediate",
        skill: "Event Planning • Social Media Management • Communication",
        description: "Managing and growing the developer community through engagement and support.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 6,
        name: "Haedar Alfatah",
        role: "VP of Strategy",
        photo: "/teams/Haedar.png",
        type: "Senior",
        skill: "Strategy • Business Development",
        description: "Aspiring backend engineer skilled in PHP Laravel, Next.js, and PHP Symfony. Experienced in microservices, API gateways (NginX+), and web servers (Apache, NginX). Proficient in MySQL, PostgreSQL, and MariaDB, with expertise in Git, Docker, Kubernetes, and cloud platforms (AWS). Familiar with React.js and Alpine.js.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 7,
        name: "Septiyan Nungsizu",
        role: "QA Engineer",
        photo: "/teams/Sizu.png",
        type: "Senior",
        skill: "Manual Testing • Automated Testing • Selenium",
        description: "Ensuring product quality and reliability through comprehensive testing processes.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 8,
        name: "Rizky Rizal Shofwan",
        role: "Frontend Developer",
        photo: "/teams/Rizal.png",
        type: "Intermediate",
        skill: "React • Tailwind CSS • UX/UI",
        description: "Passionate about creating exceptional user experiences with modern frontend tools.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 9,
        name: "Atilla Satria Putra",
        role: "DevOps Engineer",
        photo: "/teams/Atilla.png",
        type: "Intermediate",
        skill: "CI/CD • Docker • Kubernetes • Jenkins",
        description: "Automating deployment pipelines and managing infrastructure as code.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 10,
        name: "Asya Perdana",
        role: "Product Manager",
        photo: "/teams/Asya.png",
        type: "Intermediate",
        skill: "Product Roadmap • Agile • Market Analysis",
        description: "Driving product vision from concept to launch based on market needs and strategy.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 11,
        name: "Rafi Aziz",
        role: "QA Engineer",
        photo: "/teams/Rafi.png",
        type: "Intermediate",
        skill: "Performance Testing • Regression Testing",
        description: "Dedicated to identifying and resolving defects to deliver a stable product.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 12,
        name: "Umarul Fiddin",
        role: "DevOps Engineer",
        photo: "/teams/Umar.png",
        type: "Senior",
        skill: "Terraform • GitOps • Monitoring",
        description: "Implementing and optimizing continuous integration and delivery practices.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 13,
        name: "Berland Vardy",
        role: "Backend Developer",
        photo: "/teams/Berland.png",
        type: "Senior",
        skill: "Java • Spring Boot • Microservices",
        description: "Developing resilient and scalable backend services and APIs.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 14,
        name: "Imam Oktriyanto",
        role: "Backend Developer",
        photo: "/teams/Imam.png",
        type: "Senior",
        skill: "PHP • Laravel • MySQL",
        description: "Creating efficient database structures and robust backend systems.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },
    {
        id: 15,
        name: "Wisnu Bestama",
        role: "Frontend Developer",
        photo: "/teams/Wisnu.png",
        type: "Intermediate",
        skill: "Vue.js • Nuxt.js • TypeScript",
        description: "Specializing in modern JavaScript frameworks to build dynamic applications.",
        experiences: [
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            },
            {
                position: "Software Engineer",
                company: "PT TechSolution",
                year: "2020 - 2023",
                tech: "React, Node.js, PostgreSQL, Docker",
                responsibility: "Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA."
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Bahasa Pemrograman",
                value: "Strategy, Bussiness, Problem Solving"
            },
            {
                key: "Tools",
                value: "Strategy, Bussiness, Problem Solving"
            },

        ],
        education: [
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            },
            {
                year: "2020 - 2023",
                name: "Universitas Sebelas Maret"
            }
        ]
    },

];