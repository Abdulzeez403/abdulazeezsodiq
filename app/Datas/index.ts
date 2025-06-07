interface socailMediaProps {}

export interface SkillsProps {
  title: string;
  desc: string;
}
export interface IExperienceProps {
  role: string;
  company: string;
  date: string;
  desc: string;
  techUseds: string[];
  projects: string[];
}

export interface ITools {
  title: string;
  img: any;
}

export interface IProject {
  img: any;
  name: string;
  link: string;
  desc: string;
  stacks: any;
}

export const linkToSocialMedia = [{}];

export const SkillData = [
  {
    title: "FontEnd Web Development",
    desc: "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code.",
  },
  {
    title: "Mobile App Development",
    desc: "I have pretty good experience building cross-platform application and it is scalable with quick performance. I have worked on atleast 5 mobile app which are now live",
  },
  {
    title: "WordPress Development",
    desc: "I specialize in converting PSD or Figma designs into WordPress websites and creating custom themes from scratch. I've successfully completed numerous projects in this domain",
  },
];

export const ExperienceData: IExperienceProps[] = [
  {
    role: "MERN Stack Developer",
    company: "Asynctechs",
    date: "Dec, 2022 - 2024",
    desc: "At Asynctechs, a startup located in Kwara State, I started as a frontend developer. Later, I transitioned to testing and eventually returned to development. Throughout my journey, I collaborated with a remote team of eight individuals, spread across different locations",
    techUseds: ["ReactJs", "JavaScript", "NextJs", "Graphql", "React_Native"],
    projects: ["MsGold", "Transact"],
  },
  {
    role: "Mobile Developer",
    company: "Adestaly",
    date: "Dec, 2022 - 2024",
    desc: "Adestaly is a telecom startup focused on reselling data, airtime, electricity bills, and other digital services. As a Mobile Developer, I was responsible for building and maintaining the core application that enabled users to access and manage these services efficiently",
    techUseds: ["ReactJs", "JavaScript", "NextJs", "Graphql", "React_Native"],
    projects: ["Adestaly App"],
  },
  {
    role: "FRONTEND Developer",
    company: "Freelancer",
    date: "March, 2021 - Still Date",
    desc: "As a seasoned freelancer software engineer, I specialize in transforming client ideas into vibrant, functional realities. With a meticulous approach, I craft bug-free, scalable projects that exceed expectations. My commitment to quality ensures that each endeavor is not only a reflection of the client's vision but also a testament to my dedication to excellence.",
    techUseds: ["ReactJs", "JavaScript", "Redux"],
    projects: ["Foodie", "Life-Ease"],
  },
];

export const ToolsDataFront: ITools[] = [
  {
    img: "/React-icon.svg.png",
    title: "React js",
  },
  {
    img: "/next.png",
    title: "Next js",
  },
  {
    img: "/js.png",
    title: "Javascript",
  },
  {
    img: "/mui.png",
    title: "Redux",
  },
  {
    img: "/tailwind.png",
    title: "Tailwind",
  },
];

export const ToolsDataBackend: ITools[] = [
  {
    img: "/jwt.png",
    title: "JWT",
  },
  {
    img: "/mongo.png",
    title: "MongoDB",
  },

  {
    img: "/express.png",
    title: "Express",
  },
  {
    img: "/node.png",
    title: "Node",
  },
];

export const ToolsDataTools: ITools[] = [
  {
    img: "/jira.png",
    title: "Jira",
  },

  {
    img: "/netlify.png",
    title: "Netlify",
  },

  {
    img: "/git.png",
    title: "Git",
  },

  {
    img: "/figma.png",
    title: "Figma",
  },
];

export const projectData: IProject[] = [
  {
    img: "/project1.png",
    name: "Foodie",
    stacks: ["React js, MongoDB, Tailwind, Express js"],
    link: "https://foodie-web-nine.vercel.app",
    desc: "Foodie is restuarant website where user can order  food and see reviews from other users and tracking the delivery process",
  },

  {
    img: "/jambfocus.png",
    name: "JambFocus",
    stacks: ["React js, Next Js, MongoDB, Tailwind, Express js"],
    link: "https://jambfocus.com/",
    desc: "JambFocus is a plalform where student earn will learn. you earn coins by answering past jamb question and you can convert this coin to either airtime or Databundle  ",
  },

  {
    img: "/ecommerce.png",
    name: "Accmart",
    stacks: ["Worpdress,  Elementor, Woo-commerce"],
    link: "https://ecommerce.goolhealthandsport.com",
    desc: "Accmart is a premier phone gadget store offering the latest and most innovative tech accessories. From cutting-edge smartphones to essential gadgets, Accmart provides a wide range of products to meet all your tech needs. ",
  },

  {
    img: "/Payonce_HomeSection.png",
    name: "Payonce",
    stacks: ["Next Js, Typescript, Mongodb, Tailwind, Node Js"],
    link: "https://mypayonce.vercel.app",
    desc: "Payonce is a VTU platform designed for resellers to offer data, airtime, and utility bill payments. I contributed to building scalable frontend interfaces and integrating secure APIs for seamless transactions",
  },
];
