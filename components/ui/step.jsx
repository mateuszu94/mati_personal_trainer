"use client";
import { useScroll, useTransform, motion } from "framer-motion";

import React, { useRef } from "react";

const Step = ({ title }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale }}
      className="grainy  h-[100vh] w-1/2 flex flex-col items-center rounded-xl  "
    >
      <div className=" h-[8%] w-1/3 text-center mt-7 bg-prime rounded-full shadow-md font-bold">
        <h1 className=" titleSize text-accentColor font-serif text-4xl p-4  ">
          {title}
        </h1>
      </div>
    </motion.div>
  );
};

export default Step;
