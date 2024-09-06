 "use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";

export const BottomNav = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll event listener to track the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "project", "skill"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - 100; // adjust this value as needed
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

  return (
    <div className="fixed bottom-0 left-0 w-full background md:hidden ">
      <nav className="mb-10 flex justify-center items-center">
        <ul className="flex pt-4 gap-3">
          <li>
            <Link
              href="#about"
              className={`p-3 ${
                activeSection === "about" ? "text-blue-500 font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className={`p-3 ${
                activeSection === "experience" ? "text-blue-500 font-bold" : ""
              }`}
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              href="#project"
              className={`p-3 ${
                activeSection === "project" ? "text-blue-500 font-bold" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skill"
              className={`p-3 ${
                activeSection === "skill" ? "text-blue-500 font-bold" : ""
              }`}
            >
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
