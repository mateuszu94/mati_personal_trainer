'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import testOffer from '@/public/data/testOffer.json'
import { motion } from 'framer-motion'

import React, { useState, useEffect, useRef } from 'react'

import { set } from 'zod'
import SelectOffer from '@/components/Offer/selectOffer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Options = ['Dieta', 'Trenning', 'Trenning dieta']
const times = ['1', '3', '6', '12']
const numberOfPeopleOptions = ['Dziecko', 'Indywidualnie', 'W parze']

const MyOffer = () => {
    const [option, setOption] = useState(testOffer)
    const isInitialRender = useRef(true)
    const [isOpen, setIsOpen] = useState(false)
    const [time, setTime] = useState('')
    const [numberOfPeople, setnumberOfPeople] = useState('Indywidualnie')
    const router = useRouter()
    const searchParams = useSearchParams()
    const optionParam = searchParams.get('Option')
    const handleOptionClick = (newOption) => {
        setOption(newOption)
        router.push(`?Option=${newOption}`, undefined)
    }
    console.log(isOpen)
    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    }
    return (
        <div className="">
            {optionParam == '' ? (
                <SelectOffer
                    handleOptionClick={handleOptionClick}
                    Options={Options}
                />
            ) : (
                <div className="flex flex-col  items-center gap-14 bg-black  h-[180vh]">
                    <motion.div
                        animate={isOpen ? { width: '85%', height: '60vh' } : ''}
                        className="w-3/4 h-[40vh] grainy flex justify-center items-center  mt-20"
                    >
                        <div className="rounded-l-xl bg-dieta w-full h-[95%] relative m-5 flex justify-end">
                            <motion.div
                                animate={isOpen ? { width: '100%' } : ''}
                                className="bg-black w-1/2  h-full border-black border-t-32 border-r-32"
                            >
                                <div>
                                    <motion.div
                                        animate={isOpen ? { opacity: 0 } : ''}
                                        class=" absolute right-1/2  h-0 w-0 border-t-[175px] border-r-[150px] border-b-[175px] border-solid border-t-transparent border-b-transparent border-r-black"
                                    />
                                    <h2 className="text-6xl text-white p-2 text-center font-extrabold">
                                        Dieta Individalna
                                    </h2>
                                    <p className="text-gray-400 font-serif text-center">
                                        Spersonalizowana dieta, stworzona z
                                        myślą o Twoich unikalnych potrzebach!
                                    </p>
                                    <p className="text-gray-400 font-serif text-center">
                                        Zapomnij o głodówkach — łatwa, skuteczna
                                        i smaczna dieta, która przyniesie Ci
                                        trwałe efekty.
                                    </p>
                                    {!isOpen && (
                                        <div>
                                            <Link href={'/Kontakt'}>
                                                <div className="bg-prime w-1/6 h-[25%] rounded-r-full absolute border-b-2 border-accentColor z-40 bottom-10 left-1/2 cursor-pointer -translate-x-[35px]">
                                                    <p className="text-white text-xl font-serif">
                                                        {' '}
                                                        Ty wybierasz cel,
                                                    </p>
                                                    <p className="text-white text-xl font-serif">
                                                        {' '}
                                                        ja pomoge ci go osiagnąć{' '}
                                                    </p>
                                                    <p className="text-lg text-gray-200 text-right pr-8">
                                                        dowiedz sie wiecej!{' '}
                                                    </p>
                                                </div>
                                            </Link>{' '}
                                            <div className="w-[150px] absolute h-[25%] bottom-10 border-b-2 border-accentColor -translate-x-[74px] bg-prime z-30 skew-x-[38deg]"></div>
                                        </div>
                                    )}
                                    {!isOpen && (
                                        <div
                                            animate={
                                                isOpen ? { opacity: 0 } : ''
                                            }
                                            className="absolute right-5 bottom-5 gap-2 flex flex-col justify-center items-end h-1/2"
                                        >
                                            <p className="text-white text-5xl text-right pr-8">
                                                Już od :{' '}
                                            </p>
                                            <p className="text-6xl font-serif text-orange-300 ">
                                                {' '}
                                                {option[0].price} zł
                                            </p>
                                            <Button
                                                onClick={() => setIsOpen(true)}
                                                className="bg-prime rounded-xl cursor-pointer"
                                            >
                                                <p className="text-accentColor  text-xl p-3">
                                                    Zacznij już dziś !
                                                </p>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="w-3/4 h-[40vh] grainy flex justify-center items-center  mt-20">
                        <div className="rounded-l-xl bg-dieta w-full h-[95%] relative m-5 flex justify-end">
                            <div className="bg-black w-1/2  h-full border-black border-t-32 border-r-32">
                                <h2 className="text-6xl text-white p-2 text-center font-extrabold">
                                    Dieta grupowa
                                </h2>
                                <p className="text-gray-400 font-serif text-center">
                                    W grupie zawsze raźniej i taniej!
                                </p>
                                <p className="text-gray-400 font-serif text-center">
                                    Skuteczna dieta dla Ciebie i Twoich
                                    bliskich, wspólna motywacja i lepsze
                                    rezultaty!
                                </p>

                                <div className="bg-prime w-1/6 h-[25%] rounded-r-full absolute border-b-2 border-accentColor z-40 bottom-10 left-1/2 -translate-x-[35px]">
                                    <p className="text-white text-xl font-serif">
                                        {' '}
                                        Ty wybierasz cel,
                                    </p>
                                    <p className="text-white text-xl font-serif">
                                        {' '}
                                        ja pomoge ci go osiagnąć
                                    </p>
                                </div>
                                <div className="w-[150px] absolute h-[25%] bottom-10 border-b-2 border-accentColor -translate-x-[74px] bg-prime z-30 skew-x-[38deg]"></div>

                                <div className="absolute right-5 bottom-5 gap-2 flex flex-col justify-center items-end h-1/2">
                                    <p className="text-white text-5xl text-right pr-8">
                                        Już od :{' '}
                                    </p>
                                    <p className="text-6xl font-serif text-orange-300 ">
                                        {' '}
                                        {option[1].price} zł
                                    </p>
                                </div>
                            </div>
                            <div class=" absolute right-1/2  h-0 w-0 border-t-[175px] border-r-[150px] border-b-[175px] border-solid border-t-transparent border-b-transparent border-r-black" />
                        </div>
                    </div>
                    <div className="w-3/4 h-[40vh] grainy flex justify-center items-center  mt-20">
                        <div className="rounded-l-xl bg-dieta w-full h-[95%] relative m-5 flex justify-end">
                            <div className="bg-black w-1/2  h-full border-black border-t-32 border-r-32">
                                <h2 className="text-6xl text-white p-2 text-center font-extrabold">
                                    Dieta dla dziecka
                                </h2>
                                <p className="text-gray-400 font-serif text-center">
                                    Zdrowa i zbilansowana dieta, dopasowana do
                                    potrzeb Twojego dziecka.
                                </p>
                                <p className="text-gray-400 font-serif text-center">
                                    Smaczne posiłki, które Twoje dziecko
                                    pokocha, i pełne składników odżywczych dla
                                    zdrowego rozwoju.
                                </p>
                                <div className="bg-prime w-1/6 h-[25%] rounded-r-full absolute border-b-2 border-accentColor z-40 bottom-10 left-1/2 -translate-x-[35px]">
                                    <p className="text-white text-xl font-serif">
                                        {' '}
                                        Ty wybierasz cel,
                                    </p>
                                    <p className="text-white text-xl font-serif">
                                        {' '}
                                        ja pomoge ci go osiagnąć
                                    </p>
                                </div>
                                <div className="w-[150px] absolute h-[25%] bottom-10 border-b-2 border-accentColor -translate-x-[74px] bg-prime z-30 skew-x-[38deg]"></div>

                                <div className="absolute right-5 bottom-5 gap-2 flex flex-col justify-center items-end h-1/2">
                                    <p className="text-white text-5xl text-right pr-8">
                                        Już od :{' '}
                                    </p>
                                    <p className="text-6xl font-serif text-orange-300 ">
                                        {' '}
                                        {option[2].price} zł
                                    </p>
                                </div>
                            </div>
                            <div class=" absolute right-1/2  h-0 w-0 border-t-[175px] border-r-[150px] border-b-[175px] border-solid border-t-transparent border-b-transparent border-r-black" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyOffer
