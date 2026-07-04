/**
 * Single source of truth for all portfolio content.
 * Edit this file to update copy anywhere on the site.
 *
 * NOTE: Intentionally public-safe — no phone numbers, no references,
 * no private credentials. Keep it that way.
 */

export const person = {
  name: "Kathirgamanathan Kajanan",
  shortName: "Kajanan",
  role: "Senior Software Engineer",
  location: "Vavuniya, Sri Lanka",
  email: "Kajanan02000@gmail.com",
  linkedin: "https://www.linkedin.com/in/kajanan-kathirgamanathan",
  github: "https://github.com/Kajanan02",
  cvPath: "/cv.pdf",
} as const;

export const hero = {
  availability: "Open to senior engineering opportunities",
  headline: "Senior Software Engineer building scalable, high-performance digital products.",
  subheadline:
    "Full-stack engineer experienced in mobile apps, real-time platforms, cloud systems, event-driven architecture, and user-focused product engineering.",
  metrics: [
    { value: "35%", label: "Faster load times", detail: "Mobile app performance optimization" },
    { value: "3000→700ms", label: "API response time", detail: "Backend & pipeline re-architecture" },
    { value: "5,000+", label: "Concurrent users", detail: "Live updates under 200ms latency" },
    { value: "30%", label: "Fewer production bugs", detail: "Modular architecture & code quality" },
  ],
  /** Rendered as the hero terminal panel — every value comes from the CV. */
  snapshot: [
    { key: "role", value: '"Senior Software Engineer"' },
    { key: "focus", value: '["real-time", "full-stack", "mobile", "cloud"]' },
    { key: "api_latency", value: '"3000ms → 700ms"' },
    { key: "live_updates", value: '"<200ms @ 5,000+ users"' },
    { key: "mobile_loads", value: '"35% faster"' },
    { key: "prod_bugs", value: '"down 30%"' },
  ],
} as const;

export const about = {
  title: "About",
  eyebrow: "Who I am",
  paragraphs: [
    "I'm a senior full-stack engineer who ships products end to end — from polished mobile front ends to event-driven back ends and the cloud infrastructure underneath them. Over five years at SenzMate IoT Intelligence, I've built physiotherapy and wellness apps, real-time sports platforms, agriculture intelligence systems, and data pipelines that process high-volume event streams.",
    "My work is measured in outcomes: cutting average API response times from 3000ms to 700ms, reducing production bug reports by 30% through modular architecture, and delivering live score updates in under 200ms to more than 5,000 concurrent users. I sweat the details that make software feel fast, reliable, and effortless to use.",
    "Beyond product work, I maintain open-source libraries in the React and React Native ecosystem and keep exploring emerging technologies — the best engineering decisions come from staying curious.",
  ],
  highlights: [
    "5+ years building production systems",
    "Mobile, web, backend & cloud",
    "Real-time & event-driven architecture",
    "Open-source maintainer",
  ],
  /** The four engineering themes the portfolio tells its story around. */
  pillars: [
    {
      icon: "gauge",
      title: "Performance Engineering",
      body: "Re-architected APIs and data pipelines from 3000ms to 700ms responses, and cut mobile app load times by 35%.",
    },
    {
      icon: "network",
      title: "Scalable Architecture",
      body: "Event-driven systems on Apache Kafka, Spark, and Elasticsearch, designed to absorb high-volume event streams.",
    },
    {
      icon: "radio",
      title: "Real-Time Systems",
      body: "Live score updates delivered in under 200ms to 5,000+ concurrent users over MQTT and WebSocket.",
    },
    {
      icon: "layers",
      title: "Full-Stack Delivery",
      body: "React Native and Next.js front ends to Nest.js and Node services on AWS — owned and shipped end to end.",
    },
  ],
} as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "SenzMate IoT Intelligence",
    period: "June 2022 — Present",
    current: true,
    summary:
      "Leading full-stack delivery across mobile, web, and event-driven backend systems.",
    achievements: [
      "Designed and optimized a mobile physiotherapy and wellness application using React Native, Redux, Mediapipe, Node.js, and Express — reducing load times by 35% and increasing daily active users by 20%.",
      "Built a full-featured car rental platform with React.js and Nest.js, enabling real-time bookings and improving customer retention by 15%.",
      "Implemented event-driven data pipelines with Apache Kafka, Apache Spark, and Elasticsearch, cutting average API response time from 3000ms to 700ms.",
      "Raised code quality through modular architecture, reducing production bug reports by 30%.",
    ],
    tech: ["React Native", "React.js", "Nest.js", "Node.js", "Kafka", "Spark", "Elasticsearch"],
  },
  {
    role: "Associate Software Engineer",
    company: "SenzMate IoT Intelligence",
    period: "June 2021 — May 2022",
    current: false,
    summary: "Built real-time IoT and data-intelligence products at production scale.",
    achievements: [
      "Developed and maintained a real-time agriculture intelligence platform using React Native and the MERN stack, helping improve crop yield predictions by 20%.",
      "Built a sports results tracking system with Next.js, MQTT, and the MENN stack, delivering live score updates with under 200ms latency to 5,000+ concurrent users.",
    ],
    tech: ["React Native", "MERN Stack", "Next.js", "MQTT", "IoT"],
  },
  {
    role: "Software Engineer Intern",
    company: "SenzMate IoT Intelligence",
    period: "Dec 2020 — May 2021",
    current: false,
    summary: "First production experience across the full JavaScript stack.",
    achievements: [
      "Implemented features for a Courses Management System using React, Node.js, MongoDB, and Express.js.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
  },
] as const;

