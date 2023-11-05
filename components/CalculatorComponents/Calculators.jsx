"use client";
import { useSearchParams } from "next/navigation";
import IdealWeightCalculator from "./Calculators/IdealWeightCalculator";
import BmiCalculator from "./Calculators/BmiCalculator";
import CalCalculator from "./Calculators/CalCalculator";
import { useRouter } from "next/navigation";

const Calculator = () => {
  const serchParams = useSearchParams();
  const selectedType = serchParams.get("typ");

  return (
    <div className="w-full h-[100%] flex textShadow text-white justify-end items-center">
      {selectedType === "Kalkulator Wagi Idealnej" ? (
        <IdealWeightCalculator
          SelectedType={selectedType}
          useRouter={useRouter}
        />
      ) : null}
      {selectedType === "Kalkulator Bmi" ? (
        <BmiCalculator SelectedType={selectedType} useRouter={useRouter} />
      ) : null}
      {selectedType === "Kalkulator Kalorii" ? (
        <CalCalculator SelectedType={selectedType} useRouter={useRouter} />
      ) : null}
    </div>
  );
};

export default Calculator;
