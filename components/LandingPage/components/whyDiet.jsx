'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const WhyDiet = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
    return (
        <div className=" relative bg-black h-[200vh]">
            <motion.div
                ref={targetRef}
                className="  h-[150vh] absolute left-0 top-0 bg-red-50 w-full "
            >
                <img
                    className="sticky top-0 h-screen  object-cover"
                    src="/Bg_MyServicesDiet.jpg"
                />
            </motion.div>
            <div className="relative z-10  flex flex-col justify-end min-h-[100svh] ">
                <h1 className="text-white  textShadow font-sans text-5xl z-50 font-extrabold">
                    Dieta
                </h1>
            </div>
        </div>
    )
}
