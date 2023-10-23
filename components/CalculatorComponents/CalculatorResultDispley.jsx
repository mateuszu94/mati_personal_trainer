"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import { BsFillPersonFill } from "react-icons/bs";
import {
  FaPersonCircleCheck,
  FaPersonCircleExclamation,
  FaPersonCircleXmark,
} from "react-icons/fa6";

const macroProcent = [
  { objective: "Przytyć", protein: 20, fat: 30, carbs: 50 },
  { objective: "Utrzymać wagę", protein: 20, fat: 30, carbs: 50 },
  { objective: "Schudnąć", protein: 20, fat: 30, carbs: 50 },
  { objective: "Zbudować masą mięśniową", protein: 30, fat: 30, carbs: 40 },
];

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
        <CalculatorIdealWeight range={weightRange} />
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

const CalculatorCal = ({
  gender,
  weight,
  age,
  height,
  cpm,
  ppm,
  objective,
  cpmObjective,
}) => {
  const macro = macroProcent.filter((macro) => objective === macro.objective);

  console.log(macro);

  return (
    <div className="w-full h-full flex flex-col justify-center  items-end">
      <motion.div className="w-[90%]  shadow-md z-10   h-1/2 flex flex-col relative   bg-slate-300 rounded-t-2xl">
        <div className="text-center text-3xl font-serif text-accentColor rounded-t-xl bg-prime font-semibold border-b-2 p-2 ">
          Zapotrzebowanie kaloryczne :
        </div>
        <div className="w-[40%] h-[50%] absolute right-5 top-[20%] shadow-md shadow-black bg-white rounded-xl">
          {objective === "Utrzymać wagę" ? (
            <div className="text-center text-accentColor h-[30%] bg-prime rounded-t-xl text-xl font-serif ">
              <p>Ilość cal aby</p>
              <p>{objective} :</p>
            </div>
          ) : null}
          {objective !== "Utrzymać wagę" ? (
            <div className="text-center text-accentColor h-[30%] bg-prime rounded-t-xl text-xl font-serif  ">
              <p>Przedział cal aby</p>
              <p> {objective} :</p>
            </div>
          ) : null}
          <div className="text-3xl font-bold grid grid-flow-col items-center text-center  h-[80%]">
            {cpmObjective.map((objective, index) => (
              <div
                key={index}
                className="flex h-full justify-center items-center font-sans w-full"
              >
                <CountUp start={0} end={objective} duration={3}></CountUp> Cal
              </div>
            ))}
          </div>
        </div>
        <div className="absolute w-full bottom-0 flex flex-col rounded-t-xl">
          <div className="text-center bg-prime font-serif text-xl font-bold rounded-t-xl text-accentColor">
            Macroskładniki :
          </div>
          <div className="grid grid-flow-col bg-white ">
            <div className="border-accentColor border flex flex-col justify-center text-center items-center font-bold ">
              Białko : {macro[0].protein} %{" "}
              {cpmObjective.map((objective, index) => (
                <div
                  className=" border-y border-accentColor h-full w-full"
                  key={index + 10}
                >
                  {(objective * (macro[0].protein / 100)).toFixed(0)} cal
                </div>
              ))}
            </div>
            <div className="border-accentColor border flex flex-col justify-center text-center items-center font-bold">
              Wenglowodany {macro[0].carbs} %{" "}
              {cpmObjective.map((objective, index) => (
                <div
                  className=" border-y border-accentColor h-full w-full"
                  key={index + 20}
                >
                  {(objective * (macro[0].carbs / 100)).toFixed(0)} cal
                </div>
              ))}
            </div>
            <div className="border-accentColor border flex flex-col justify-center text-center items-center font-bold">
              Tłuszcze {macro[0].fat} %{" "}
              {cpmObjective.map((objective, index) => (
                <div
                  className=" border-y border-accentColor h-full w-full"
                  key={index + 30}
                >
                  {(objective * (macro[0].fat / 100)).toFixed(0)} cal
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col  items-center p-2 mt-[10%] justify-start  ">
          <div className=" text-2xl font-serif font-bold p-2 ">PPM:</div>
          <motion.div
            className=" w-24 h-24 border-[2px]  border-prime shadow-md shadow-neutral-950 flexCenter rounded-full text-xl text-accentColor font-bold"
            animate={{
              backgroundColor: "#FFFFFF",
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
              delay: 3,
            }}
          >
            <CountUp start={0} end={ppm} duration={3}></CountUp>
            <p>Cal</p>
          </motion.div>

          <div className=" text-2xl font-serif font-bold p-2 ">CPM:</div>
          <motion.div
            className=" w-24 h-24 border-[2px] border-prime shadow-md  shadow-neutral-950 flexCenter rounded-full text-xl text-accentColor font-bold"
            animate={{
              backgroundColor: "#FFFFFF",
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
              delay: 3,
            }}
          >
            {" "}
            <CountUp start={0} end={cpm} duration={3}></CountUp>
            <p>Cal</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="w-[90%] right-0 h-[10%] font-serif grid grid-flow-col  shadow-md bg-slate-300 rounded-bl-xl rounded-br-xl"
        animate={{
          opacity: [0, 1],
          height: ["0%", "10%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <div className="h-full text-xl border rounded-bl-xl shadow-md border-accentColor flex items-center justify-center">
          <BsFillPersonFill />
        </div>
        <div className="h-full  text-xl border shadow-md border-accentColor flex items-center justify-center">
          Wiek : {age} lat
        </div>
        <div className="h-full border  text-xl shadow-md border-accentColor flex items-center justify-center">
          Wzrost : {height} cm
        </div>
        <div className="h-full border  text-xl shadow-md border-accentColor flex  items-center justify-center">
          Płec : {gender}
        </div>
        <div className="h-full border  text-xl rounded-br-xl shadow-md border-accentColor flex items-center justify-center">
          Waga : {weight} kg
        </div>
      </motion.div>
    </div>
  );
};

const CalculatorBMI = ({ gender, weight, age, height, bmi, bmiResoults }) => {
  const variants = {
    red: { backgroundColor: "#b30000" },
    green: { backgroundColor: "#00b32d" },
    yellow: { backgroundColor: "#f1df43" },
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-end">
      <motion.div
        className="w-[90%]  shadow-md z-10  right-0 h-1/3 flex flex-row items-center justify-center  bg-slate-300 rounded-t-2xl"
        animate={
          bmiResoults === "wygłodzenie" ||
          bmiResoults === "wychudzenie" ||
          bmiResoults === "Otyłość I" ||
          bmiResoults === "Otyłość II" ||
          bmiResoults === "Otyłość III"
            ? "red"
            : bmiResoults === "Pożądana masa ciała"
            ? "green"
            : "yellow"
        }
        variants={variants}
        transition={{
          duration: 1,
          ease: "easeIn",
          delay: 3,
        }}
      >
        <div className=" text-6xl font-serif font-bold  ">BMI:</div>
        <div className=" mx-10 border shadow-md border-white b w-40 h-40 rounded-full flex items-center justify-center">
          <div className=" w-32 h-32 border border-white shadow-md  flexCenter rounded-full">
            <motion.div
              className=" w-24 h-24 border-[2px] border-white shadow-md  flexCenter rounded-full text-2xl text-accentColor font-bold"
              animate={{
                backgroundColor: "#FFFFFF",
              }}
              transition={{
                duration: 1,
                ease: "easeIn",
                delay: 3,
              }}
            >
              {" "}
              <CountUp start={0} end={bmi} duration={3} decimals={2}></CountUp>
            </motion.div>
          </div>
        </div>{" "}
        <motion.div
          className="text-2xl  grid grid-flow-col gap-4  opacity-0 font-serif font-bold"
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
            delay: 3,
          }}
        >
          {bmiResoults}
          {bmiResoults === "Pożądana masa ciała" ? (
            <FaPersonCircleCheck />
          ) : null}
          {bmiResoults === "Nadwaga" || bmiResoults === "Niedowaga" ? (
            <FaPersonCircleExclamation />
          ) : null}
          {bmiResoults !== "Nadwaga" &&
          bmiResoults !== "Niedowaga" &&
          bmiResoults !== "Pożądana masa ciała" ? (
            <FaPersonCircleXmark />
          ) : null}
        </motion.div>
      </motion.div>
      <motion.div
        className="w-[90%] right-0 h-[10%] font-serif grid grid-flow-col  shadow-md bg-slate-300 rounded-bl-xl rounded-br-xl"
        animate={{
          opacity: [0, 1],
          height: ["0%", "10%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <div className="h-full text-xl border rounded-bl-xl shadow-md border-accentColor flex items-center justify-center">
          <BsFillPersonFill />
        </div>
        <div className="h-full  text-xl border shadow-md border-accentColor flex items-center justify-center">
          Wiek : {age} lat
        </div>
        <div className="h-full border  text-xl shadow-md border-accentColor flex items-center justify-center">
          Wzrost : {height} cm
        </div>
        <div className="h-full border  text-xl shadow-md border-accentColor flex  items-center justify-center">
          Płec : {gender}
        </div>
        <div className="h-full border  text-xl rounded-br-xl shadow-md border-accentColor flex items-center justify-center">
          Waga : {weight} kg
        </div>
      </motion.div>
    </div>
  );
};

const CalculatorIdealWeight = ({ range }) => {
  const ramgeArr = range.split(",");
  const firstNumber = parseInt(ramgeArr[0]);
  const secondNumber = parseInt(ramgeArr[1]);
  return (
    <motion.div
      className="h-1/2 w-full bg-baseColor opacity-0 relative  flex-col justify-center rounded-r-full shadow-2xl border border-accentColor "
      animate={{
        translateX: ["-30vh", "0vh"],
        opacity: [0, 1],
      }}
      transition={{
        duration: 2,
        ease: "easeIn",
      }}
    >
      <div className="text-4xl mt-8 h-1/4 font-semibold  p-5 font-serif">
        Twoja idealna waga mieści sie w zakresie:
      </div>
      <div className="absolute top-1/2 translate-y-[-50%] bg-prime w-full shadow-2xl   h-1/3 rounded-r-full">
        <div className="top-1/2 translate-y-[-50%] absolute left-[25%] h-32 w-32 bg-white border-2 border-accentColor rounded-full flex  justify-center items-center">
          <div className=" w-20 h-20 border-x-2 flex  border-black rounded-full top-1/2  justify-center items-center text-2xl text-accentColor font-bold">
            {" "}
            <CountUp
              start={0}
              end={firstNumber}
              duration={4}
              delay={2}
            ></CountUp>
            <p>KG</p>
          </div>
        </div>
        <div className="text-white font-bold text-9xl font-sans   absolute left-[50%] top-1/2 translate-y-[-50%] translate-x-[-50%]    ">
          <TfiArrowsHorizontal></TfiArrowsHorizontal>
        </div>
        <div className="top-1/2 shadow-md shadow-slate-500 translate-y-[-50%] absolute right-[25%] border-2 border-accentColor h-32 w-32 bg-white rounded-full flex  justify-center items-center">
          <div className=" w-20 h-20 border-x-2 flex  border-black rounded-full top-1/2  justify-center items-center text-2xl text-accentColor font-bold">
            {" "}
            <CountUp
              start={0}
              end={secondNumber}
              duration={4}
              delay={2}
            ></CountUp>
            <p>KG</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default CalculatorResultDispley;
