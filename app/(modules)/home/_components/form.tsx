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
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Send Message
                    </button>
                </div>

            </form>

        </div>
    )
}

