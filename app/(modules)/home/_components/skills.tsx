import { IoCodeSlashSharp } from "react-icons/io5";
import { MdMobileFriendly } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { SkillsProps } from "@/app/Datas";

export const SkillsComponent = ({ title, desc }: SkillsProps) => {
  let iconSize = 34;
  const renderIcon = (title: any) => {
    switch (title) {
      case "Full-Stack SaaS Development":
        return <FaDatabase size={iconSize} />;
      case "AI API Integration":
        return <FaRobot size={iconSize} />;
      case "Mobile App Development":
        return <MdMobileFriendly size={iconSize} />;
      case "API & Backend Engineering":
        return <AiOutlineApi size={iconSize} />;
      default:
        return <IoCodeSlashSharp size={iconSize} />;
    }
  };

  return (
    <div
      id="skill"
      className="flex flex-wrap shadow-md p-4 rounded-md my-4 cardShadow hover:textColor hover:shadow-slate-600 hover:shadow-md md:w-[400px] lg:w-[400px] "
    >
      {renderIcon(title)}
      <h4 className="text-[20px] leading-6 py-2 font-bold">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  );
};
