import Calculator from '@/components/CalculatorComponents/Calculators'
import CalculatorDescription from '@/components/CalculatorComponents/CalculatorDescription'
import CalcualtorsAddBanner from '@/components/CalculatorComponents/CalcualtorsAddBanner'

import React from 'react'

const page = () => {
    return (
        <div>
            <div className="w-full h-[85vh] max-md:h-[140vh] flex flex-row max-md:flex-col gap-0 items-center justify-center grainy ">
                <div className="w-1/2 flex   max-md:w-full  ">
                    {' '}
                    <Calculator />
                </div>
                <div className="w-1/2 max-md:w-full  flex max-md:justify-center justify-start items-center  ">
                    <CalculatorDescription />
                </div>{' '}
            </div>
            <CalcualtorsAddBanner />
        </div>
    )
}

export default page