export const projects = [
  {
    title: "Physiotherapy & Wellness Mobile App",
    category: "Mobile · HealthTech",
    description:
      "A mobile wellness and physiotherapy application optimized for performance, usability, and user engagement.",
    impact: "35% faster load times · 20% increase in daily active users",
    tags: ["React Native", "Redux", "Mediapipe", "Node.js", "Express"],
    icon: "activity",
  },
  {
    title: "Car Rental Platform",
    category: "Full-Stack Web",
    description:
      "A full-featured car rental platform with real-time booking workflows and scalable backend architecture.",
    impact: "Improved customer retention by 15%",
    tags: ["React.js", "Nest.js", "Real-time Booking", "Full-stack"],
    icon: "car",
  },
  {
    title: "Event-Driven Data Pipeline",
    category: "Data Engineering",
    description:
      "A reliable event-driven data pipeline designed to process high-volume event streams with scalability and observability.",
    impact: "API response time reduced from 3000ms to 700ms",
    tags: ["Apache Kafka", "Apache Spark", "Elasticsearch", "Scalable Systems"],
    icon: "workflow",
  },
  {
    title: "Agriculture Intelligence Platform",
    category: "Real-Time IoT",
    description:
      "A real-time agriculture intelligence platform supporting crop yield prediction and farmer decision-making.",
    impact: "Helped improve crop yield predictions by 20%",
    tags: ["React Native", "MERN Stack", "IoT", "Data Intelligence"],
    icon: "sprout",
  },
  {
    title: "Sports Results Tracking System",
    category: "Real-Time Systems",
    description:
      "A live sports results platform delivering low-latency score updates at scale.",
    impact: "Under 200ms latency for 5,000+ concurrent users",
    tags: ["Next.js", "MQTT", "MENN Stack", "Real-time Systems"],
    icon: "trophy",
  },
  {
    title: "Courses Management System",
    category: "Full-Stack Web",
    description:
      "A course management platform with core learning-management features and full-stack implementation.",
    impact: "End-to-end LMS features shipped across the stack",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    icon: "book",
  },
] as const;

