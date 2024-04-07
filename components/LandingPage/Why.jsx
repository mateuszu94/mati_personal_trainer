import React from "react";
import { WhyDiet } from "./components/whyDiet";
import { WhyWorkout } from "./components/whyWorkout";

const Why = () => {
  return (
    <div className="w-full h-[200vh] flex items-center flex-col justify-center  bg-white">
      <div className="w-1/2  rounded-xl  "> </div>
      <WhyDiet />

      <div className="w-1/2  rounded-xl"> </div>
      <WhyWorkout />
    </div>
  );
};

export default Why;
