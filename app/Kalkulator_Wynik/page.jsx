import React from "react"

import CalculatorResultDispley from "@/components/CalculatorComponents/CalculatorResultDispley"
import CalcualtorsAddBanner from "@/components/CalculatorComponents/CalcualtorsAddBanner"

const page = () => {
    return (
        <div className="h-[95vh] w-full grainy flex flex-col">
            <div className="w-full h-full flex flex-row">
                <CalculatorResultDispley />
            </div>
            <CalcualtorsAddBanner />
        </div>
    )
}

export default page