export const openSource = {
  intro:
    "I also contribute to open-source tools focused on React, React Native, and developer productivity.",
  packages: [
    {
      name: "react-native-searchable-dropdown-kj",
      description:
        "A performant, customizable searchable dropdown component for React Native apps.",
      url: "https://www.npmjs.com/package/react-native-searchable-dropdown-kj",
      language: "React Native",
    },
    {
      name: "react-native-send-direct-sms",
      description:
        "A lightweight native module for sending SMS messages directly from React Native.",
      url: "https://www.npmjs.com/package/react-native-send-direct-sms",
      language: "React Native",
    },
    {
      name: "react-form-buddy",
      description:
        "A minimal form validation helper that keeps React form state simple and predictable.",
      url: "https://www.npmjs.com/package/react-form-buddy",
      language: "React",
    },
  ],
} as const;

export const skillGroups = [
  { title: "Programming Languages", icon: "code", skills: ["JavaScript", "Python", "C", "Java"] },
  { title: "Mobile", icon: "smartphone", skills: ["React Native", "Android Studio"] },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React.js", "TypeScript", "Next.js", "Backbone", "HTML", "CSS", "SASS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "Django", "GraphQL", "Nest.js", "WebSocket"],
  },
  { title: "Databases", icon: "database", skills: ["MongoDB", "MySQL", "PostgreSQL"] },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS EC2", "AWS Elastic Beanstalk", "Route 53", "OpenSearch", "Docker"],
  },
  {
    title: "Architecture & Engineering",
    icon: "boxes",
    skills: [
      "SOLID Principles",
      "Design Patterns",
      "OOP Concepts",
      "Event-Driven Architecture",
      "Real-Time Systems",
      "API Optimization",
    ],
  },
  {
    title: "Soft Skills",
    icon: "users",
    skills: ["Problem-Solving", "Critical Thinking", "Team Collaboration", "Customer Service"],
  },
] as const;

export const achievements = [
  {
    title: "EngHack 48-Hour Idea Hackathon",
    award: "Winner",
    year: "2022",
    description: "Won a national 48-hour hackathon by rapidly prototyping and pitching a product idea end to end.",
  },
  {
    title: "IEEE Innovation Nation Sri Lanka",
    award: "Winner",
    year: "2022",
    description: "First place in IEEE's national innovation competition for engineering-driven product thinking.",
  },
  {
    title: "Yarl Geek Challenge Junior",
    award: "First Place & Winner",
    year: "2016",
    description: "Took first place in one of Sri Lanka's leading technology challenges for young engineers.",
  },
] as const;

export const education = [
  {
    degree: "BSc (Hons) in Computer Science and Technology",
    institution: "Uva Wellassa University, Sri Lanka",
    kind: "University",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "UKI Coding School",
    kind: "Professional Training",
  },
  {
    degree: "G.C.E A/L — Physical Science Stream",
    institution: "Vavuniya Tamil Madhya Maha Vidyalayam",
    kind: "Advanced Level",
  },
  {
    degree: "G.C.E O/L",
    institution: "Vavuniya Tamil Madhya Maha Vidyalayam",
    kind: "Ordinary Level",
  },
] as const;

export const volunteering = [
  { title: "Alpha Microsoft Learn Student Ambassador", org: "Microsoft", icon: "sparkles" },
  { title: "Web Team Lead — Impetus 2023 Competition", org: "Uva Wellassa University", icon: "flag" },
  { title: "Web Admin", org: "Computer Society", icon: "globe" },
  { title: "Technical Team Member", org: "FOSS Club", icon: "terminal" },
  { title: "Student Member", org: "IEEE", icon: "badge" },
  { title: "Member", org: "Computer Society", icon: "users" },
] as const;

export const contact = {
  eyebrow: "Get in touch",
  title: "Let's build something great together",
  body: "Whether it's a scalable platform, a real-time system, or a mobile product — I'm always open to discussing interesting engineering problems and new opportunities.",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;