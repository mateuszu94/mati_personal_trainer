"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  BsFillPersonFill,
  BsTelephoneInboundFill,
  BsYoutube,
} from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ContactLine } from "./componets/contactLine";

const contactInfo = [
  {
    href: "/O-mnie",
    text: "Mateusz Wątroba",
    whatWasCopped: "Mail",
    icon: <BsFillPersonFill />,
    color: "bg-prime",
  },
  {
    href: "tel:+728909526",
    text: "728909526",
    whatWasCopped: "Numer",
    icon: <BsTelephoneInboundFill />,
    color: "bg-prime",
  },
  {
    href: "mailto:mateusz.u.94@gmail.com",
    text: "mateusz.u.94@gmail.com",
    whatWasCopped: "Mail",
    icon: <AiOutlineMail />,
    color: "bg-prime",
  },
];
const mediaInfo = [
  {
    href: "/O-mnie",
    text: "Mateusz Wątroba",
    whatWasCopped: "youtube",
    icon: <BsYoutube />,
    color: "bg-red-600",
  },
  {
    href: "/O-mnie",
    text: "728909526",
    whatWasCopped: "instagram",
    icon: <AiFillInstagram />,
    color: "bg-violet-500",
  },
  {
    href: "/O-mnie",
    text: "mateusz.u.94@gmail.com",
    whatWasCopped: "facebook",
    icon: <AiFillFacebook />,
    color: "bg-baseColor",
  },
];

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          title,
          message,
        }),
      });
      toast({
        title: "Wiadomość poprawnie wysłana",
        description: "Dziekujemy za wysłanie wiadomości",
        variant: "success",
      });
    } catch (err) {
      toast({
        title: "Błąd",
        description:
          "Nastompił błąd przy wysyłaniu wiadomości proszę sprobować ponownie",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="overflow-x-hidden	 h-[100vh] w-full  flex flex-row   items-center  max-sm:flex-col  grainy ">
      <div className="w-1/2 h-full flex items-center bg-cover bg-TakingWeight justify-center flex-col max-sm:w-full max-sm:mb-10 rounded-r-3xl	 max-sm:rounded-none">
        <div className="w-[80%] h-[60%] backdrop-blur-lg   flex-col  flex items-center justify-center rounded-xl	 max-sm:h-full to">
          {" "}
          <h2 className="text-4xl text-center p-4 font-bold font-sans text-black textShadowWhite ">
            Umów się na bezpłatną konsultację!
          </h2>
          <p className="text-center text-white font-bold textShadow">
            {" "}
            Po wypełnieniu formularza skontaktujemy się z Tobą w przeciągu kilku
            godzin
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col m-2 w-[80%] h-[80%] opacity-100 backdrop-blur-none  "
          >
            <label htmlFor="name" className="contact-form_lebleText ">
              IMIĘ I NAZWISKO *
            </label>
            <input
              id="name"
              className="contact-form_textArea"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Tu wpisz swoje imię i nawisko"
            ></input>
            <label htmlFor="email" className="contact-form_lebleText">
              EMAIL *
            </label>
            <input
              id="email"
              className="contact-form_textArea"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Tu wpisz swouj email"
            ></input>
            <label htmlFor="title" className="contact-form_lebleText">
              TYTUŁ
            </label>
            <input
              id="title"
              className="contact-form_textArea"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Podaj tytuł naszej rozmowy"
            ></input>
            <label htmlFor="message" className="contact-form_lebleText">
              WIADOMOŚĆ *
            </label>
            <textarea
              id="message"
              className="contact-form_textArea"
              required
              value={message}
              placeholder="To jest miejsce na twoją wiadomość"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <Button
              type="submit"
              className="font-bold bg-accentColor rounded-xl  h-1/6 mt-4 hover:bg-green-600"
            >
              {" "}
              Wyślij
            </Button>
          </form>
        </div>
      </div>
      <div className="flex  items-center max-sm:justify-center flex-col max-sm:w-full  w-1/2 h-full">
        <motion.div
          className=" w-1/2 max-md:w-full"
          animate={{
            translateY: ["-30vh", "0vh"],
            opacity: [0, 1],
            shadow: ["md", "xl"],
          }}
          transition={{
            duration: 2,
            ease: "easeIn",
          }}
        >
          <Image
            alt="Trenner picture"
            src="/RandomDude.jpg"
            width={100}
            height={100}
            className="rounded-full border-4 border-accentColor    w-[200px] h-[200px] ml-[50%] max-sm:ml-0 max-sm:mt-20"
          ></Image>
        </motion.div>
        <motion.div
          className="contact_info-container justify-start ml-[50%] max-sm:ml-0 flex flex-col  w-full h-full"
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
            delay: 2,
          }}
        >
          <Separator className="bg-black my-4 " />
          <h2 className="contact-info_title ">Dane kontaktowe</h2>{" "}
          {contactInfo.map((contact) => (
            <div>
              <ContactLine
                href={contact.href}
                text={contact.text}
                whatWasCopped={contact.whatWasCopped}
                icon={contact.icon}
                color={contact.color}
              />
            </div>
          ))}
          <Separator className="bg-black my-2 " />
          <h2 className="contact-info_title">Miejsca treningów</h2>{" "}
          <ContactLine
            href={"/O-mnie"}
            text={"adres 1"}
            whatWasCopped={"Adres"}
            icon={<MdLocationOn />}
            color={"bg-baseColor"}
          />{" "}
          <Separator className="bg-black my-2" />
          <h2 className="contact-info_title">Media sopłecznościowe</h2>{" "}
          {mediaInfo.map((contact) => (
            <ContactLine
              href={contact.href}
              text={contact.text}
              whatWasCopped={contact.whatWasCopped}
              icon={contact.icon}
              color={contact.color}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default contact;
