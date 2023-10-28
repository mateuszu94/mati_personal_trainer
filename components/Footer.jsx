import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row bg-black  justify-center z-50">
      <div className="px-10 py-1  text-blue-400 hover:text-blue-500">
        <div className="py-2">
          <Link
            href="https://www.facebook.com/mateusz.watroba.311"
            target="_blank"
          >
            <AiFillFacebook></AiFillFacebook>
          </Link>
        </div>
        <div className="footer__icon-instagram">
          <Link href="https://www.instagram.com/" target="_blank">
            <AiFillInstagram></AiFillInstagram>
          </Link>
        </div>
      </div>
      <div className="text-white m-2 px-10">
        <h2 className="ml-6 text-[10px] font-bold">Kontakt:</h2>
        <div className="row_center">
          <BsFillTelephoneFill className=" pl-2 mr-1" />
          <p className="text-[12px] mr-1">:</p>
          <p className="text-[7px]">555-555-5555</p>
        </div>
        <div className="row_center">
          <AiOutlineMail className="footer__contact-icon" />
          <p className="text-[12px] mr-1">:</p>
          <p className="text-[7px]">mati@gmail.com</p>
        </div>
      </div>
      <div className="text-white m-2 text-[7px] row_center ">
        <div>
          <div className="footer__menu-item">
            <Link href="/My-services">
              <p>Usługi</p>
            </Link>
          </div>
          <div className="hover:text-yellow-500 p-0.5">
            <Link href="/About-me">
              <p>O mnie</p>
            </Link>
          </div>
          <div className="hover:text-yellow-500 p-0.5">
            <Link href="/Calculators">
              <p>Kalkulatory</p>
            </Link>
          </div>
          <div className="hover:text-yellow-500 p-0.5">
            <Link href="/Contact">
              <p>Kontakt</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
