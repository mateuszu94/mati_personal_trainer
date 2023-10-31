"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export const WhyWorkout = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.1]);

  const opacity3 = useTransform(scrollYProgress, [0.445, 0.5], [0, 1]);

  const rotate = useTransform(scrollYProgress, [0.35, 0.5], [0, -180]);
  const y = useTransform(scrollYProgress, [0, 0.35], ["100% ", "0%"]);
  const y2 = useTransform(
    scrollYProgress,
    [0, 0.445, 0.5],
    ["200% ", "200%", "0%"]
  );
  return (
    <div className="w-full h-1/2 flex relative   flex-row">
      <div className="w-full h-full absolute opacity-30 bg-stepsBg bg-cover"></div>
      <div className="w-1/6 h-full  max-md:hidden "></div>
      <div
        ref={targetRef}
        className="grainy relative  shadow-md shadow-white w-2/3  max-md:w-full  h-full "
      >
        <div className="relative opacity-50">
          <motion.div className=" absolute" style={{ rotate, scale, y }}>
            <Image src="/dumbell.png" width={352} height={709} alt="apple" />
          </motion.div>
        </div>
        <motion.div
          className="relative z-30 opacity-0"
          style={{ y: y2, opacity: opacity3 }}
        >
          <div className="absolute bg-white w-1/3 rounded-xl left-5 top-5 border-2 border-accentColor">
            <h2 className="font-mono subtitleSize text-center font-bold">
              {" "}
              Wprowadzenie do Roli Treningu w Twojej Drodze do Formy
            </h2>

            <p className="textSize p-3 font-serif">
              Trening to niewątpliwie kluczowy element naszej podróży ku zdrowiu
              i doskonałej formie fizycznej. To właśnie przez regularne
              ćwiczenia, wzmacniamy nasze mięśnie, poprawiamy wytrzymałość,
              spalamy tkankę tłuszczową i zyskujemy ogólną siłę oraz kondycję.
              Jeśli chcesz odmienić swoje ciało i zdrowie, nie możesz pominąć
              znaczenia treningu.
            </p>
          </div>
          <div className="absolute bg-white w-1/3 rounded-xl left-1/3 top-[15rem] border-2 border-accentColor">
            <h2 className="font-mono subtitleSize  text-center font-bold">
              Dlaczego Trening Jest Kluczowy?
            </h2>
            <p className=" p-3 textSize font-serif">
              Trening odgrywa kluczową rolę w naszym procesie transformacji,
              ponieważ przyczynia się do budowy mięśni, które nadają naszemu
              ciału kształt i definicję. Ponadto, regularne ćwiczenia zwiększają
              naszą wytrzymałość, poprawiają naszą postawę i mobilność. Trening
              ma również pozytywny wpływ na nasze zdrowie psychiczne, redukując
              stres i poprawiając nastrój.
            </p>
          </div>
          <div className="absolute bg-white w-1/3 rounded-xl left-2/3 top-[25rem] border-2 border-accentColor">
            <h2 className="font-mono subtitleSize text-center font-bold">
              Personalizowany Trening dla Twoich Celów
            </h2>
            <p className=" textSize p-3 font-serif">
              Każdy z nas ma swoje własne cele fitness, dlatego ważne jest, aby
              trening był spersonalizowany. Jako Twój personalny trener,
              dostosuję plan treningowy do Twoich potrzeb, umiejętności i
              ambicji. Razem ustalimy, czy Twoim celem jest zwiększenie masy
              mięśniowej, spalenie tłuszczu, poprawa wydolności fizycznej czy
              ogólna poprawa zdrowia.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-1/6 h-full max-md:hidden "></div>
    </div>
  );
};
