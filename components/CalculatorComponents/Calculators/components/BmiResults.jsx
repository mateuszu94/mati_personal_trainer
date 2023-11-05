import { motion } from "framer-motion";
import {
  FaPersonCircleCheck,
  FaPersonCircleExclamation,
  FaPersonCircleXmark,
} from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";

import CountUp from "react-countup";

export const CalculatorBMI = ({
  gender,
  weight,
  age,
  height,
  bmi,
  bmiResoults,
}) => {
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
              className=" textShadow w-24 h-24 border-[2px] border-white shadow-md  flexCenter rounded-full text-2xl text-accentColor font-bold"
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
          className=" text-white text-4xl textShadow  grid grid-flow-col gap-4  opacity-0 font-serif font-bold"
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
          <div className="text-black">
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
          </div>
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
