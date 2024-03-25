import { ImageComponent } from '@/app/components/images';
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import ProfileImage from "../../../../public/P1.jpg";
import { MdOutlineMail } from "react-icons/md";

function Profile() {
    return (
        <div className='p-4'>
            <div>
                <ImageComponent src={ProfileImage} alt="ProfileImage" width={150} height={80} />
                <div>
                    <div className='py-4'>
                        <h4 className='text-[25px] font-bold'>Abdulazeez Sodiq</h4>
                        <p className='text-sm'>SoftWare Enginner <span className='textColor'>(Frontend)</span></p>
                    </div>

                    <div className='pb-4 text-sm '>
                        <p>I am a <span className='textColor underline'>MERN Stack developer </span> who loves to create dynamic amd resposive wen applicaton</p>

                    </div>

                    <div>
                        <div>
                            <h3 className='py-3 textColor'>Get my resume</h3>
                            <p className='h-[2px] w-10 textColor, bg-red-300 p-[-2]'></p>
                        </div>

                        <nav className='pb-3'>
                            <ul className="flex gap-2">
                                <li>
                                    <Link href='/' className=" ">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className="">
                                        Experience
                                    </Link>
                                </li>

                                <li>
                                    <Link href='/' className="">
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link href='/' className="">
                                        Skills
                                    </Link>
                                </li>


                                <li>
                                    <Link href='/' className="">
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div >

                            <nav className='flex justify-between items-center'>
                                <ul className="flex gap-4 items-center">
                                    <li>
                                        <Link href='/' className="p-3">
                                            <FaGithub size={20} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/' className="p-3">
                                            <FaLinkedin size={20} />
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href='/' className="p-3">
                                            <FaFacebookF size={20} />
                                        </Link>
                                    </li>


                                    <li>
                                        <Link href='/' className="p-3">
                                            <FaWhatsapp size={20} />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className='textColor'>
                                    <li className='flex  items-center'>
                                        <MdOutlineMail size={20} />
                                        <Link href='/' className="p-3">
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
    )

}

export default Profile;