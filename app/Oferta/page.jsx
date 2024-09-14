"use client"

import { useRouter, useSearchParams } from "next/navigation"
import testOffer from "@/public/data/testOffer.json"

import React, { useState, useEffect, useRef } from "react"

import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
const Options = ["Dieta", "Trenning", "Trenning dieta"]
const times = ["1", "3", "6", "12"]
const numberOfPeopleOptions = ["Dziecko", "Indywidualnie", "W parze"]

const MyOffer = () => {
    const [option, setOption] = useState(testOffer[0].name)
    const isInitialRender = useRef(true)
    const [time, setTime] = useState("")
    const [numberOfPeople, setnumberOfPeople] = useState("Indywidualnie")
    const router = useRouter()
    const searchParams = useSearchParams()
    const optionParam = searchParams.get("Option")
    const OfferClinkNext = () => {
        
    }
    const OfferClinkPrev = () => {

    }
    return (
        <div className="flex flex-row items-center bg-black h-[100vh]">
       
       
            <div className="flex w-1/3 h-[80%] bg-dieta bg-cover items-center justify-center translate-x-20 z-40 rounded-[7%] hover:z-50 border-white border-2 transition duration-300 ease-in-out  hover:shadow-xl shadow-gray-200 ">
            <h2 className="text-white text-4xl font-extrabold text-center">Dieta</h2>
            </div>
            <div className="flex w-1/3 h-[80%] bg-TakingWeight bg-cover items-center justify-center z-30  border-white  transition duration-1000 ease-in-out  border-2 -translate-y-2 rounded-[7%] hover:z-50">
            <h2 className="text-white text-4xl font-extrabold text-center">Trenning</h2>
            </div>
            <div className="flex w-1/3 h-[80%] bg-bench bg-cover items-center justify-center z-20 -translate-y-4 -translate-x-20 transition duration-1000 ease-in-out  border-white border-2 rounded-[7%] hover:z-50">
            <h2 className="text-white text-4xl font-extrabold text-center">Dieta/trenning</h2>
            </div>
       
         
          
       
        </div>
    )
};

export default MyOffer
