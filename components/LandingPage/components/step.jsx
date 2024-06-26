"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

import React, { useRef } from "react";
import { Button } from "../../ui/button";

const Step = ({ stepNumber, description, content, img, title }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const y = useTransform(
    scrollYProgress,
    [0.4, 0.7, 0.9, 1],
    ["0% ", "-55%", "-60% ", "-80%"]
  );

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale, y }}
      className=" grainy  relative flex flex-col items-end h-[50vh] w-2/3 max-md:w-full   rounded-xl  "
    >
      <div className="absolute w-full h-full bg-stepsBg bg-cover opacity-10"></div>
      {title && (
        <div className="flex justify-center items-center w-full h-full">
          <h2 className="text-4xl 2xl:text-[80px] leading-normal	 	 tracking-wide	 gap-4 textShadow text-center text-accentColor font-serif font-bold">
            Ośiągnij swój cel w trzech prostych<br></br>krokach
          </h2>
        </div>
      )}

      {!title && (
        <>
          <div className="flex flex-row h-full w-full items-center justify-center  ">
            <div
              className={`ml-10 p-5 w-1/3 bg-white relative shadow-md items-center justify-center bg-cover ${img} text-center mt-7 flex  flex-col border-l-2 rounded-2xl  border-t-2 font-bold`}
            >
              <h2 className=" titleSize rounded-full  textShadow   text-accentColor font-serif    ">
                Krok: {stepNumber}
              </h2>

              <p className="p-5 opacity subtitleSize">{description}</p>
            </div>
            <div className=" subtitleSize font-serif text-center  p-5">
              {" "}
              <p>{content}</p>
            </div>
          </div>{" "}
          <Button
            asChild
            size="lg "
            variant="ghost"
            className="mr-10 absolute bottom-20  max-sm:bottom-4 hover:bg-green-600 rounded-full p-b-5  text-slate-300 bg-prime  subtitleSize"
          >
            <Link
              href="/Oferta "
              className="p-4 text-shadow font-serif shadow-sm shadow-slate-300"
            >
              {" "}
              Zapisz się{" "}
            </Link>
          </Button>
        </>
      )}
    </motion.div>
  );
};

export default Step;
