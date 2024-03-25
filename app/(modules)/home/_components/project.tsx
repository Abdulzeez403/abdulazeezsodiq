import { ImageComponent } from '@/app/components/images'
import React from 'react'
import ProjectImage from "../../../../public/athens.png"
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const ProjectComponent = () => {
    return (
        <div className=' w-[100%] md:w-[400px] lg:w-[400px] h-50 cardShadow hover:textColor hover:shadow-slate-600 hover:shadow-md
        rounded-md shadow-sm p-4'>
            <div className='flex justify-center m-0'>
                <ImageComponent src={ProjectImage} alt="ProjectImage" width={450} height={100} />
            </div>

            <div>
                <div className='flex gap-5 items-center py-2'>
                    <Link href="/" className='items-center'>
                        <h4 className='font-bold text-[20px]'>Fashionable</h4>
                    </Link>
                    <FaExternalLinkAlt size={20} />
                </div>
                <div className='py-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum voluptatibus corporis accusantium id quo doloremque nulla perferendis quidem pariatur quasi sequi tempora, maiores eum, omnis eveniet animi praesentium aut?</p>
                </div>
                <div className='text-end p-4'>
                    <h4 className='font-bold'>See Project</h4>
                </div>
            </div>
        </div>
    )
}

