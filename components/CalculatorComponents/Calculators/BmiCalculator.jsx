'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

import AnimateLetters from '@/lib/animateLetters'
import { SelectGender } from './components/SelectGender'
import { SelectAge } from './components/SelectAge'
import { SelectHeight } from './components/SelectHeight'
import { SelectWeigth } from './components/SelectWeigth'

const bmiArray = [
    { name: 'wygłodzenie', bmi: 16 },
    { name: 'wychudzenie', bmi: 17 },
    { name: 'Niedowaga', bmi: 18.5 },
    { name: 'Pożądana masa ciała', bmi: 24.9 },
    { name: 'Nadwaga', bmi: 29.9 },
    { name: 'Otyłość I', bmi: 34.9 },
    { name: 'Otyłość II', bmi: 39.9 },
    { name: 'Otyłość III', bmi: 40 },
]
let bmiResoults = 'sdf'
const BmiCalculator = ({ SelectedType, useRouter }) => {
    const [gender, setGender] = useState('')
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState(0)

    const lettersArray = SelectedType.split('')
    const router = useRouter()
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        checkBmi()
        pushRoute()
    }, [bmi])

    const checkBmi = () => {
        for (var i = 0; i < bmiArray.length; i++) {
            if (bmi > 40) {
                bmiResoults = bmiArray[bmiArray.length - 1].name
            }
            if (bmiArray[i].bmi >= bmi) {
                bmiResoults = bmiArray[i].name
                break
            }
        }
    }
    const pushRoute = () => {
        router.push(
            `/Kalkulator_Wynik?typ=${SelectedType}&&płeć=${gender}&&waga=${weight}&&wiek=${age}&&wzrost=${height}&&bmi=${bmi}&&wynikBMI=${bmiResoults}`
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setBmi((weight / ((height / 100) * (height / 100))).toFixed(2))
    }

    return (
        <div className="calculator   bg-white">
            {' '}
            <div className="flex justify-center items-center">
                <AnimateLetters
                    letterClass="calculator-title "
                    strArray={lettersArray}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <SelectGender gender={gender} setGender={setGender} />
                <div className="flexRow">
                    <SelectAge age={age} setAge={setAge} />
                    <SelectHeight height={height} setHeight={setHeight} />
                </div>

                <SelectWeigth setWeight={setWeight} weight={weight} />

                <div className=" flexCenter ">
                    <Button
                        disabled={
                            gender == '' ||
                            height == 0 ||
                            age == 0 ||
                            weight == 0
                        }
                        type="submit"
                        className="font-bold h-full rounded-full bg-prime hover:bg-green-600   text-white  w-1/2 my-4"
                    >
                        {' '}
                        Oblicz
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default BmiCalculator
