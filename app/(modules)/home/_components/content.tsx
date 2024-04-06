import { ExperienceData, SkillData, ToolsDataBackend, ToolsDataFront, ToolsDataTools, projectData } from '@/app/Datas';
import React from 'react'
import { GrServices } from "react-icons/gr";
import { SkillsComponent } from './skills';
import { HeaderTitle } from './headerTitle';
import { ExperienceComponent } from './experience';
import { MdOutlinePropaneTank } from "react-icons/md";
import { ProjectComponent } from './project';
import { FaNetworkWired } from "react-icons/fa6";
import { IoCodeSlashSharp } from "react-icons/io5";
import { ImageComponent } from '@/app/components/images';
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { ContactForm } from './form';
import { ToolsComponent } from './tools';


export const Content = () => {

    return (
        <div className="overflow-none  overflowed-scroll lg:overflow-auto lg:overflowed-scroll  h-[600px] " >
            <div>
                <p className=' text-sm text-wrap'>My name is Sodiq Abdulazeez. I am from Nigeria, Ilorin, Kwara State. I have 3years of experience in Web development, Graphic Designing, Web Designing and Frontend Engineer 🎉. I have built websites and web applications that are responsive, scalable and fast for small business and medium business and I have contribute to several projects</p>
                <br />
                <p className='text-sm text-wrap'>I ventured into web programming driven by personal curiosity and discovered a profound passion for designing and developing web applications. The process of crafting digital experiences not only captivates me but also provides a sense of ownership and fulfillment as I bring my ideas to life</p>

            </div>

            <div className='flex justify-between items-center py-6'>
                <div className='text-center'>
                    <h4 className='text-[40px] md:text-[60px] lg:text-[60px]  font-bold'>04+</h4>
                    <h4 className='text-sm md:text-lg lg:text-lg'>Year of Experience</h4>
                </div>

                <div className='text-center'>
                    <h4 className=' text-[40px] md:text-[60px] lg:text-[60px] font-bold'>05+</h4>
                    <h4 className='text-sm md:text-lg lg:text-lg'>Projects Completed</h4>
                </div>

                <div className='text-center'>
                    <h4 className='text-[40px] md:text-[60px] lg:text-[60px]  font-bold'>0+</h4>
                    <h4 className='text-sm md:text-lg lg:text-lg'>Projects Inprogress </h4>
                </div>
            </div>

            <div className='py-4'>

                <HeaderTitle icon={
                    <GrServices size={20} />}
                    title="Services"
                    subTitle="My Experiences"

                />

                <div className='block w-[100%] sm:block  md:flex lg:flex gap-6 '>
                    {SkillData.map((s, index) => (

                        <SkillsComponent key={index} title={s?.title} desc={s?.desc} />
                    ))}


                </div>


            </div>

            <div className='py-4'>
                <HeaderTitle icon={
                    <GrServices size={20} />}
                    title="Career"
                    subTitle="My Working Experiences"
                />
                <div>

                    {
                        ExperienceData.map((e, i) => (
                            <ExperienceComponent key={i} data={e} />

                        ))
                    }
                </div>

            </div>

            <div className='py-4'>
                <HeaderTitle icon={
                    <MdOutlinePropaneTank size={20} />}
                    title="Projects and Works"
                    subTitle="My Project"
                />
                <div className='block gap-5 md:flex-wrap sm:block md:flex lg:flex lg:flex-wrap'>
                    {
                        projectData.map((p, i) => (
                            <ProjectComponent data={p} key={i} />
                        ))}
                </div>

            </div>




            <div className='py-4'>
                <HeaderTitle icon={
                    <FaNetworkWired size={20} />}
                    title="Skills and Expertise"
                    subTitle="My Specialization"
                />
                <div>
                    <div className='py-4'>
                        <div className='flex gap-4 items-center'>
                            <IoCodeSlashSharp size={23} />
                            <h4 className='py-2 font-bold text-lg'>FRONTEND</h4>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {ToolsDataFront.map((t, i) => (
                                <ToolsComponent key={i} data={t} />
                            ))}
                        </div>
                    </div>

                    <div className='py-4'>
                        <div className='flex gap-4 items-center'>
                            <IoCodeSlashSharp size={23} />
                            <h4 className='py-2 font-bold text-lg'>BACKEND</h4>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {ToolsDataBackend.map((t, i) => (
                                <ToolsComponent key={i} data={t} />
                            ))}
                        </div>
                    </div>

                    <div className='py-4'>
                        <div className='flex gap-4 items-center'>
                            <IoCodeSlashSharp size={23} />
                            <h4 className='py-2 font-bold text-lg'>TOOLS</h4>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {ToolsDataTools.map((t, i) => (
                                <ToolsComponent key={i} data={t} />
                            ))}
                        </div>
                    </div>
                </div >





                <div className='py-4'>
                    <HeaderTitle icon={
                        <FaNetworkWired size={20} />}
                        title="Contact Me"
                        subTitle="Get In Touch"
                    />

                    <div className=' block gap-8 sm:block md:flex  lg:flex'>

                        <div>
                            <div className='flex gap-4 py-4'>
                                <div className="rounded-lg p-4 cardShadow w-[50px] h-[50px]">
                                    <IoIosCall size={18} color="#fff" />
                                </div>
                                <div>
                                    <h5>call me at</h5>
                                    <h3 className='font-bold'>+0805959499494</h3>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className="rounded-lg p-4 cardShadow w-[50px] h-[50px]">
                                    <MdOutlineMail size={18} color="#fff" />
                                </div>
                                <div>
                                    <h5>Message me at</h5>
                                    <h3 className='font-bold'>Abdulazeezsodiq403@gmail.com</h3>
                                </div>
                            </div>

                            <div className='flex gap-4 py-4'>
                                <div className="rounded-lg p-4 cardShadow w-[50px] h-[50px]">
                                    <FaLocationCrosshairs size={18} color="#fff" />
                                </div>
                                <div>
                                    <h5>I am from</h5>
                                    <h3 className='font-bold'>Nigeria, Ilorin, Kwara State</h3>
                                </div>
                            </div>
                        </div>

                        <div className=" w-[370px]">
                            <ContactForm />
                        </div>


                    </div>

                </div>



            </div >
        </div >

    )
};



