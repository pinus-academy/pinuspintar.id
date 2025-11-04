import { TalentCardProps } from "./talentTypes";

export const talents: TalentCardProps[] = [
    {
        id: 1,
        name: "Abdullah Muhamad Sidiq",
        type: "Junior",
        skill: "CSS3 • JavaScript (ES6+) • Svelte • Tailwind CSS • DBeaver",
        role: "Fullstack Developer",
        photo: "/talents/Sidiq.png",
        description: "With experience in administrative and retail operations, I am currently developing my career as a Web Developer. I am dedicated to building responsive, user-friendly websites and continually expanding my knowledge of modern web technologies.",
        experiences: [
            {
                position: "Fullstack Developer",
                company: "Deployaja.id",
                year: "August 2025 - Present",
                tech: "Svelte, JavaScript (ES6+), Tailwind , PostgreSQL",
                responsibility: "Collaborated with the engineering team to build and implement dynamic features, Assisted in debugging and improving existing frontend codebases, Optimized web performance and ensured cross-browser compatibility"
            },
            {
                position: "Online Store Administrator",
                company: "Warunk Jago (Lazada)",
                year: "March 2023 - October 2024",
                tech: "Lazada Seller Center, Google Analytics, Google Trends",
                responsibility: "Process incoming online orders accurately and on time, Prepare and pack products for shipment following company standards, Update order status and coordinate with logistics partners for delivery, Maintain product stock levels and report low inventory to managemen"
            },
            {
                position: "Store Operator",
                company: "Istana Cemerlang",
                year: "October 2021 - December 2022",
                tech: "Sales and Customer Service, Inventory Management, Cashier, and Product Display",
                responsibility: "Provide customer service, manage inventory, and handle cashier duties, Ensure product displays are visually appealing and well-organized"
            },
            {
                position: "Office Assistant",
                company: "STIKes Wijaya Husada",
                year: "April 2021 - July 2021",
                tech: "Microsoft Office, Google Workspace, Data Entry",
                responsibility: "Assisted lecturers in managing student grades and academic records, Input and update academic data into the campus system accurately, Helped prepare reports, attendance sheets, and student performance summaries, Organized digital and physical academic documents"
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Svelte, Tailwind, Next.js, PostgreSQL, Node.js"
            },
            {
                key: "Bahasa Pemrograman",
                value: "JavaScript, PHP, HTML, CSS"
            },
            {
                key: "Tools",
                value: "Git, GitHub, DBeaver, Visual Studio Code"
            },

        ],
        education: [
            {
                year: "2025 - Present",
                name: "Pinus Pintar Bootcamp | Fullstack Developer"
            },
            {
                year: "2017 - 2020",
                name: "SMK Al Asiyah | Teknik Komputer & Jaringan"
            }
        ]
    },
    {
        id: 6,
        name: "Muhammad Faishal Lunawan",
        role: "Fullstack Developer",
        photo: "/talents/faishal.png",
        type: "Intermediate",
        skill: "JavaScript • GO • PHP • MySQL • PostgreSQL",
        description: "Full-stack Developer with expertise in application development and maintenance. Strong understanding of the entire technology stack, from front-end to back-end, and supporting infrastructure. Experienced in contributing to ensuring application availability and performance, and addressing emerging issues with efficient solutions. Strong troubleshooting skills and the ability to collaborate within a dynamic team.",
        experiences: [
            {
                position: "Fullstack Developer",
                company: "PT Pinus Pintar Teknologi",
                year: "July 2025 - Present",
                tech: "JavaScript, GO, PHP, MySQL, PostgreSQL",
                responsibility: "Develop, maintain, and optimize web applications (full stack), Analyze and fix bugs and performance issues in applications, from the front-end to the back-end and database, Participate in code reviews, write technical documentation, and contribute to development process improvements, Implement best practices in coding and deployment to minimize downtime and ensure system stability"
            },
            {
                position: "IoT Developer",
                company: "CV. Omah IoT",
                year: "September 2023 - December 2023",
                tech: "Arduino, ESP32, MQTT, Node-RED, MySQL, PostgreSQL",
                responsibility: "Create and implement applications or systems that connect devices, sensors, and networks to collect and exchange data, Work with microcontrollers, sensors, and embedded systems, ensuring they communicate properly with cloud or backend platforms, Analyze system performance, identify bottlenecks, and improve reliability, speed, and energy efficiency"
            }
        ],
        skillset: [
            {
                key: "Framework",
                value: "Spring Boot, CodeIgniter, Laravel, Gin, Next.js"
            },
            {
                key: "Language",
                value: "Java, Go, PHP, SQL, HTML, CSS, JS, C"
            },
            {
                key: "Tools",
                value: "Atlassian Suite (Jira, Confluence, Bitbucket), Postman, DBeaver, Intellij Idea, Visual Studio Code, RabbitMQ, Vault, Slack, Microsoft Suite (Outlook, Word, Teams, Excel), GitHub, Pritunl (VPN), Teleport, XAMPP, Laragon"
            },
            {
                key: "Soft Skills",
                value: "Team Collaboration, Time Management, Fast Learner, Communication, Initiative & Self-Learning"
            }

        ],
        education: [
            {
                year: "August 2024",
                name: "Politeknik Negeri Semarang | Electronics Engineering"
            },
            {
                year: "August 2025",
                name: "Pinus Pintar Bootcamp | Fullstack Developer"
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
                responsibility: "Develop and maintain scalable RESTful APIs using Node.js and Express.js, Design and manage database schemas using PostgreSQL and MongoDB for efficient data storage and retrieval, Optimize backend performance through query optimization, caching (Redis), and load balancing, Implement authentication and authorization using JWT and middleware security, Integrate third-party APIs and handle real-time data using WebSocket, Utilize Git and GitHub for version control within Agile (Scrum) workflows, Conduct unit and integration testing using Jest and Postman to ensure API reliability."
            },
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
        name: "Farhan Zaky",
        role: "Quality Assurance",
        photo: "/talents/Zaky.png",
        type: "Junior",
        skill: "Manual Testing • Automated Testing • Selenium • API Testing",
        description: "I am a detail-oriented Quality Assurance Tester with strong analytical skills in identifying and preventing bugs before release. Experienced in designing test scenarios, performing manual web and API testing using Postman, GraphQL & Swagger, and currently expanding expertise in automation testing using Selenium and Katalon Studio. Accustomed to collaborating with developers and product owners to maintain high application quality standards in accordance with the Software Testing Life Cycle (STLC).",
        experiences: [
            {
                position: "Software Quality Assurance",
                company: "PT Pinus Pintar Teknologi",
                year: "2023 - Present",
                tech: "Postman, Swagger, Selenium, Katalon Studio",
                responsibility: "Ensuring the quality and reliability of DeployAja.id sidra.id and TungTung CRM, core platforms developed by PT Pinus Pintar Teknologi, Perform manual testing and API testing using API Testing Standards to ensure system stability and functionality, Created and executed test cases for new features and performed regression testing after updates, Implemented automation testing using Selenium and Katalon Studio to improve regression testing efficiency, Reported and tracked bugs in Jira/Trello, collaborating with developers and project managers for debugging and validation, Participated in sprint meetings and applied a solid understanding of SDLC and STLC to maintain product quality"
            },
            {
                position: "SQA & IT Support",
                company: "Islamic boarding school institutions (Sekol.id System)",
                year: "2022 - 2023",
                tech: "Postman, Swagger, Selenium, Katalon Studio",
                responsibility: "Performed manual testing on a web-based school management system to ensure all features met user requirements, Designed and executed test cases for modules such as student data, finance, and library management, Identified and reported bugs to the development team, assisting in debugging and verification processes, Contributed to improving system efficiency through detailed testing feedback and quality reports."
            },
        ],
        skillset: [
            {
                key: "Manual Testing",
                value: "Functional, Regression, Sanity, Smoke"
            },
            {
                key: "Automation Testing",
                value: "Selenium, Katalon Studio"
            },
            {
                key: "API Testing & Validation",
                value: "Postman, Swagger, GraphQL"
            },
            {
                key: "Soft Skills",
                value: "Detail-oriented, patient, and systematic thinker, Fast learner and adaptable to new testing tools, Communicative and collaborative with development/product teams, Highly motivated with a strong problem-solving mindset"
            }

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
        name: "Nurhidayat",
        role: "Quality Assurance",
        photo: "/teams/Nurhidayat.png",
        type: "Junior",
        skill: "Manual Testing • Automated Testing • Selenium • API Testing",
        description: "Quality Assurance (QA) Engineer with strong analytical skills and exceptional attention to detail. Experienced in performing manual and automated testing to ensure system quality, stability, and functionality. Skilled in creating test plans, executing API testing with Postman, and identifying bugs early in the development cycle. Collaborates effectively with developers and product teams to enhance application performance and reliability. Dedicated to maintaining high software quality standards before release.",
        experiences: [
            {
                position: "Quality Assurance",
                company: "PT Pinus Pintar Teknologi",
                year: "July 2024 - Present",
                tech: "Postman, Swagger, Selenium, Katalon Studio",
                responsibility: "Ensuring the quality and reliability of DeployAaja.id and Sidra.id, core SaaS platforms developed by PT Pinus Pintar Teknologi, Performing 70% manual testing (functional, regression, exploratory) and 30% automated testing using Selenium and PyTest to maintain stability and user satisfaction across releases, Conducting API testing with Postman to validate data integrity and ensure seamless communication between frontend and backend systems, Developing and maintaining comprehensive test cases, test scenarios, and automation scripts based on requirement analysis and CI/CD pipelines, Managing and reporting defects through Jira, Trello, and internal QA tracking systems, ensuring effective collaboration with developers during the debugging and validation process."
            },
        ],
        skillset: [
            {
                key: "Framework",
                value: "PyTest, Cypress"
            },
            {
                key: "Test Management & Tracking",
                value: "Jira, TestRail"
            },
            {
                key: "Tools",
                value: "Postman, Swagger, Selenium, Katalon Studio, JMeter"
            },
            {
                key: "Database",
                value: "MySQL, PostgreSQL"
            },
            {
                key: "CI/CD & Collaboration",
                value: "GitHub Actions, Jenkins, Jira, Trello, Slack"
            },
            {
                key: "Soft Skills",
                value: "Strong analytical and problem-solving skills in identifying and reproducing bugs, High attention to detail and accuracy in testing documentation and execution, Effective collaboration with developers, product owners, and project managers, Adaptable and proactive in fast-paced Agile/Scrum environments, Committed to continuous improvement and maintaining software quality standards"
            }

        ],
        education: [
            {
                year: "2023 - Present",
                name: "Pinus Pintar Bootcamp | Software Quality Assurance"
            },
            {
                year: "2018 - 2021",
                name: "MA Muhammadiyyah 1 Sukarame Lampung"
            }
        ]
    },

];