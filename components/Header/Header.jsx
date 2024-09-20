'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'

import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'

import { BigScreanHeder } from './components/bigScreanHeder'
import { Logo } from './components/logo'
import { SmallScreanHedder } from './components/smallScreanHedder'
import { motion } from 'framer-motion'
export const Header = () => {
    const [openSmallMenu, setopenSmallMenu] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= 90) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1, height: `5rem` }}
            animate={{
                opacity: isScrolling ? 0.9 : 1,
                height: isScrolling ? `3rem` : `5rem`,
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={` relative z-50 bg-black flex justify-center    h-20  ${
                isScrolling ? ' sticky  top-0' : ''
            }`}
        >
            <motion.div
                initial={{ width: `80%`, height: `5rem`, translateY: 16 }}
                animate={{
                    width: isScrolling ? `100%` : `80%`,
                    height: isScrolling ? `3rem` : `5rem`,
                    translateY: isScrolling ? 0 : 16,
                }}
                transition={{ duration: 0.3 }}
                className={`bg-prime  ${
                    isScrolling ? 'rounded-none' : 'rounded-xl'
                }   flex h-20 border-accentColor border-b-2  `}
            >
                <Logo isScrolling={isScrolling} />
                <div className="flex w-full justify-end max-lg:hidden mr-16 ">
                    <BigScreanHeder />
                </div>
                <div
                    className={`absolute duration-1000 hidden max-lg:flex h-20 w-20 right-0 justify-end items-end   ${
                        openSmallMenu
                            ? 'translate-y-[80px] opacity-0 z-0'
                            : 'z-20'
                    }`}
                >
                    <Button
                        size="lg"
                        asChild
                        variant="ghost"
                        className="mr-2 text-slate-300 hover:bg-prime bg-prime  p-4  w-full h-full hidden max-lg:flex "
                        onClick={() => setopenSmallMenu(!openSmallMenu)}
                    >
                        <AiOutlineMenu />
                    </Button>
                </div>
            </motion.div>
            <SmallScreanHedder
                setopenSmallMenu={setopenSmallMenu}
                openSmallMenu={openSmallMenu}
            />
        </motion.div>
    )
}
