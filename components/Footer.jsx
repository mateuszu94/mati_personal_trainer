import React from "react";
import { BsFillTelephoneFill, BsYoutube } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

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

const Footer = () => {
  return (
    <div className="grid  grid-flow-col bg-prime   z-50">
      {" "}
      <div className="px-10 p-y-4 text-2xl flex flex-row  ">
        {" "}
        <h2 className="ml-6 text-xl font-bold text-white px-5">Kontakt:</h2>
        <div className="text-blue-400 hover:scale-150 duration-500 ">
          <Link
            href="https://www.facebook.com/mateusz.watroba.311"
            target="_blank"
          >
            <AiFillFacebook></AiFillFacebook>
          </Link>
        </div>
        <div className="text-violet-500 hover:scale-150 duration-500">
          <Link href="https://www.instagram.com/" target="_blank">
            <AiFillInstagram></AiFillInstagram>
          </Link>
        </div>
        <div className="text-red-500 hover:scale-150 duration-500">
          <Link href="https://www.instagram.com/" target="_blank">
            <BsYoutube></BsYoutube>
          </Link>
        </div>{" "}
        <div className="flex flex-col items-center text-xl px-4 text-white">
          <BsFillTelephoneFill className=" pl-2 mr-1" />

          <p className="">555-555-5555</p>
        </div>
        <div className="flex flex-col items-center text-xl text-white">
          <AiOutlineMail className="footer__contact-icon" />

          <p className="">mati@gmail.com</p>
        </div>
      </div>
      <div className="text-white m-2 text-xl flex flex-row  gap-4">
        <div className=" hover:text-accentColor items-center flex">
          <Link href="/Oferta">
            <p>Oferta</p>
          </Link>
        </div>
        <div className="hover:text-accentColor items-center flex p-0.5">
          <Link href="/O-mnie">
            <p>O mnie</p>
          </Link>
        </div>
        <div className=" items-center flex flex-row p-0.5">
          {" "}
          <h2>Kalkulatory :</h2>
          <div className="flex flex-col  text-white">
            <Link
              className="hover:text-accentColor font-serif text-[1rem]"
              href="/Calculators"
            >
              <p>Kalkulator Bmi</p>
            </Link>
            <Link
              className="hover:text-accentColor font-serif  text-[1rem]"
              href="/Calculators"
            >
              Kalkulator idealnej wagi
            </Link>
            <Link
              className="hover:text-accentColor font-serif  text-[1rem]"
              href="/Calculators"
            >
              Kalkulator calorii
            </Link>
          </div>
        </div>
        <div className="hover:text-accentColor items-center flex p-0.5">
          <Link href="/Kontakt">
            <p>Kontakt</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
