'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="flex flex-row h-[90vh]   items-center  bg-hero bg-cover">
            <div className="w-1/2 h-full left-0 relative  ">
                {' '}
                <Image
                    className="absolute bottom-[10%] max-sm:bottom-[20%] left-[15%] max-lg:left-[8%]  max-xl:scale-[1.6] 2xl:scale-[1.6]  md:scale-[1.5] max-sm:scale-[2.4] "
                    width={516}
                    height={531}
                    src="/trenner.png"
                    alt="trenner"
                ></Image>
            </div>
            <div className="relative  font-sans font-extrabold text-white w-1/2 h-[20vh]">
                <motion.div
                    className=" border-solid opacity-0   flex items-lef flex-col justify-center absolute w-full h-full   "
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 20,
                        times: [0, 0.15, 0.49, 0.5],
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                    }}
                >
                    {' '}
                    <div className="flex flex-col uppercase">
                        <p className="titleSize textShadow"> Mateusz </p>
                        <p className="titleSize  textShadow pl-20  text-green-700">
                            Wątroba
                        </p>
                    </div>
                    <p className="textShadow font-serif">
                        Absolwent AWF certyfikowany trener inne rzeczy do
                        dodania potem{' '}
                    </p>
                    <Link href={'/O-mnie'}>
                        <Button className="w-16 h-10">Więcej </Button>
                    </Link>
                </motion.div>
                <motion.div
                    className="  w-full h-full opacity-0  flex flex-col items-center justify-center absolute        "
                    animate={{
                        opacity: [0, 0, 1, 1, 0],
                        scale: [0, 0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 20,
                        times: [0, 0.51, 0.6, 0.9, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                    }}
                >
                    {' '}
                    <div>
                        <p className="titleSize  uppercase opacity-90 text-gray-300 textShadow  ">
                            Treningi ,Diety konsyltacje Osobista i online
                        </p>
                    </div>
                    <Link href={'/Oferta'}>
                        <Button>Więcej </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
