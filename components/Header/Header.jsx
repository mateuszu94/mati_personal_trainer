"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

import { BigScreanHeder } from "./components/bigScreanHeder";
import { Logo } from "./components/logo";
import { SmallScreanHedder } from "./components/smallScreanHedder";
import { motion } from "framer-motion";
export const Header = () => {
  const [openSmallMenu, setopenSmallMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" ">
      <div className="bg-prime flex h-24 border-accentColor border-b-2 ">
        <Logo />
        <div className="flex w-full justify-end max-lg:hidden mr-16 ">
          <BigScreanHeder />
        </div>
        <div
          className={`absolute duration-500 hidden max-lg:flex h-20 w-20 right-0 justify-end items-end   ${
            openSmallMenu ? "translate-y-[80px] opacity-0 z-0" : "z-20"
          }`}
        >
          <Button
            size="lg"
            asChild
            variant="ghost"
            className="mr-2 text-slate-300  p-4  w-full h-full hidden max-lg:flex "
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
      {isScrolling && (
        <motion.div
          className="bg-slate-500 shadow-md shadow-white right-10 max-sm:right-[-4px] fixed z-20  flex items-center justify-center rounded-full border border-accentColor  w-20 h-20 max-sm:w-12 max-sm:h-12"
          initial={{ translateX: "100%", radius: "50px", scale: 0 }}
          animate={{
            translateX: "0%",
            radius: "0px",
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Button onClick={() => setopenSmallMenu(true)}>
            {" "}
            <AiOutlineMenu />
          </Button>
        </motion.div>
      )}

      <SmallScreanHedder
        setopenSmallMenu={setopenSmallMenu}
        openSmallMenu={openSmallMenu}
      />
    </div>
  );
};
