import { ImageComponent } from '@/app/components/images'
import React from 'react'

import RactIcon from "../../../../public/React-icon.svg.png"






const ToolsComponent = ({ title, img }: ITools) => {
    return (
        <div>
            <div className='w-[90px] '>
                <div className='flex justify-center m-0 items-center p-4 bg-green-400 rounded-md'>
                    <ImageComponent src={img} alt="image.png" width={50} height={50} />
                </div>
                <h4 className='text-lg py-2 text-center'>{title}</h4>
            </div>
        </div>
    )
}

export default ToolsComponent
