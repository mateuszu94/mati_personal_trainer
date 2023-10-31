import React from "react";

export const OpinionCarusele = ({ opinion }) => {
  return (
    <div className=" bg-white  min-h-full min-w-[100%] flex justify-center  rounded-xl ">
      <div className="flex flex-col  items-center  select-none">
        <img
          alt="Client Profile"
          src={opinion.image}
          width={70}
          height={70}
          className="rounded-full mb-4 "
        />
        <div className="text-center  subtitleSize">
          <p>{opinion.opinion}</p>
        </div>
        <div className="ml-52 max-md:ml-0	 italic font-bold">
          <p>{opinion.name}</p>
        </div>
      </div>
    </div>
  );
};
