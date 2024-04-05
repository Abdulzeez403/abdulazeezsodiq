import { ImageComponent } from '@/app/components/images'
import React from 'react'
import ProjectImage from "../../../../public/athens.png"
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IProject } from '@/app/Datas'


interface IProps {
    data: IProject

}

export const ProjectComponent = ({ data }: IProps) => {
    return (
        <div className=' w-[40%] h-50 cardShadow hover:textColor hover:shadow-slate-600 hover:shadow-md
        rounded-md shadow-sm p-4'>
            <div className='flex justify-center m-0'>
                <ImageComponent src={data?.img} alt="ProjectImage" width={400} height={150} />
            </div>

            <div>
                <div className='flex gap-5 items-center py-2'>
                    <Link href="/" className='items-center'>
                        <h4 className='font-bold text-[20px]'>{data?.name}</h4>
                    </Link>
                    <FaExternalLinkAlt size={20} />
                </div>
                <div className='py-2'>
                    <p className='text-sm'>{data?.desc}</p>
                </div>
                <div className='text-end p-4'>
                    <Link href={data?.link} className='font-bold'>See Project</Link>
                </div>
            </div>
        </div>
    )
}

