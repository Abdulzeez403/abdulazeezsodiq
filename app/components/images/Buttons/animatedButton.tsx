import { motion } from 'framer-motion';
import React from 'react'

interface IProps {
    label: string
}

const AnimatedButton = ({ label }: IProps) => {
    const button = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        pressed: { scale: 0.95 }
    };
    return (
        <motion.div
            className="refresh"
            // onClick={onclick}
            variants={button}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
        >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm">
                {label}
            </button>

        </motion.div>
    )
}

export default AnimatedButton
