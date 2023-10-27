"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import Link from "next/link";

export const Header = () => {
  const [openSmallMenu, setopenSmallMenu] = useState(false);
  const [openMaterial, setopenMaterial] = useState(false);
  const [openCalculators, setopenCalculators] = useState(false);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <div className="">
      <div ref={ref} className="bg-[#111E32] flex border-[#A9730B] border-b-2 ">
        <Link href="/">
          <div className="h-20 w-20 rounded-xl ml-10 hover:scale-110 cursor-pointer transition duration-300 ">
            <div>
              <Image
                width={80}
                height={80}
                src="/Logo.png"
                alt="logo"
                className="rounded-xl  "
              />{" "}
            </div>
          </div>
        </Link>
        <div className="header-bg  h-20 w-full flex  justify-end mr-10 max-lg:hidden	">
          <Button
            asChild
            size="lg "
            variant="ghost"
            className="mr-10 text-slate-300  w-40"
          >
            <Link href="/O-mnie ">O Mnie </Link>
          </Button>
          <DropdownMenu size="lg" className="mr-10 text-slate-300 w-40 hover">
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="lg"
                className="mr-10 text-slate-300 w-40"
              >
                Kalkulatory
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white font-serif ">
              <DropdownMenuItem>
                <Link href="/Kalkulatory?typ=Kalkulator%20Kalorii">
                  Kalkulator Kalorii
                </Link>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Kalkulatory?typ=Kalkulator%20Bmi">
                  Kalkulator BMI
                </Link>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Kalkulatory?typ=Kalkulator%20Wagi%20Idealnej">
                  Kalkulator Wagi Idealnej
                </Link>{" "}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="lg"
            variant="ghost"
            className="mr-10 text-slate-300 w-40"
          >
            Oferta
          </Button>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300 w-40"
          >
            <Link href="/Kontakt">Kontakt </Link>
          </Button>
          <DropdownMenu size="lg" className="mr-10 text-slate-300 w-40">
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                variant="ghost"
                className="mr-10 text-slate-300 w-40"
              >
                Materiały pomocnicze
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white font-serif ">
              <DropdownMenuItem>Transformacje</DropdownMenuItem>
              <DropdownMenuItem>Opinnie</DropdownMenuItem>
              <DropdownMenuItem>Przepisy</DropdownMenuItem>
              <DropdownMenuItem>Ćwiczenia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>{" "}
        </div>
        <div
          className={`absolute duration-500 hidden max-lg:flex  justify-end items-end  w-full ${
            openSmallMenu ? "translate-y-[80px] opacity-0 z-0" : "z-20"
          }`}
        >
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-2 text-slate-300 w-40 p-4 hidden max-lg:flex "
            onClick={() => setopenSmallMenu(!openSmallMenu)}
          >
            {openSmallMenu == false ? (
              <AiOutlineMenu />
            ) : (
              <AiOutlineCloseCircle />
            )}
          </Button>
        </div>
      </div>

      <div
        className={`ease-in-out duration-300	 fixed w-[50vh]  h-[100vh] border-l-2    border-[#A9730B] bg-[#111E32]  right-0  z-10 ${
          !openSmallMenu ? "translate-x-[100%] rounded-l-full" : ""
        }`}
      >
        <Button
          size="lg"
          asChild
          variant="ghost"
          className={`ml-[20rem] text-slate-300 w-40 p-4 ease-in-out   duration-500  ${
            openSmallMenu ? "opacity-100" : "opacity-0"
          } `}
          onClick={() => setopenSmallMenu(!openSmallMenu)}
        >
          <AiOutlineCloseCircle />
        </Button>
        <Button
          asChild
          size="lg "
          variant="ghost"
          className="mr-10 text-slate-300  h-16 w-full"
        >
          <Link href="/O-mnie ">O Mnie </Link>
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="mr-10 text-slate-300  h-16 w-full"
        >
          Oferta
        </Button>
        <Button
          size="lg"
          asChild
          variant="ghost"
          className="mr-10 text-slate-300  h-16 w-full"
        >
          <Link href="/Kontakt ">Kontakt </Link>
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="mr-10 text-slate-300 h-16 w-full"
          onClick={() => setopenMaterial(!openMaterial)}
        >
          Materiały pomocnicze <BsFillArrowDownCircleFill className="ml-5" />
        </Button>
        <div className={`bg-slate-600 ${openMaterial ? "" : "hidden"} `}>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300  h-16  w-full"
          >
            <Link href="/Kontakt ">Transformacje </Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300  h-16 w-full"
          >
            <Link href="/Kontakt ">Opinnie </Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300  h-16 w-full"
          >
            <Link href="/Kontakt ">Przepisy </Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300  h-16 w-full"
          >
            <Link href="/Kontakt ">Ćwiczenia </Link>
          </Button>
        </div>
        <Button
          size="lg"
          variant="ghost"
          className="mr-10 text-slate-300 h-16 w-full"
          onClick={() => setopenCalculators(!openCalculators)}
        >
          Kalkulatory <BsFillArrowDownCircleFill className="ml-5" />
        </Button>
        <div className={`bg-slate-600 ${openCalculators ? "" : "hidden"} `}>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300  h-16  w-full"
          >
            <Link href="/Kontakt ">Kalkulator Wagi Idealnej</Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300  h-16 w-full"
          >
            <Link href="/Kontakt ">Kalkulator BMI</Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-10 text-slate-300  h-16 w-full"
          >
            <Link href="/Kontakt ">Kalkulator Kalorii </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
