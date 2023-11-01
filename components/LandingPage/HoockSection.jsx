import React from "react";
import MagneticButton from "../ui/magneticButton";

const HoockSection = () => {
  return (
    <div className="w-full relative h-[50vh] flex justify-center grainy  ">
      {" "}
      <div className="flex flex-row bg-prime justify-center items-center w-full h-1/3">
        <h2 className="font-bold 2xl:text-[60px] md:text-[40px] sm:text-[30px] text-accentColor   max-xs:text-[20px]">
          JESZCZE SIĘ WAHASZ?
        </h2>
        <div className="m-2 text-white flex flex-row font-extralight text-sm 2xl:text-[40px]  2xl:p-10">
          <p> Umów konsultacje online -</p>
          <p className="font-bold">TERAZ GRATIS !!!</p>
        </div>
      </div>
      <div className="absolute  bottom-20  left-1/2 translate-x-[-50%]  ">
        <MagneticButton
          bgcolor="bg-prime"
          text="zapisz sie już dziś"
          width="w-[40rem]"
          height="h-[10rem]"
          font={"font-mono text-3xl text-accentColor"}
          shake={true}
          borderRadius={"rounded-xl"}
        />
      </div>
    </div>
  );
};

export default HoockSection;
