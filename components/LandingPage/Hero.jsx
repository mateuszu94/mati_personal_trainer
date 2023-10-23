"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[90vh] bg-[#111E32] left-0 ">
        {" "}
        <div className="w-[60vh] h-80 bg-white absolute skew-x-[75deg] left-[10%] rounded-full bottom-0 z-0">
          fdggdf
        </div>
        <Image
          className="z-10 absolute"
          width={900}
          height={900}
          src="/trenner.png"
        ></Image>
      </div>
      <motion.div
        className="bg-[#e0d290] w-1/2 h-[90vh]  absolute z-50 top-0 right-0 border-solid   rounded-tl-full border-[#111E32] border-l-[14vh]"
        animate={{
          opacity: [1, 0, 0],
          borderRadius: ["20%%", "50%", "100%"],
        }}
        transition={{
          duration: 10,

          times: [0, 0.3, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        {" "}
        <p className="text-hero"> Gotowy na zmiany?</p>
      </motion.div>
      <motion.div
        className="bg-[#e0d290] w-1/2 h-[90vh]   absolute z-40 top-0 right-0 border-solid   rounded-tl-full border-[#111E32] border-l-[14vh]"
        animate={{
          opacity: [0, 0, 1, 0],
          borderRadius: ["100%", "100%", "50%", "20%"],
        }}
        transition={{
          duration: 10,
          times: [0, 0.2, 0.5, 0.7],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        {" "}
        <p className="text-hero">
          Odkryj potencjał swojego ciała z naszym personalnym treningiem!
        </p>
      </motion.div>
      <motion.div
        className="bg-[#e0d290] w-1/2 h-[90vh]   absolute z-40 top-0 right-0 border-solid   rounded-tl-full border-[#111E32] border-l-[14vh]"
        animate={{
          opacity: [0, 0, 1, 0],
          borderRadius: ["20%", "20%", "50%", "100%"],
        }}
        transition={{
          duration: 10,
          times: [0, 0.62, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        {" "}
        <p className="text-hero">
          Razem osiągniemy twój cel Nie czekaj, zacznij zmiany w swoim życiu już
          dziś!
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
