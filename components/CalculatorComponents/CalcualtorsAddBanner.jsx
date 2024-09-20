import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CalcualtorsAddBanner = () => {
    return (
        <div className="bg-prime h-[10vh] 2xl:h-[20vh] flex justify-center items-center">
            <div className="titleSize flex flex-col   w-1/2 justify-center items-center">
                <p className="text-white text-center font-serif textShadow">
                    Profesionalna opieka!
                </p>
                <p className="text-accentColor font-bold textShadow">
                    Trening i Dieta
                </p>
            </div>
            <Button
                asChild
                className="bg-accentColor rounded-full ml-12  hover:bg-green-600"
            >
                <Link href="/Oferta">
                    {' '}
                    <p className="subtitleSize xl:p-12  sm:p-6 max-sm:p-6">
                        {' '}
                        Zaczynam Teraz
                    </p>
                </Link>
            </Button>
        </div>
    )
}

export default CalcualtorsAddBanner
