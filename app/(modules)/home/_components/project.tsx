import { ImageComponent } from '@/app/components/images'
import React from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IProject } from '@/app/Datas'


interface IProps {
    data: IProject

}

export const ProjectComponent = ({ data }: IProps) => {

    const sanitizeUrl = (url: any) => {
        if (url.startsWith('http://localhost:3000')) {
            return url.replace('http://localhost:3000', '');
        }
        return url;
    };

    const sanitizedLink = sanitizeUrl(data?.link);
    return (
        <div id="project" className=' w-[100%] my-5 h-50 cardShadow hover:textColor hover:shadow-slate-600 hover:shadow-md
        rounded-md shadow-sm p-4 md:w-[40%] lg:w-[40%]'>
            <div className='flex justify-center m-0'>
                <ImageComponent src={data?.img} alt="ProjectImage" width={400} height={150} />
            </div>

            <div>
                <div className='flex gap-5 items-center py-2'>
                    <Link href={data.link} target="_blank" className='items-center'>
                        <h4 className='font-bold text-[20px]'>{data?.name}</h4>
                    </Link>
                    <FaExternalLinkAlt size={20} />
                </div>
                <div>{
                    data?.stacks.map((s: any, index: number) => (
                        <div key={index}>
                            <h4 className='text-blue-500'>{s}</h4>
                        </div>

                    ))}</div>
                <div className='py-2'>
                    <p className='text-sm'>{data?.desc}</p>
                </div>
                <div className='text-end p-4'>
                    <Link href={sanitizedLink} target="_blank" className='font-bold'>See Project</Link>
                </div>
            </div>
        </div>
    )
}

