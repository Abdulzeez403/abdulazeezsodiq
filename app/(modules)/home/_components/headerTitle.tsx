import React from 'react'

interface HeaderProps {
    icon: any,
    title?: string,
    subTitle?: string
}

export const HeaderTitle = ({ icon, title, subTitle }: HeaderProps) => {
    return (
        <div className=''>
            <div className='flex gap-4'>

                {icon}
                <h4 className='text-lg font-semibold'>{title}</h4>
            </div>

            <div className='py-4'>
                <h5 className='text-[25px] text-semibold'>{subTitle}</h5>
            </div>
        </div>

    )
}

