"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { CalculatorBMI } from "./Calculators/components/BmiResults";
import { CalculatorCal } from "./Calculators/components/CalResults";
import { CalculatorIdealWeight } from "./Calculators/components/IdealWeightResults";

const CalculatorResultDispley = () => {
  const serchParams = useSearchParams();
  const selectedType = serchParams.get("typ");
  const gender = serchParams.get("płeć");
  const weightRange = serchParams.get("przedziałWagi");
  const weight = serchParams.get("waga");
  const age = serchParams.get("wiek");
  const height = serchParams.get("wzrost");
  const bmi = serchParams.get("bmi");
  const objective = serchParams.get("Cel");
  const bmiResoults = serchParams.get("wynikBMI");
  const cpm = serchParams.get("Cpm");
  const ppm = serchParams.get("Ppm");

  let cpmAverage = 0;
  let ppmAverage = 0;

  let cpmObjective = [];
  console.log(cpm);

  const setAverage = () => {
    const lengthCpm = cpm.split(",").length;
    const lengthPpm = ppm.split(",").length;
    cpmAverage =
      cpm
        .split(",")
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
      lengthCpm;
    ppmAverage =
      ppm
        .split(",")
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
      lengthPpm;
    console.log(cpmAverage);
    console.log(ppmAverage);
  };

  const getcpmObjective = () => {
    if (objective === "Przytyć") {
      cpmObjective = [cpmAverage + 250, cpmAverage + 500];
    }
    if (objective === "Utrzymać wagę") {
      cpmObjective = [cpmAverage];
    }
    if (objective === "Schudnąć") {
      cpmObjective = [cpmAverage - 1000, cpmAverage - 500];
    }
    if (objective === "Zbudować masą mięśniową") {
      cpmObjective = [cpmAverage + 250, cpmAverage + 500];
    }
  };
  if (cpm !== null) {
    setAverage();
    getcpmObjective();
  }

  return (
    <div className={`w-1/2 h-full flex flex-col justify-center `}>
      {selectedType === "Kalkulator Wagi Idealnej" ? (
        <CalculatorIdealWeight
          range={weightRange}
          age={age}
          height={height}
          gender={gender}
        />
      ) : null}

      {selectedType === "Kalkulator Bmi" ? (
        <CalculatorBMI
          gender={gender}
          weight={weight}
          age={age}
          height={height}
          bmi={bmi}
          bmiResoults={bmiResoults}
        />
      ) : null}
      {selectedType === "Kalkulator Kalorii" ? (
        <CalculatorCal
          gender={gender}
          weight={weight}
          age={age}
          height={height}
          cpm={cpmAverage}
          cpmObjective={cpmObjective}
          ppm={ppmAverage}
          objective={objective}
        />
      ) : null}
    </div>
  );
};

export default CalculatorResultDispley;
