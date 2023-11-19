"use client";

import OfferPriceSetter from "@/components/Offer/offerPriceSetter";
import OfferPriceShowcase from "@/components/Offer/offerPriceShowcase";
import OfferShowcase from "@/components/Offer/offerShowcase";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState, useEffect, useRef } from "react";
const Options = ["Dieta", "Trenning", "Trenning dieta"];
const times = ["1", "3", "6", "12"];
const numberOfPeopleOptions = ["Dziecko", "Indywidualnie", "W parze"];

const MyOffer = () => {
  const [option, setOption] = useState("");
  const isInitialRender = useRef(true);
  const [time, setTime] = useState("");
  const [numberOfPeople, setnumberOfPeople] = useState("Indywidualnie");

  const SetOptionOnDrag = (StringOption) => {
    setOption(StringOption);
    if (StringOption === option) {
      setOption("");
    }
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const optionParam = searchParams.get("Option");
  const timeParam = searchParams.get("time");
  const forPeople = searchParams.get("dla");

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      if (Options.includes(optionParam)) {
        setOption(optionParam);
      }
      if (times.includes(timeParam)) {
        setTime(timeParam);
      }
      if (numberOfPeopleOptions.includes(forPeople)) {
        setnumberOfPeople(forPeople);
      }
      return;
    }

    router.push(
      `/Oferta?Option=${option}&&time=${time}&&dla=${numberOfPeople}`
    );
    console.log(option);
    console.log(time);
    console.log(numberOfPeople);
  }, [option, time, numberOfPeople]);

  return (
    <div>
      {optionParam === "" || !optionParam || optionParam === null ? (
        <div className="relative h-[135vh]  overflow-hidden  bg-black ">
          <div>
            <OfferShowcase
              top="top-[20px]"
              text="Zobacz naszą ofertę dietetyczną i zacznij kontrolować swoją wagę już dziś"
              bg="bg-dieta"
              onDrag={() => SetOptionOnDrag(Options[0])}
            />

            <OfferShowcase
              top="top-[390px]"
              text="Zobacz naszą ofertę Treningową i zbuduj wymarzoną sylwetkę "
              bg="bg-trening"
              onDrag={() => SetOptionOnDrag(Options[1])}
            />
            <OfferShowcase
              top="top-[780px]"
              text="Zobacz naszą  kompletną ofertę oferującą trening jak i dietę dla najlepszych rezultatów w najniższej cenie"
              bg="bg-dietaTrening"
              onDrag={() => SetOptionOnDrag(Options[2])}
            />
          </div>
        </div>
      ) : (
        <div className="h-[100vh] flex flex-col items-center justify-center grainy  ">
          <div />
          <div className="flex flex-row  max-sm:flex-col w-full h-full ">
            <OfferPriceSetter
              time={time}
              setTime={setTime}
              numberOfPeople={numberOfPeople}
              setnumberOfPeople={setnumberOfPeople}
              times={times}
              option={option}
              Options={Options}
              numberOfPeopleOptions={numberOfPeopleOptions}
            />
            <OfferPriceShowcase />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOffer;
