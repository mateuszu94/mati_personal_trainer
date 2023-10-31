import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { ArrowBigUpDash } from "lucide-react";

const components = [
  {
    title: "Transformacje",
    href: "/Transformacje",
    description: "Zobacz transformacje",
  },
  {
    title: "Opinnie",
    href: "/Opinnie",
    description: "Zobacz opinne klientów",
  },
  {
    title: "Przepisy",
    href: "/Przepisy",
    description: "Zobacz Przepisy na zdrowe dania",
  },
  {
    title: "Ćwiczenia",
    href: "/Ćwiczenia",
    description: "Zobacz jak wykonywać Ćwiczenia",
  },
];
export const SmallScreanHedder = ({ setopenSmallMenu, openSmallMenu }) => {
  function onClick() {
    setopenSmallMenu(false);
  }
  if (!openSmallMenu) {
    return null;
  }
  return (
    <motion.div
      className="ease-in-out duration-300	 fixed w-[50vh]  h-[100vh] border-l-2    border-[#A9730B] bg-baseColor  right-0  z-50 "
      initial={{ translateX: "100%", borderRadius: 100, scale: 0 }}
      animate={{ translateX: "0%", borderRadius: 20, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 100,
      }}
    >
      <div className=" h-12 p-4 text-right">
        <div className=" text-white text-4xl ">
          <Link href={"/"}>
            <ArrowBigUpDash />
          </Link>
        </div>
      </div>
      <div className=" h-12 text-right">
        <Button onClick={onClick} className=" text-white text-4xl ">
          <AiFillCloseCircle />
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-full text-white   ">
        <AccordionItem value="item-3" className="h-12 ">
          <Link
            className="text-white ml-5  hover:text-accentColor"
            onClick={onClick}
            href="O-mnie"
          >
            O mnie
          </Link>
        </AccordionItem>
        <AccordionItem value="item-3" className="h-12 ">
          <Link
            className="text-white ml-5  hover:text-accentColor"
            onClick={onClick}
            href="/Oferta"
          >
            Oferta
          </Link>
        </AccordionItem>
        <AccordionItem value="item-3" className="h-12 hover:text-base">
          <Link
            className="text-white ml-5  hover:text-accentColor"
            onClick={onClick}
            href="/Kontakt"
          >
            Kontakt
          </Link>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-white ml-5 hover:text-accentColor">
              Zobacz dostępne materiały pomocnicze
            </p>{" "}
          </AccordionTrigger>
          <div className="bg-smallDiet ml-0 bg-cover">
            {components.map((component, index) => (
              <AccordionContent
                key={index}
                className="hover:text-black animate duration-1000 ease-in-out   hover:bg-slate-400 hover:rounded-2xl"
              >
                <Link onClick={onClick} href={component.href}>
                  <p className="p-1 pl-4">{component.title}</p>
                </Link>
              </AccordionContent>
            ))}
          </div>
        </AccordionItem>
        <AccordionItem value="item-2" className=" w-full ">
          <AccordionTrigger className="text-white ml-5 hover:text-accentColor">
            Kalkulatory
          </AccordionTrigger>
          <div className=" bg-calculator bg-cover w-full h-full ml-0  ">
            <AccordionContent>
              <Link
                onClick={onClick}
                href="/Kalkulatory?typ=Kalkulator%20Wagi%20Idealnej"
                className="hover:text-black animate duration-1000 ease-in-out p-1 pl-4 w-full  hover:bg-slate-400 hover:rounded-2xl"
              >
                <p className="p-1 pl-4">Kalkulator Wagi Idealnej</p>{" "}
              </Link>
            </AccordionContent>
            <AccordionContent>
              <Link
                onClick={onClick}
                href="/Kalkulatory?typ=Kalkulator%20Bmi"
                className="hover:text-black animate duration-1000 ease-in-out p-1 pl-4   hover:bg-slate-400 hover:rounded-2xl"
              >
                {" "}
                <p className="p-1 pl-4">Kalkulator BMI</p>
              </Link>
            </AccordionContent>
            <AccordionContent>
              <Link
                onClick={onClick}
                href="/Kalkulatory?typ=Kalkulator%20Kalorii"
                className="hover:text-black animate duration-1000 ease-in-out p-1 pl-4   hover:bg-slate-400 hover:rounded-2xl"
              >
                {" "}
                <p className="p-1 pl-4">Kalkulator Kalorii</p>
              </Link>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};
