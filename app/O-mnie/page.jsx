"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

function Section({ children , style , reversSide ,  image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
    <section className="flex relative z-30 h-[50vh] items-center  grainy" ref={ref}>
      <div className="absolute h-full top-0 bg-black rounded-full w-1  left-1/2 "></div>
      <div className="relative  h-20 w-20 top-[20%] border-8 border-white  rounded-full grainy z-30 left-[50%] translate-x-[-2.5rem]">
        <Image className="" width={100} height={100} src={image} />
      </div>
      <span className={`bg-white h-2/3 w-1/3 absolute ${reversSide ? "left-[55%]" : "right-[55%] " } border-b-8 border-blue-300  rounded-t-2xl p-2 ${style}`}
        style={{
          transform: isInView ? "none" :  reversSide ? "translateX(200px)" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section></div>
  );
}

const page = () => {
  return ( 
  <div>
    <div className="h-[80vh] bg-aboutMePicture bg-cover flex items-center justify-center" >
      <h1 className=" text-white text-5xl font-semibold TextShadow">Moja pasją jest Trenning</h1>
      <p></p>
    
    </div>
      <Section image={"/education.svg"} style={"border-red-500"}  reversSide={true}>Edukacja AWF  </Section>
      <Section image={"/certification.svg"} >Kursy i certyfikaty</Section>
      <Section image={"/person.svg"} reversSide={true}>Cos więcej o mnie</Section>
  
    </div>

)
};

export default page;
