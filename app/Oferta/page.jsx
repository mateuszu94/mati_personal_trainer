"use client"

import OfferPriceSetter from "@/components/Offer/offerPriceSetter"
import OfferPriceShowcase from "@/components/Offer/offerPriceShowcase"
import OfferShowcase from "@/components/Offer/offerShowcase"
import { useRouter, useSearchParams } from "next/navigation"

import React, { useState, useEffect, useRef } from "react"
const Options = ["Dieta", "Trenning", "Trenning dieta"]
const times = ["1", "3", "6", "12"]
const numberOfPeopleOptions = ["Dziecko", "Indywidualnie", "W parze"]

const MyOffer = () => {
    const [option, setOption] = useState("")
    const isInitialRender = useRef(true)
    const [time, setTime] = useState("")
    const [numberOfPeople, setnumberOfPeople] = useState("Indywidualnie")

    const SetOptionOnDrag = (StringOption) => {
        setOption(StringOption)
        if (StringOption === option) {
            setOption("")
        }
    }

    const router = useRouter()
    const searchParams = useSearchParams()
    const optionParam = searchParams.get("Option")
    const timeParam = searchParams.get("time")
    const forPeople = searchParams.get("dla")

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false
            if (Options.includes(optionParam)) {
                setOption(optionParam)
            }
            if (times.includes(timeParam)) {
                setTime(timeParam)

                if (numberOfPeopleOptions.includes(forPeople)) {
                    setnumberOfPeople(forPeople)
                }
                return
            }

            router.push(
                `/Oferta?Option=${option}&&time=${time}&&dla=${numberOfPeople}`
            )
            console.log(option)
            console.log(time)
            console.log(numberOfPeople)
        }
    }, [option, time, numberOfPeople])

    return (
        <div>
          
        </div>
    )
};

export default MyOffer
