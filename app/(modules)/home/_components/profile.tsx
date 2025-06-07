"use client";
import { ImageComponent } from "@/app/components/images";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import ProfileImage from "../../../../public/person2.png";
import { MdOutlineMail } from "react-icons/md";

function Profile() {
  return (
    <div id="about" className="p-4">
      <div>
        <div className="flex">
          <ImageComponent
            src={ProfileImage}
            alt="ProfileImage"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>

        <div>
          <div className="py-4">
            <h4 className="text-[25px] font-bold text-white">
              Abdulazeez Sodiq
            </h4>
            <p className="text-sm">
              Software Engineer <span className="textColor">(Certified)</span>
            </p>
          </div>

          <div className="pb-4 text-sm ">
            <p>
              I am a{" "}
              <span className="textColor underline">MERN Stack Developer </span>{" "}
              who loves to create dynamic and resposive web applicaton
            </p>
          </div>

          <div>
            <div>
              <h3 className="py-3 textColor">
                <a href="../AbdulazeezSodiq.pdf" download>
                  Get my resume
                </a>
              </h3>
              <div className="h-[2px] w-10 textColor bg-green-200  m-[-10]"></div>
            </div>

            <nav className="pb-3">
              <ul className="flex gap-2">
                <li>
                  <Link href="#about" className=" ">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="">
                    Experience
                  </Link>
                </li>

                <li>
                  <Link href="#project" className="">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link href="#skill" className="">
                    Skills
                  </Link>
                </li>

                {/* 
                                <li>
                                    <Link href='#' className="">
                                        Blogs
                                    </Link>
                                </li> */}
              </ul>
            </nav>
            <div>
              <nav className="flex justify-between items-center">
                <ul className="flex gap-4 items-center">
                  <li>
                    <Link
                      href="https://github.com/Abdulzeez403"
                      className="p-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Abdulzeez403"
                      className="p-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://www.facebook.com/abdulazeez.sodiq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3"
                    >
                      <FaFacebookF size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://wa.me/2348063249490" // Replace with your full phone number (without +)
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3"
                    >
                      <FaWhatsapp size={20} />
                    </Link>
                  </li>
                </ul>
                <ul className="textColor">
                  <li className="flex  items-center">
                    <MdOutlineMail size={20} />
                    <Link href="#contact" className="p-3">
                      Get in touch
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
