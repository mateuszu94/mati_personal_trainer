"use client";

import React from "react";
import Step from "../ui/step";

const steps = [
  {
    title: "Krok 1:",
    description: "Ustalanie celu i terminów",
    content:
      " Wspólnie ustalimy Twoje cele i terminy, aby stworzyć klarowny plan działania. Przez szczegółową analizę Twoich oczekiwań i priorytetów,ustalimy realistyczne cele, które będą motywować Cię do działania.",
    buttonText: "Zrób pierwszy krok",
    image: "bg-flex",
    buttonHrev: "/Contact",
  },
  {
    title: "Krok 2:",
    description: "Trening i Wsparcie",
    content:
      "Rozpoczniemy trening, który będzie dostosowany do Twoich celów iindywidualnych potrzeb. Będę Cię motywować, wspierać i dostarczaćcennych wskazówek, abyś osiągnął/a najlepsze rezultaty. Zapewniampełne zaangażowanie i profesjonalizm podczas każdej sesji treningowej.",
    buttonText: "Zobacz Oferte",
    image: "bg-flex",
    buttonHrev: "/My-services",
  },
  {
    title: "Krok 3:",
    description: "Efekty!!!",
    content:
      " Przez systematyczne i konsekwentne działanie, zobaczysz imponująceefekty swojej pracy. Zmiany w sile, wytrzymałości i sylwetce stanąsię widoczne. Będziesz odczuwać lepsze samopoczucie i większą pewność siebie. Razem osiągniemy zamierzone cele i wprowadzimy trwałe zmiany w Twoim życiu.",
    buttonText: "Zobacz Przemiany",
    image: "bg-flex",
    buttonHrev: "/My-services",
  },
];

const Steps = () => {
  return (
    <div className="h-[210vh] bg-bench bg-cover w-full flex flex-col items-center">
      <div className="sticky"></div>
      {steps.map((steps, index) => (
        <Step
          key={index}
          title={steps.title}
          description={steps.description}
          content={steps.content}
          img={steps.image}
        />
      ))}
    </div>
  );
};
export default Steps;
