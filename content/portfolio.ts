export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  product?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  honor?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export interface CommunityItem {
  title: string;
  image: string;
}

export interface HonorItem {
  placement: string;
  event: string;
  venue: string;
  date: string;
  description: string;
  prize: string;
  technologies: string[];
  image: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  stats: { label: string; value: string }[];
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  honors: HonorItem[];
  certifications: string[];
  education: EducationItem[];
  community: CommunityItem[];
  communityGroups: string[];
}

export const portfolio: PortfolioData = {
  name: "Aagam Doshi",
  title: "Lead Software Engineer",
  tagline:
    "GenAI Systems · Distributed Systems · Cloud Architecture",
  summary:
    "Lead Software Engineer with nearly a decade of experience designing scalable, cloud-native platforms, high-throughput distributed systems, and GenAI-powered developer acceleration tools. Proven track record in serverless architectures, custom AI agent orchestration, and enterprise workflow automation. Expert in driving system reliability, infrastructure optimization, and building high-impact platforms that radically boost developer velocity and reduce operational overhead.",
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Core Services", value: "50+" },
    { label: "Cost Reduction", value: "30%" },
    { label: "CI/CD Speedup", value: "40%" },
  ],
  contact: {
    phone: "+91 9076251877",
    email: "aagamdoshi30794@gmail.com",
    linkedin: "https://www.linkedin.com/in/aagam-doshi/",
    github: "https://github.com/aagamdoshi",
    resumeUrl: "/resume.pdf",
  },
  experience: [
    {
      company: "Cimpress",
      role: "Lead Software Engineer",
      period: "Aug 2020 – Present",
      product: "Mass Customization Platform (MCP), COMET",
      highlights: [
        "Architected and scaled serverless microservices infrastructure supporting 50+ core services across global regions, driving a 30% reduction in operational costs.",
        "Designed and integrated autonomous AI agents using Cursor, AWS Bedrock, and multiple foundational models (GPT-4 / Claude) into the engineering lifecycle to automate end-to-end code reviews and story-to-code generation workflows.",
        "Architected and drove enterprise adoption of a distributed workflow orchestration platform using Netflix Conductor, Apollo GraphQL, and GenAI agents, optimizing background processing pipelines and system scalability.",
        "Owned reliability engineering strategies to achieve close to 0% downtime for mission-critical e-commerce pathways, processing thousands of critical daily events and transactions.",
        "Spearheaded infrastructure optimizations and Infrastructure as Code (IaC) blueprints utilizing AWS SAM, AWS CDK, and Humanitec; optimized CI/CD performance to slash build times by 40% and accelerate velocity for global Dev teams.",
        "Mentored and guided junior engineers, fostering technical growth in serverless design patterns, asynchronous programming, and clean system architectures.",
      ],
      technologies: [
        "GenAI",
        "LLMs",
        "AWS Bedrock",
        "Cursor",
        "AI Agents",
        "AWS CDK",
        "AWS SAM",
        "Lambda",
        "AppSync",
        "Humanitec",
        "Go",
        "Node.js",
        "PostgreSQL",
        "Apollo GraphQL",
        "React",
        "Docker",
      ],
    },
    {
      company: "Zycus",
      role: "Senior Software Engineer",
      period: "Feb 2019 – Aug 2020",
      product: "Dewdrops (Angular), Word Connect",
      highlights: [
        "Led the engineering of a custom MS Word enterprise plugin via Angular and Office.js, increasing active user engagement by 25%.",
        "Directed core R&D operations for cloud-hosted MS Word Online integrations, Appstore architectures, and secure OAuth 2.0 authentication frameworks.",
      ],
      technologies: [
        "C#",
        "Angular",
        "RxJS",
        "Azure AD",
        "Logic Apps",
        "Graph API",
        "MSAL",
        "SQL Server",
        "Office.js",
      ],
    },
    {
      company: "GEP",
      role: "Software Engineer",
      period: "Jul 2016 – Feb 2019",
      product: "SMART by GEP",
      highlights: [
        "Engineered full-stack features and performance optimizations across mission-critical procurement product pipelines.",
        "Collaborated with Product Management to drive technical requirement analysis, translating complex product epics into scalable system designs.",
        "Maintained a target of Zero Defects across multiple major production releases for high-value enterprise accounts.",
      ],
      technologies: [
        "SQL Server",
        "C# .NET",
        "MVC",
        "Angular",
        "Azure",
      ],
    },
  ],
  skills: [
    {
      name: "Languages",
      items: ["TypeScript", "JavaScript", "GoLang", "C#"],
    },
    {
      name: "AI Engineering",
      items: [
        "Generative AI Systems",
        "Large Language Models (LLMs)",
        "AWS Bedrock",
        "Autonomous AI Agents",
        "Cursor",
      ],
    },
    {
      name: "Cloud & Backend",
      items: [
        "Node.js",
        "Serverless Microservices",
        "Event-Driven Architectures",
        "Distributed Systems",
        "AWS (CDK, SAM, Lambda, AppSync)",
        "Azure Logic Apps",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      name: "Architecture & Tools",
      items: [
        "System Design",
        "Scalability",
        "Reliability Engineering",
        "Humanitec",
        "Netflix Conductor / Orkes",
        "Docker",
        "CI/CD (GitLab)",
        "New Relic",
        "Sumo Logic",
        "Snyk",
        "JIRA",
      ],
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "SQL Server", "Snowflake", "Looker"],
    },
    {
      name: "Frontend",
      items: ["React", "Angular", "RxJS"],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "Modern personal portfolio showcasing experience, projects, and skills with smooth animations and responsive design.",
      technologies: ["Next.js", "React Three Fiber", "GSAP", "Firebase"],
      liveUrl: "https://aagam30794.web.app/",
      githubUrl: "https://github.com/aagamdoshi",
      image: "/images/portfolio.svg",
    },
    {
      title: "Real-Time Stock Updates",
      description:
        "Live stock market dashboard with real-time chart updates powered by WebSockets and interactive visualizations.",
      technologies: ["Angular", "Chart.js", "WebSockets", "Nebular"],
      liveUrl: "https://aagamdoshi.github.io/StocksApp/",
      githubUrl: "https://github.com/aagamdoshi/StocksApp",
      image: "/images/stock.png",
    },
    {
      title: "GEP Hackathon Chatbot",
      description:
        "Smart chatbot assistant prototype built for GEP Hackathon 2018 using Microsoft Cognitive Services and LUIS Model. Awarded 2nd Runner Up with 20k INR cash prize.",
      technologies: [
        "Microsoft Cognitive Services",
        "LUIS",
        "C#",
        "Azure",
      ],
      honor: "2nd Runner Up — HACKATHON 2018 @ GEP, Mumbai",
      image: "/images/hackathon.svg",
    },
    {
      title: "BookMyTicket",
      description:
        "Angular demo application for ticket booking with dynamic routing and reactive forms.",
      technologies: ["Angular", "TypeScript", "RxJS"],
      liveUrl: "https://aagamdoshi.github.io/PublishTest/",
      githubUrl: "https://github.com/aagamdoshi/ng6-BookTicket",
      image: "/images/bmt.png",
    },
  ],
  honors: [
    {
      placement: "2nd Runner Up",
      event: "HACKATHON 2018",
      venue: "GEP, Mumbai",
      date: "Jun 2018",
      description:
        "Engineered a smart chatbot assistant prototype using Microsoft Cognitive Services and the LUIS Model — natural language understanding for enterprise workflows.",
      prize: "₹20,000 cash prize",
      technologies: [
        "Microsoft Cognitive Services",
        "LUIS",
        "C#",
        "Azure",
      ],
      image: "/images/hackathon.svg",
    },
  ],
  certifications: [
    "Node.js Essential Training",
    "Microservices Foundations",
    "Building RESTful APIs with Node.js and Express",
    "AWS Lambda",
    "Advanced JavaScript Masterclass",
    "Leadership: Becoming an Effective and Dynamic Leader",
  ],
  education: [
    {
      period: "2012 – 2016",
      degree: "B.E. in Computer Engineering",
      institution:
        "K.J. Somaiya College of Engineering (Autonomous)",
    },
    {
      period: "2010 – 2012",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Mithibai College, Mumbai University",
    },
  ],
  community: [
    {
      title: "Google Cloud Community Day",
      image: "/images/GCP.jpeg",
    },
    {
      title: "Microsoft Ignite Tour",
      image: "/images/Ignite.jpg",
    },
    {
      title: "Elastic Community — GDG Cloud Mumbai",
      image: "/images/as.jpg",
    },
  ],
  communityGroups: [
    "Orkes Developer Meetups (Google HQ, Bangalore)",
    "Elastic Community (Mumbai)",
    "Google Cloud Community (Mumbai)",
    "MS Office Addin",
    "MS Ignite",
  ],
};
