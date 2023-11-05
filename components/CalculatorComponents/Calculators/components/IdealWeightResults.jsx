import CountUp from "react-countup";
import { motion } from "framer-motion";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import { BsPerson } from "react-icons/bs";
export const CalculatorIdealWeight = ({ range, age, height, gender }) => {
  const ramgeArr = range.split(",");
  const firstNumber = parseInt(ramgeArr[0]);
  const secondNumber = parseInt(ramgeArr[1]);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <motion.div
        className=" w-4/5 bg-baseColor opacity-0   flex-col justify-center rounded-2xl shadow-2xl border border-accentColor "
        animate={{
          translateX: ["-30vh", "0vh"],
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeIn",
        }}
      >
        <div className="titleSize mt-8  font-semibold  text-center text-accentColor textShadow   font-serif">
          Twoja idealna waga mieści sie w zakresie:
        </div>
        <div className=" relative flex flex-row gap-10 justify-center  w-full     ">
          <div className="  h-32 w-32 bg-white border-2 border-accentColor rounded-full flex  justify-center items-center">
            <div className=" w-20 h-20 border-x-2 flex  border-black rounded-full top-1/2  justify-center items-center subtitleSize textShadow text-accentColor font-bold">
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
          <div className="text-white font-bold text-9xl font-sans      ">
            <TfiArrowsHorizontal></TfiArrowsHorizontal>
          </div>
          <div className="top-1/2 shadow-md shadow-slate-500 border-2 border-accentColor h-32 w-32 bg-white rounded-full flex  justify-center items-center">
            <div className=" w-20 h-20 border-x-2 flex  border-black rounded-full top-1/2  justify-center items-center subtitleSize textShadow text-accentColor font-bold">
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
        <motion.div
          animate={{
            size: [0, 1],
            opacity: [0, 1],
          }}
          transition={{
            delay: 2,
            duration: 2,
            ease: "easeIn",
          }}
          className="grid mt-2 text-white textShadow border-b-2 border-accentColor bg-prime rounded-b-2xl textSize font-bold  grid-flow-col  "
        >
          <div className="border-r-2 border-accentColor flex flex-col justify-center items-center">
            <BsPerson /> {gender}
          </div>
          <div className="flex border-r-2 border-accentColor flex-col justify-center items-center">
            <p> Wiek: </p> {age} lat
          </div>
          <div className="flex flex-col justify-center items-center">
            {" "}
            <p>Wzrost:</p> {height} cm
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
