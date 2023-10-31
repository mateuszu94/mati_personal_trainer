"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Separator } from "../ui/separator";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMe = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.2], ["100% ", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.4], ["100% ", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.4, 0.6], ["100% ", "0%"]);
  return (
    <div ref={targetRef} className="w-full h-[80vh] flex flex-row">
      <div className="w-1/2 h-full flex justify-center items-center">
        <Image
          src="/TrainerCrossArms.png"
          width={1280}
          height={780}
          alt="trenner"
          className="scale-125"
        />
      </div>
      <div className="w-1/2 h-full grid gap-5">
        <motion.div
          className="grainy p-5 border-accentColor border-2 "
          style={{ x }}
        >
          <h2 className="titleSize font bold">Kim jestem?</h2>
          <Separator />
          <p className="textSize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias
            ipsum cumque obcaecati hic dicta reprehenderit assumenda, sit
            distinctio vero repudiandae nesciunt nemo excepturi alias minima,
            rerum aspernatur earum perspiciatis?{" "}
          </p>
        </motion.div>
        <motion.div
          className="grainy p-5 border-accentColor border-2"
          style={{ x: x2 }}
        >
          <h2 className="titleSize font bold">Kwalifikacje</h2>
          <Separator />
          <p className="textSize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias
            ipsum cumque obcaecati hic dicta reprehenderit assumenda, sit
            distinctio vero repudiandae nesciunt nemo excepturi alias minima,
            rerum aspernatur earum perspiciatis?{" "}
          </p>
        </motion.div>
        <motion.div
          className="grainy p-5 border-accentColor border-2"
          style={{ x: x3 }}
        >
          <h2 className="titleSize font bold">Dlaczego ja</h2>
          <Separator />
          <p className="textSize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias
            ipsum cumque obcaecati hic dicta reprehenderit assumenda, sit
            distinctio vero repudiandae nesciunt nemo excepturi alias minima,
            rerum aspernatur earum perspiciatis?{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
