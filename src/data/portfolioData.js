export const portfolioData = {
  about: {
    title: "About Me",
    subtitle: "Full-stack developer with 4+ years of learning experience",
    description: [
      "I am a versatile professional with experience across software development, education, engineering design, and asset management. With a strong background as an Independent Full-Stack Developer and System Architect, I have built and maintained numerous web and mobile applications that combine functionality with user-focused design.",
      "Alongside my development work, I serve as a Part-Time College Professor in Database Management Systems, where I mentor future IT professionals in SQL, data modeling, and database implementation. Beyond tech, I bring hands-on industry experience as a CAD Designer specializing in cutting tools, a Wire Cut Machine Programmer/Operator, and a Degreasing Operator, which developed my precision, problem-solving, and process-oriented skills.",
      "Currently, I work as an Asset Management Associate at Southville International School and Colleges, where I manage multiple warehouses, oversee inventory systems, and provide IT support to ensure efficient operations.",
      "Outside programming, I am proficient with Adobe Photoshop, Adobe Illustrator, and AutoCAD 2D and AutoCAD 3D. Beyond the virtual world, I engage in outdoor activities such as running, football, singing and dancing for recreational activities. I take pride in blending technical expertise with teaching and operational management. My career reflects adaptability and commitment to growth, whether it's in the classroom, on the shop floor, or in the digital space."
    ],
    skills: [
      "WEB DEV & MOBILE APPLICATION",
      "EDUCATOR - RDBMS",
      "SYSTEM & DATABASE ARCHITECT",
      "CAD 2D & 3D DESIGNER / FLOOR PLANNING",
      "MECHATRONICS NCII",
      "TECHNICAL DRAFTING NCII",
      "COMPUTER SYSTEM SERVICING NC II"
    ]
  },
  skills: {
    languages: ["HTML5", "CSS3", "JavaScript", "TypeScript", "C#", "C++", "Python", "Java (OOP)", "PHP"],
    frameworks: ["React.js", "React Native", "Node.js", "Flutter", "Next.js", "Tailwind CSS", "Vite", "Laravel"],
    databases: ["MySQL", "Firebase"],
    tools: ["Android Studio", "SSMS 22", "Visual Studio 2022", "VS Code", "NetBeans", "Eclipse", "XAMPP / WAMP / LAMP / MAMP"],
    auth: ["Firebase Auth", "Google Auth"],
    others: ["UI / UX", "Git", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Power BI", "Canva", "GitHub", "Bootstrap"]
  },
  experience: [
    { 
      dates: "Sept 2025 - Present", 
      title: "Part-Time College Faculty", 
      company: "Asian SEED Academy of Technology",
      details: [
        { type: "bullet", text: "Teach 2nd-year Information Technology students" },
        { type: "nested", text: "Handle the following subjects:", items: ["Introduction to Database Management Systems", "Advanced Database Management Systems"] }
      ]
    },
    { 
      dates: "July 2023 - Present", 
      title: "Independent Full-Stack Developer & System Architect", 
      company: "Self-Employed",
      details: [
        { type: "bullet", text: "Continuously learning and applying modern approaches in web and mobile application development" },
        { type: "bullet", text: "Developed multiple thesis projects during the early stages of my programming career" },
        { type: "bullet", text: "Strong background in both front-end design and back-end development" },
        { type: "nested", text: "Developed projects include:", items: ["Alumni Tracking System (Web & Mobile Application)", "Mass Mailing CRM", "Document Management System (Web & Mobile Application)", "Lost and Found System (Web & Mobile Application)", "Robinson Commercial Services System", "PC Parts Picker", "Quiz Maker", "Enigma Machine", "Biodata Maker"] },
        { type: "bullet", text: "Currently developing the Materials Requisition Management System, which is actively used by Southville International School and Colleges" }
      ]
    },
    { 
      dates: "July 2023 - Present", 
      title: "Asset Management Associate", 
      company: "Southville International School and Colleges",
      details: [
        { type: "bullet", text: "Manage six warehouses, including: Office Supplies, Uniforms, TOKKENS Supplies, Housekeeping Materials, Student Supplies, and Toga Warehouse" },
        { type: "bullet", text: "Conduct monthly inventory audits and variance analysis across all warehouses" },
        { type: "bullet", text: "Utilize ERP systems such as Microsoft GP to close open Purchase Order transactions" },
        { type: "bullet", text: "Encode and process all material requests in the ERP system, ensuring posting before month-end deadlines" },
        { type: "bullet", text: "Release requested materials to requisitioners" },
        { type: "bullet", text: "Receive and verify deliveries from accredited suppliers" },
        { type: "bullet", text: "Coordinate and handle the distribution of delivered items to requisitioners" },
        { type: "bullet", text: "Manage all colored printing services and related concerns" },
        { type: "bullet", text: "Provide IT technical support within the Asset Management Department" }
      ]
    },
    { 
      dates: "Feb 2019 - May 2019", 
      title: "Degreasing Operator", 
      company: "SINAG Precision Manufacturing",
      details: [
        { type: "bullet", text: "Perform degreasing of ATM machine parts to remove oil and grease contaminants" },
        { type: "bullet", text: "Manually clean components using appropriate materials and procedures" },
        { type: "bullet", text: "Conduct quality inspections to identify damaged or defective parts" }
      ]
    },
    { 
      dates: "June 2018 - Sept 2018", 
      title: "AutoCAD 2D & 3D Designer", 
      company: "EUDEN Enterprise",
      details: [
        { type: "bullet", text: "Create detailed 2D and 3D designs using AutoCAD" },
        { type: "bullet", text: "Design machine cutting tools and related components" },
        { type: "bullet", text: "Prepare and transfer design files for computer-based processing and mass production" }
      ]
    },
    { 
      dates: "Jan 2018 - April 2018", 
      title: "Wire-Cut Machine Programmer & Operator", 
      company: "Sing-Tech Enterprise Inc.",
      details: [
        { type: "bullet", text: "Program CNC wire-cut machines based on CAD design specifications" },
        { type: "bullet", text: "Execute precision cutting operations for products such as manual stamping tools" },
        { type: "nested", text: "Operate various machines, including:", items: ["CNC Milling Machine", "Surface Grinding Machine", "Conventional Milling Machine"] }
      ]
    },
  ],
  education: [
    { 
      dates: "School Year 2025 - On-going", 
      title: "Post-Graduate Education", 
      institution: "", 
      details: [
        { type: "bullet", text: "Master of Information Technology" },
        { type: "bullet", text: "Southville International School and Colleges" },
        { type: "bullet", text: "@BF Homes, Las Piñas City" }
      ]
    },
    { 
      dates: "School Year 2019 - 2023", 
      title: "Tertiary Education", 
      institution: "", 
      details: [
        { type: "bullet", text: "Bachelor of Science in Information Technology" },
        { type: "bullet", text: "Specialized in Mobile Application Development" },
        { type: "bullet", text: "Southville International School and Colleges" },
        { type: "bullet", text: "@BF Homes, Las Piñas City" }
      ]
    },
    { 
      dates: "School Year 2013 - 2018", 
      title: "Secondary Education", 
      institution: "", 
      details: [
        { type: "bullet", text: "Technical Vocational Education Training" },
        { type: "bullet", text: "The Sisters of Mary School, Adlas - Inc." },
        { type: "bullet", text: "@Adlas, Silang, Cavite" }
      ]
    },
    { 
      dates: "School Year 2008 - 2013", 
      title: "Primary Education", 
      institution: "", 
      details: [
        { type: "bullet", text: "Genablan Oriental Elementary School" },
        { type: "bullet", text: "@Bicol, Matnog, Sorsogon" }
      ]
    },
  ],
  projects: [
    {
      title: "Materials Requisition Management System Web Application",
      description: "A system for managing materials requisition and tracking and monitoring of budgets, used by Southville International School and Colleges.",
      tags: ["React", "Node.js", "MySQL", "Laravel", "PHP", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Alumni Tracking System Web and Mobile Application",
      description: "A streamlined system for managing alumni information and tracking their activities and engagement with the institution, used by the Alumni Office.",
      tags: ["Laravel", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Document Management System Web and Mobile Application",
      description: "A web and mobile based application system for managing documents and tracking their status, used by the President's Office of Southville International School and Colleges.",
      tags: ["MySQL", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Lost and Found System Web and Mobile Application",
      description: "A web and mobile based application system streamlined for lost and found items used by Student Affairs Office of Southville International School and Colleges.",
      tags: ["React Native", "MySQL", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Robinson Commercial Services System Web Application",
      description: "A streamlined system for managing Robinson Commercial Services and tracking their status and movement within the institution.",
      tags: ["React Native", "Firebase"],
    },
    {
      title: "PC Parts Picker Web Application",
      description: "A online web based system for managing online purchases of PC parts that are ready for building a customized computer.",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Quiz Maker Application",
      description: "An application system for making quizzes that has a feature of auto-grading and generating multiple quiz reports.",
      tags: ["C#", "Windows Forms"],
    },
    {
      title: "Enigma Machine Application",
      description: "A system application design to encrypt and decrypt messages using the Enigma machine algorithm.",
      tags: ["C#", "Windows Forms"],
    },
    {
      title: "Biodata Maker Web Application",
      description: "A web based application for making biodatas or resumes.",
      tags: ["PHP", "MySQL", "HTML5", "CSS3"],
    },
    {
      title: "Student Management System Application",
      description: "A application system used by teachers to monitor students grades and attendance.",
      tags: ["C#", "MySQL", "Windows Forms"],
    }
  ],
  certifications: [
    "Technical Drafting NCII",
    "Computer System Servicing NCII",
    "Mechatronics Servicing NCII"
  ],
  vocationalExpertise: [
    {
      category: "Industrial & Engineering",
      skills: ["Machining NCI / II", "CNC Machine / Wire-Cut NCII / III", "SMAW NCII / III", "BIT Metal Works", "Electrical Installation NCI / II / III"]
    },
    {
      category: "Technical & Automotive",
      skills: ["Automotive Servicing NCI / II / III", "Driving NCII"]
    },
    {
      category: "Creative & Drafting",
      skills: ["AutoCAD 2D / 3D", "Technical Drafting NCII", "Computer System Servicing NCII", "Mechatronics Servicing NCII", "Mechanical Drafting NCII", "Adobe Photoshop", "Adobe Illustrator"]
    },
    {
      category: "Service & Hospitality",
      skills: ["Bread and Pastry Production NCII", "Tailoring NCII"]
    }
  ]
};
