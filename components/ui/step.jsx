"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

import React, { useRef } from "react";
import { Button } from "./button";
import { BsClipboardCheck } from "react-icons/bs";

const Step = ({ title, description, content, img }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["0% ", "-55%", "-60% ", "-80%"]
  );

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale, y }}
      className=" grainy  relative flex flex-col items-end h-[70vh] w-1/2   rounded-xl  "
    >
      <div className="absolute w-full h-full bg-stepsBg bg-cover opacity-10"></div>
      <div className="w-2/3  bg-baseColor relative flex flex-col items-end  rounded-bl-xl">
        <h1 className="titleSize p-10   ">
          Osiągnij swój cel w trzech prostych krokach:
        </h1>

        <Button
          asChild
          size="lg "
          variant="ghost"
          className="mr-10 absolute bottom-2 hover:bg-green-600 rounded-full p-b-5 h-16 text-slate-300 bg-prime  w-40"
        >
          <Link href="/Oferta "> Zapisz się </Link>
        </Button>
      </div>
      <div className="flex flex-row items-center ">
        <div
          className={`ml-10 p-5 w-1/3 bg-white relative shadow-md  bg-cover ${img} text-center mt-7 flex  flex-col border-l-2 rounded-2xl  border-t-2 font-bold`}
        >
          <h1 className=" titleSize rounded-full  bg-prime shadow-md  text-accentColor font-serif text-4xl p-4  ">
            {title}
          </h1>
          <p className="p-5 opacity titleSize">{description}</p>
        </div>
        <div className=" text-2xl font-serif  p-5">
          {" "}
          <p>{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Step;
