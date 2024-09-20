'use client'
import React from 'react'
import { motion } from 'framer-motion'

const selectOffer = ({ Options, handleOptionClick }) => {
    return (
        <div className="flex flex-row items-center bg-black h-[100vh]">
            <motion.div
                whileHover={{ scale: 1.1, translateY: -40 }}
                style={{ translateX: 50 }}
                onPointerDown={() => handleOptionClick(Options[0])}
                className="flex w-1/3 h-[80%] bg-dieta bg-cover items-center justify-center translate-x-20 z-40 rounded-[7%]  border-white border-2 transition duration-300 ease-in-out  hover:shadow-xl shadow-gray-200 "
            >
                <h2 className="text-white text-4xl font-extrabold text-center pointer-events-none">
                    Dieta
                </h2>
            </motion.div>
            <motion.div
                onPointerDown={() => handleOptionClick(Options[1])}
                whileHover={{ scale: 1.1, translateY: -40 }}
                className="flex w-1/3 h-[80%] bg-TakingWeight bg-cover items-center justify-center z-30  border-white  transition duration-1000 ease-in-out  border-2 -translate-y-2 rounded-[7%] hover:z-50"
            >
                <h2 className="text-white text-4xl font-extrabold text-center pointer-events-none">
                    Trenning
                </h2>
            </motion.div>
            <motion.div
                onPointerDown={() => handleOptionClick(Options[2])}
                whileHover={{ scale: 1.1, translateY: -40 }}
                style={{ translateX: -50 }}
                className="flex w-1/3 h-[80%] bg-bench bg-cover items-center justify-center z-20 -translate-y-4 -translate-x-20 transition duration-1000 ease-in-out  border-white border-2 rounded-[7%] hover:z-50"
            >
                <h2 className="text-white text-4xl font-extrabold text-center pointer-events-none">
                    Dieta/trenning
                </h2>
            </motion.div>
        </div>
    )
}

export default selectOffer
