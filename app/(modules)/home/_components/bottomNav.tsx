"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { User, Briefcase, Folder, Settings } from "lucide-react"; // Import Lucide icons

export const BottomNav = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "project", "skill"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - 100;
          const sectionHeight = sectionElement.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "about", icon: <User size={24} />, label: "About" },
    { id: "experience", icon: <Briefcase size={24} />, label: "Experience" },
    { id: "project", icon: <Folder size={24} />, label: "Projects" },
    { id: "skill", icon: <Settings size={24} />, label: "Skills" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full background  border-t md:hidden">
      <nav className="mb-4 flex justify-center items-center">
        <ul className="flex w-full justify-around pt-2">
          {navItems.map(({ id, icon, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={`flex flex-col items-center text-sm p-2 ${
                  activeSection === id
                    ? "text-blue-500 font-bold"
                    : "text-gray-600"
                }`}
              >
                {icon}
                <span className="text-xs mt-1">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
