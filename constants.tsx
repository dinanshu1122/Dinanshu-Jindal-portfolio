
import { Project, Experience, SkillGroup, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Dinanshu Jindal",
  title: "UI/UX Designer & Frontend Developer",
  summary: "Computer Science graduate with a strong passion for UI/UX design and human-centered digital experiences. Skilled in designing responsive, user-focused interfaces using modern front-end technologies. Experienced in wireframing, prototyping, and dashboard design to create intuitive, accessible web applications.",
  phone: "7457826233",
  email: "dinanahujindal@gmail.com",
  linkedin: "https://www.linkedin.com/in/dinanshu-jindal",
  github: "https://github.com/dinanshu1122"
};

export const SKILLS: SkillGroup[] = [
  { category: "Languages", skills: ["HTML", "C", "CSS", "Java"] },
  { category: "Databases", skills: ["MySQL"] },
  { category: "Dev Tools", skills: ["VS Code", "Git", "Turbo C++", "Dev C++"] },
  { category: "Analytics", skills: ["Power BI", "Tableau"] },
  { category: "Design", skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"] }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Symptoms Checker",
    tool: "Figma",
    objective: [
      "Intelligent Triage: Leverages AI logic to analyze user-reported symptoms and provide immediate health insights.",
      "Anxiety-Free UX: Designed with a calming color palette and simple interactions to support users in medical distress.",
      "Actionable Guidance: Direct links to nearby specialists and emergency services based on diagnostic urgency."
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=600&fit=crop",
    designLink: "https://www.figma.com/design/D3my5k5h2uE3Y4cyvUFSs0/AI-Health-Assistant?node-id=0-1&t=egx5RaSv9ScK8fqm-1",
    demoLink: "https://www.figma.com/proto/D3my5k5h2uE3Y4cyvUFSs0/AI-Health-Assistant?page-id=0%3A1&node-id=185-362&t=SYUWbZ2jl2gVPHw7-1"
  },
  {
    title: "Hospital Management System",
    tool: "Figma",
    objective: [
      "Centralized Data Management",
      "Maintain a single, secure source of truth for all patient records",
      "Staff details, appointments, and billing information integration"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&h=600&fit=crop",
    designLink: "https://www.figma.com/design/13mIAwseLOYShuGYnoew6R/Hospital-management-system?node-id=0-1&t=4y5SOO6qMVJgTZAK-1",
    demoLink: "https://www.figma.com/proto/13mIAwseLOYShuGYnoew6R/Hospital-management-system?page-id=0%3A1&node-id=37-364&starting-point-node-id=37%3A364&t=ogrNc31B5Qi5gqau-1"
  },
  {
    title: "Local Mart E-Commerce Platform",
    tool: "Figma",
    objective: [
      "Unified Marketplace for local vendors",
      "Enhanced Customer Experience with intuitive search and filter",
      "Streamlined Order Fulfillment from cart to delivery"
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&h=600&fit=crop",
    designLink: "https://www.figma.com/design/dbU105JncvUUs2DkyBf24i/Local-Mart?node-id=0-1&t=YUijEx1rEZHKsT0z-1",
    demoLink: "https://www.figma.com/proto/dbU105JncvUUs2DkyBf24i/Local-Mart?page-id=0%3A1&node-id=240-2310&starting-point-node-id=240%3A2310&t=KOPnmY5YG3QRjaV2-1"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "UI/UX Intern",
    company: "Unified Mentor",
    period: "01/07/2025 - 01/10/2025",
    description: "Focusing on designing user-centric interfaces, enhancing accessibility, and translating complex requirements into intuitive visual experiences."
  }
];

export const EDUCATION = [
  {
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2021 - Present",
    location: "Lucknow, Uttar Pradesh"
  },
  {
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Intermediate",
    period: "2020 - 2021",
    location: "New Delhi"
  },
  {
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Matriculation",
    period: "2018 - 2019",
    location: "New Delhi"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Analytics and Forensic Technology",
    issuer: "Deloitte",
    description: "Data Analytics and Forensic Technology Job Simulation",
    authority: "Chief Human Resources Officer, Deloitte"
  }
];
