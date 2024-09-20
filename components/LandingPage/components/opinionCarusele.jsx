import React from 'react'
import Image from 'next/image'

export const OpinionCarusele = ({ opinion }) => {
    return (
        <div className=" bg-white  flex justify-center object-contain  rounded-xl ">
            <div className="flex flex-col  items-center  select-none">
                <div className="w-[120px]  ">
                    <Image
                        alt="Client Profile"
                        src={opinion.image}
                        width={70}
                        height={70}
                        className="rounded-full   mb-4 "
                    />
                </div>
                <div className="text-center  subtitleSize">
                    <p>{opinion.opinion}</p>
                </div>
                <div className="ml-52 max-md:ml-0	 italic font-bold">
                    <p>{opinion.name}</p>
                </div>
            </div>
        </div>
    )
}
