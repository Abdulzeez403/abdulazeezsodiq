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
}

export const linkToSocialMedia = [{}];

export const SkillData = [
  {
    title: "FontEnd Web Development",
    desc: "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code.",
  },
  {
    title: "Mobile App Development",
    desc: "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code.",
  },
  {
    title: "WordPress Development",
    desc: "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code.",
  },
];

export const ExperienceData: IExperienceProps[] = [
  {
    role: "MERN Stack Developer",
    company: "Asynctechs",
    date: "April, 2023 - November, 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt aut quas voluptatem laboriosam assumenda voluptas quisquam doloremque odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt aut quas voluptatem laboriosam assumenda voluptas quisquam doloremque odio.",
    techUseds: ["ReactJs", "JavaScript", "Redux"],
    projects: ["MsGold", "Transact"],
  },
  {
    role: "FRONTEND Developer",
    company: "Freelancer",
    date: "April, 2023 - November, 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt aut quas voluptatem laboriosam assumenda voluptas quisquam doloremque odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt aut quas voluptatem laboriosam assumenda voluptas quisquam doloremque odio.",
    techUseds: ["ReactJs", "JavaScript", "Redux"],
    projects: ["MsGold", "Transact"],
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
    img: "/athens.png",
    name: "Fashions",
    link: "/asynctech.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt au ",
  },

  {
    img: "/athens.png",
    name: "Fashions",
    link: "/asynctech.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt aut  ",
  },
  {
    img: "/athens.png",
    name: "Fashions",
    link: "/asynctech.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt aut quas voluptatem  ",
  },
  {
    img: "/athens.png",
    name: "Fashions",
    link: "/asynctech.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque incidunt aut  ",
  },
];
