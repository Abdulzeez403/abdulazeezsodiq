"use client"
import AnimatedButton from '@/app/components/images/Buttons/animatedButton';
import { motion } from 'framer-motion';
import React from 'react'
import { CiEdit } from "react-icons/ci";

export const ContactForm = () => {



    return (
        <div>
            <div className='flex gap-3'>
                <CiEdit />
                <h4 className='font-bold'>Write me a message!</h4>
            </div>

            <form action="" method="post">
                <input
                    type="text"
                    className="border-b-4 px-4 py-3 outline-none w-[370px]"
                    placeholder="Your Name"
                />

                <input
                    type="text"
                    className="border-b-4 px-4 py-3 outline-none w-[370px]"
                    placeholder="Your Email"
                />

                <textarea
                    // type="text"
                    className="border-b-4 px-4 py-3 outline-none w-[370px]"
                    placeholder="Message..."
                />

                <div className='flex-end'>
                    <AnimatedButton label="Send Message" />
                </div>


            </form>

        </div>
    )
}

