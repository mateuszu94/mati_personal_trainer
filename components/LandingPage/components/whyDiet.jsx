"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { WhyDietStudy } from "./whyDietStudy";

export const WhyDiet = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.1]);
  const scale2 = useTransform(scrollYProgress, [0.375, 0.445], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0.37, 0.375], [1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.445, 0.5], [0, 1]);

  const opacity2 = useTransform(
    scrollYProgress,
    [0.375, 0.376, 0.6],
    [0, 1, 0.2]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, -8]);
  const y = useTransform(scrollYProgress, [0, 0.35], ["100% ", "0%"]);
  const y2 = useTransform(
    scrollYProgress,
    [0, 0.445, 0.5],
    ["200% ", "200%", "0%"]
  );
  return (
    <div className="w-full h-1/2 relative flex flex-row">
      <div className="bg-bigDiet bg-cover absolute  w-full h-full opacity-30 "></div>
      <div className="w-1/6 h-full max-md:hidden "></div>
      <div
        ref={targetRef}
        className="grainy relative  shadow-md shadow-white w-2/3 max-md:w-full h-full "
      >
        <div className="relative">
          <motion.div
            className="opacity-0 absolute"
            style={{ opacity, rotate, scale, y }}
          >
            <Image src="/apple.png" width={1280} height={720} alt="apple" />
          </motion.div>
          <motion.div>
            <WhyDietStudy></WhyDietStudy>
          </motion.div>
          <motion.div
            className="opacity-0 absolute translate-y-[-2rem] translate-x-[-1rem]"
            style={{ opacity: opacity2, scale: scale2 }}
          >
            <Image src="/appleBite.png" width={1280} height={720} alt="apple" />
          </motion.div>
        </div>
        <motion.div
          className="relative z-30 opacity-0"
          style={{ y: y2, opacity: opacity3 }}
        >
          <div className="absolute bg-white w-1/3 max-sm:w-2/3 rounded-xl left-5 top-5 border-2 border-accentColor">
            <h2 className="font-mono subtitleSize text-center font-bold">
              {" "}
              Wprowadzenie do Wagi Diety w Treningu:
            </h2>

            <p className="textSize p-3 font-serif">
              Dieta stanowi nieodłączny element naszej drogi do zdrowia i formy
              fizycznej. Podobnie jak trening, odpowiednio zbilansowana dieta ma
              ogromny wpływ na nasze osiągnięcia fitness. To właśnie przez dietę
              dostarczamy organizmowi niezbędnych składników odżywczych, które
              są potrzebne do budowy mięśni, spalania tkanki tłuszczowej i
              osiągania naszych celów. Jeśli jesteś gotowy na transformację
              swojego ciała, nie możesz zapominać o diecie.
            </p>
          </div>
          <div className="absolute bg-white w-1/3 max-sm:w-2/3 rounded-xl left-1/3 top-[15rem] border-2 border-accentColor">
            <h2 className="font-mono subtitleSize text-center font-bold">
              Dlaczego Dieta Ma Takie Znaczenie?
            </h2>
            <p className="textSize p-3 font-serif">
              Dieta jest kluczem do sukcesu, ponieważ dostarcza ciało
              niezbędnymi materiałami do budowy i naprawy mięśni. Jeśli
              dostarczasz organizmowi odpowiednich ilości białka, węglowodanów,
              tłuszczu, witamin i minerałów, tworzysz idealne warunki do rozwoju
              mięśni i redukcji tkanki tłuszczowej. Ponadto, dieta ma ogromny
              wpływ na poziom energii i wytrzymałość, co jest kluczowe podczas
              treningów.
            </p>
          </div>
          <div className="absolute bg-white w-1/3 max-sm:w-2/3 rounded-xl left-2/3 max-sm:left-0 top-[25rem] max-sm:top-[28rem] border-2 border-accentColor">
            <h2 className="font-mono subtitleSize text-center font-bold">
              Planowanie Diety na Miarę Twoich Celów
            </h2>
            <p className="textSize p-3 font-serif">
              Każdy z nas ma różne cele fitness, dlatego ważne jest, aby dieta
              była spersonalizowana. Jako Twój personalny trener, pomogę Ci
              stworzyć spersonalizowany plan żywieniowy, który uwzględni Twoje
              cele, preferencje żywieniowe i indywidualne potrzeby. Nie ma
              uniwersalnego podejścia do diety, dlatego ważne jest, abyśmy
              dostosowali ją do Ciebie.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-1/6 h-full max-md:hidden"></div>
    </div>
  );
};
