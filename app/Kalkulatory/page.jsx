import Calculator from "@/components/CalculatorComponents/Calculators";
import CalculatorDescription from "@/components/CalculatorComponents/CalculatorDescription";
import CalcualtorsAddBanner from "@/components/CalculatorComponents/CalcualtorsAddBanner";

import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full h-[85vh] flex flex-row grainy ">
        <div className="w-1/2 flex items-center  ">
          {" "}
          <Calculator />
        </div>
        <div className="w-1/2 h-full flex justify-start items-center  ">
          <CalculatorDescription />
        </div>{" "}
      </div>
      <CalcualtorsAddBanner />
    </div>
  );
};

export default page;
