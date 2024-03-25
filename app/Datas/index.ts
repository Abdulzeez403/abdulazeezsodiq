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
    title: "FullStack Development",
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
    img: "../../public/React-icon.svg.png",
    title: "React js",
  },
  {
    img: "../../public/React-icon.svg.png",
    title: "React js",
  },
  {
    img: "../../public/React-icon.svg.png",
    title: "React js",
  },
];
