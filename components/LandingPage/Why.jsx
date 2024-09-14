 "use client"
 import React from "react";
import { WhyDiet } from "./components/whyDiet";
import { WhyWorkout } from "./components/whyWorkout";



const Why = () => {
  return (
    <section>
    <div className="w-full h-[400vh]    bg-black">
      <WhyDiet/>
     </div>
    </section>
  );
};

export default Why;
