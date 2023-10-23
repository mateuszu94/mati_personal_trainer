import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CalcualtorsAddBanner = () => {
  return (
    <div className="bg-prime h-[10vh] flex justify-center items-center">
      <div className="text-3xl flex flex-col  justify-center items-center">
        <p className="text-white font-serif">Profesionalna opieka!</p>
        <p className="text-accentColor font-bold">Trening i Dieta</p>
      </div>
      <Button
        asChild
        className="bg-accentColor rounded-full ml-12 hover:bg-green-600"
      >
        <Link href="/Oferta"> Zaczynam Teraz</Link>
      </Button>
    </div>
  );
};

export default CalcualtorsAddBanner;
