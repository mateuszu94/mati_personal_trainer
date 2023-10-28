"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row h-[90vh]   items-center justify-center bg-hero bg-cover">
      <div className="w-1/2 h-full left-0 relative  ">
        {" "}
        <Image
          className="absolute bottom-[10%] left-[15%]  scale-[1.6]"
          width={516}
          height={531}
          src="/trenner.png"
          alt="trenner"
        ></Image>
      </div>
      <div className="relative  font-sans font-extrabold text-white w-1/2 h-[20vh]">
        <motion.div
          className=" border-solid opacity-0   flex items-center justify-center absolute w-full h-full   "
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,

            times: [0, 0.05, 0.25, 0.3],
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          {" "}
          <p className="text-4xl text-center"> Gotowy na zmiany?</p>
        </motion.div>
        <motion.div
          className="  w-full h-full opacity-0  flex items-center justify-center absolute        "
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            times: [0, 0.2, 0.5, 0.6, 0.7],
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          {" "}
          <p className="text-4xl text-center">
            Odkryj potencjał swojego ciała z naszym personalnym treningiem!
          </p>
        </motion.div>
        <motion.div
          className="  w-full absolute opacity-0  flex items-center justify-center h-full   "
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            times: [0, 0.62, 0.73, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          {" "}
          <p className="text-4xl text-center">
            Razem osiągniemy twój cel Nie czekaj, zacznij zmiany w swoim życiu
            już dziś!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
