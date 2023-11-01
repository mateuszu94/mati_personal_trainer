"use client";
import OfferShowcase from "@/components/Offer/OfferShowcase";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState, useEffect, useRef } from "react";

const MyOffer = () => {
  const [option, setOption] = useState("");
  const isInitialRender = useRef(true);

  const SetOptionOnDrag = (StringOption) => {
    setOption(StringOption);
    if (StringOption === option) {
      setOption("");
    }
  };

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    router.push(`/Oferta?Option=${option}`);
  }, [option, router]);

  const Option = searchParams.get("Option");

  return (
    <div>
      <div
        className={`myServices__page  bg-black  ${
          Option === "" || Option === undefined ? "" : "hidden"
        }`}
      >
        <div>
          <OfferShowcase
            top="top-[20px]"
            text="Zobacz naszą ofertę dietetyczną i zacznij kontrolować swoją wagę już dziś"
            bg="bg-dieta"
            onDrag={() => SetOptionOnDrag("Dieta")}
          />

          <OfferShowcase
            top="top-[390px]"
            text="Zobacz naszą ofertę Treningową i zbuduj wymarzoną sylwetkę "
            bg="bg-trening"
            onDrag={() => SetOptionOnDrag("Trenning")}
          />
          <OfferShowcase
            top="top-[780px]"
            text="Zobacz naszą  kompletną ofertę oferującą trening jak i dietę dla najlepszych rezultatów w najniższej cenie"
            bg="bg-dietaTrening"
            onDrag={() => SetOptionOnDrag("Trenning_dieta")}
          />
        </div>
      </div>

      <div
        className={`h-[80vh]  bg-white n transision duration-100 ease-in-out ${
          Option === "Dieta" ||
          Option === "Trenning" ||
          Option === "Trenning_dieta"
            ? ""
            : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default MyOffer;
