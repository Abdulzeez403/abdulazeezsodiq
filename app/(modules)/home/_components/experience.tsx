import { IExperienceProps } from '@/app/Datas'
import Link from 'next/link';
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'


interface IProps {
    data: IExperienceProps;
}
export const ExperienceComponent = ({ data }: IProps) => {
    return (
        <div  id="experience" className='block sm:block md:flex lg:flex gap-10 py-6 '>
            <div className='w-[300px] '>
                <h4>{data?.role}</h4>
                <div className='flex gap-5 items-center'>
                    <Link href="/" className='flex gap-3 items-center'>
                        <h4 className='textColor'>{data?.company}</h4>
                    </Link>
                    <FaExternalLinkAlt size={20} />
                </div>

                <time className='text-sm text-gray-500'>{data?.date}</time>
            </div>

            <div className='w-full md:w-[80%] lg:w-[80%] '>
                <p className='break-normal text-sm'>{data?.desc}</p>
                <div className='py-2'>
                    <h4 className=' text-gray-400 '>Technology Used</h4>
                    <div className='grid grid-cols-3 gap-2  md:grid-cols-4 md:grid-cols-5'>
                        {
                            data?.techUseds?.map((t, i) => (
                                <h5  key={i} className='rounded-md bg-grey-300 border-2 p-2 textColor'>{t}</h5>
                            ))
                        }


                    </div>
                </div>
                <div className='py-2'>
                    <h4 className=' text-gray-400 '>Projects</h4>
                    <div className='flex gap-2'>
                        {
                            data.projects?.map((t, i) => (
                                <h5 key={i} className='rounded-md bg-grey-300 border-2 p-2 textColor'>{t}</h5>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

