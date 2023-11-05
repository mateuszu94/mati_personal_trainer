"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import AnimateLetters from "@/lib/animateLetters";
import { pickSmalestandLargest } from "@/lib/pickSmallestAndLargest";
import { SelectGender } from "./components/SelectGender";
import { SelectAge } from "./components/SelectAge";
import { SelectHeight } from "./components/SelectHeight";

const IdealWeightCalculator = ({ SelectedType, useRouter }) => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [idealWeights, setIdealWeights] = useState([]);
  const lettersArray = SelectedType.split("");
  let weightRange = [];
  const router = useRouter();

  useEffect(() => {
    if (idealWeights.length === 0) {
      return;
    }
    getRangeOfWeight();
  }, [idealWeights]);
  const getRangeOfWeight = () => {
    const weightsNumbers = idealWeights.map((item) => item.weight);
    weightRange = pickSmalestandLargest(weightsNumbers);
    pushRoute();
  };
  const pushRoute = () => {
    router.push(
      `/Kalkulator_Wynik?typ=${SelectedType}&&płeć=${gender}&&przedziałWagi=${weightRange}&&wzrost=${height}&&wiek=${age} `
    );
  };

  const getIdealWeight = () => {
    let brockWeight = 0;
    let pottonWeight = 0;
    let lorentzaWeight = 0;
    let robinsonWeight = 0;
    if (gender == "Mężczyzna") {
      brockWeight = (height - 100) * 0.9;
      pottonWeight = height - 100 - (height - 100) / 20;
      lorentzaWeight = height - 100 - 0.25 * (height - 150);
      robinsonWeight = 54 + 0.75 * (height - 155);
    } else {
      brockWeight = (height - 100) * 0.85;
      pottonWeight = height - 100 - (height - 100) / 10;
      lorentzaWeight = height - 100 - 0.5 * (height - 150);
      robinsonWeight = 49 + 0.69 * (height - 155);
    }
    setIdealWeights([
      { name: "Wzór Broca", weight: brockWeight.toFixed(1) },
      { name: "Wzór Pottona", weight: pottonWeight.toFixed(1) },
      { name: "Wzór Lorentza", weight: lorentzaWeight.toFixed(1) },
      { name: "Wzór Robinsona", weight: robinsonWeight.toFixed(1) },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getIdealWeight();
  };

  return (
    <div className="calculator   bg-white ">
      {" "}
      <div className="flex justify-center items-center">
        <AnimateLetters
          letterClass="calculator-title "
          strArray={lettersArray}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <SelectGender setGender={setGender} gender={gender} />
        <div className="flexRow">
          <SelectAge age={age} setAge={setAge} />

          <SelectHeight height={height} setHeight={setHeight} />
        </div>
        <div className=" flexCenter flex-col ">
          <Button
            disabled={gender == "" || height == 0 || age == 0}
            type="submit"
            className="font-bold  rounded-full bg-prime hover:bg-green-600   text-white  w-1/2  my-4"
          >
            {" "}
            Oblicz Idealną wagę
          </Button>
        </div>
      </form>
    </div>
  );
};

export default IdealWeightCalculator;
