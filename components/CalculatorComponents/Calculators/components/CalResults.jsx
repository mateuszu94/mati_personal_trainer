import { BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";

import CountUp from "react-countup";

const macroProcent = [
  { objective: "Przytyć", protein: 20, fat: 30, carbs: 50 },
  { objective: "Utrzymać wagę", protein: 20, fat: 30, carbs: 50 },
  { objective: "Schudnąć", protein: 20, fat: 30, carbs: 50 },
  { objective: "Zbudować masą mięśniową", protein: 30, fat: 30, carbs: 40 },
];

export const CalculatorCal = ({
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

  return (
    <div className="w-full h-full flex flex-col justify-center  items-end">
      <motion.div className="w-[90%] max-sm:w-full  shadow-md z-10   h-1/2 max-sm:h-2/3 flex flex-col relative   bg-slate-300 rounded-t-2xl">
        <div className="text-center text-3xl font-serif text-accentColor textShadow rounded-t-xl bg-prime font-semibold border-b-2 p-2 ">
          Zapotrzebowanie kaloryczne :
        </div>
        <div className="w-[40%] h-[50%] max-sm:w-full max-sm:h-1/4  absolute right-5 top-[20%] max-sm:top-[55%] shadow-md shadow-black bg-white rounded-xl">
          {objective === "Utrzymać wagę" ? (
            <div className="text-center text-accentColor  bg-prime rounded-t-xl text-xl font-serif ">
              <p>Ilość cal aby</p>
              <p>{objective} :</p>
            </div>
          ) : null}
          {objective !== "Utrzymać wagę" ? (
            <div className="text-center text-accentColor textShadow  bg-prime rounded-t-xl text-xl font-serif  ">
              <p>Przedział cal aby</p>
              <p> {objective} :</p>
            </div>
          ) : null}
          <div className="text-3xl font-bold grid grid-flow-col items-center text-center  ">
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
          <div className="text-center textShadow  bg-prime font-serif text-xl font-bold rounded-t-xl text-accentColor">
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
            className=" textShadow w-24 h-24 border-[2px]  border-prime shadow-md shadow-neutral-950 flexCenter rounded-full text-xl text-accentColor font-bold"
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
            className=" w-24 h-24 border-[2px] textShadow border-prime shadow-md  shadow-neutral-950 flexCenter rounded-full text-xl text-accentColor font-bold"
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
        className="w-[90%] max-sm:w-full right-0 h-[10%] font-serif grid grid-flow-col  shadow-md bg-slate-300 rounded-bl-xl rounded-br-xl"
        animate={{
          opacity: [0, 1],
          height: ["0%", "10%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <div className="h-full subtitleSize text-center border rounded-bl-xl shadow-md border-accentColor flex items-center justify-center">
          <BsFillPersonFill />
        </div>
        <div className="h-full  subtitleSize text-center border shadow-md border-accentColor flex items-center justify-center">
          Wiek : {age} lat
        </div>
        <div className="h-full border  subtitleSize text-center shadow-md border-accentColor flex items-center justify-center">
          Wzrost : {height} cm
        </div>
        <div className="h-full border  subtitleSize text-center shadow-md border-accentColor flex  items-center justify-center">
          Płec : {gender}
        </div>
        <div className="h-full border  subtitleSize text-center rounded-br-xl shadow-md border-accentColor flex items-center justify-center">
          Waga : {weight} kg
        </div>
      </motion.div>
    </div>
  );
};
