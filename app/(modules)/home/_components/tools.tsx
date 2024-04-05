import { ITools } from '@/app/Datas'
import { ImageComponent } from '@/app/components/images'
import React from 'react'


interface IProps {
    data: ITools;
}



export const ToolsComponent = ({ data }: IProps) => {
    return (
        <div className='w-[100px]  h-[100px] cardShadow rounded-md p-4 '>
            <div className='flex justify-center m-0 items-center'>
                <ImageComponent src={data?.img} alt={data?.title} width={40} height={40} />
            </div>
            <h4 className='text-md py-2 text-center'>{data?.title}</h4>
        </div>
    )
};
