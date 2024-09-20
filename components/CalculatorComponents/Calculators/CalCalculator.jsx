'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import AnimateLetters from '@/lib/animateLetters'
import { SelectObjective } from './components/SelectObjective'
import { SelectActivity } from './components/SelectActivity'
import { SelectGender } from './components/SelectGender'
import { SelectAge } from './components/SelectAge'
import { SelectHeight } from './components/SelectHeight'
import { SelectWeigth } from './components/SelectWeigth'

const physicalActivityArray = [
    { name: 'Siedzący tryb życia', multiplier: 1.4 },
    { name: 'Umiarkowana aktywność', multiplier: 1.6 },
    { name: 'Aktywny tryb życia', multiplier: 1.75 },
    { name: 'Bardzo aktywny tryb życia', multiplier: 2 },
    { name: 'Wyczynowo/profesjonalnie uprawiany sport', multiplier: 2.2 },
]
let Cpm = []
let Ppm = []
const CalCalculator = ({ SelectedType, useRouter }) => {
    const [gender, setGender] = useState('')
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [physicalActivity, setphysicalActivity] = useState('')
    const [objective, setObjective] = useState('')

    const lettersArray = SelectedType.split('')
    const router = useRouter()

    const getCal = () => {
        if (gender === 'Mężczyzna') {
            const ppmValue = [
                (66.5 + 13.75 * weight + 5.003 * height - 6.775 * age).toFixed(
                    0
                ),
                10 * weight + 6.25 * height + 5 * age + 5,
            ]
            Ppm = ppmValue
        } else {
            const ppmValue = [
                (655.1 + 9.563 * weight + 1.85 * height - 4.676 * age).toFixed(
                    0
                ),
                10 * weight + 6.25 * height + 5 * age - 161,
            ]
            Ppm = ppmValue
        }
    }
    const getCpm = () => {
        const matchedItem = physicalActivityArray.find(
            (item) => item.name === physicalActivity
        )
        if (matchedItem) {
            Cpm = [
                matchedItem.multiplier * Ppm[0],
                matchedItem.multiplier * Ppm[1],
            ]
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getCal()
        getCpm()
        pushRoute()
    }

    const pushRoute = () => {
        router.push(
            `/Kalkulator_Wynik?typ=${SelectedType}&&płeć=${gender}&&waga=${weight}&&wiek=${age}&&wzrost=${height}&&Cpm=${Cpm}&&Ppm=${Ppm}&&Cel=${objective}`
        )
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
                    <SelectAge setAge={setAge} age={age} />
                    <SelectHeight setHeight={setHeight} height={height} />
                </div>
                <SelectWeigth weight={weight} setWeight={setWeight} />
                <SelectActivity
                    setphysicalActivity={setphysicalActivity}
                    physicalActivity={physicalActivity}
                    physicalActivityArray={physicalActivityArray}
                />
                <SelectObjective
                    setObjective={setObjective}
                    objective={objective}
                />

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

export default CalCalculator
