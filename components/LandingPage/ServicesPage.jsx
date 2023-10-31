import React from "react";
import VideoButton from "../ui/VideoWithButton";

const Services = () => {
  return (
    <div>
      {" "}
      <h2 className="h-20 grainy text-center text-3xl p-5">Oferta</h2>
      <div className="w-full h-2/5 flex flex-row max-sm:flex-col">
        <VideoButton
          title="Trening Personalny"
          text="Redukcja wagi, budowanie masy mięśniowej, przebiegnięcie pierwszego maratonu, poprawa gibkości…? Twój cel jest naszą motywacją."
          buttonText="Więcej ->"
          videoName="./workout.mp4"
          link="/Oferta"
          buttonColor="border-accentColor"
          buttonColorHover="hover:border-green-600"
        />
        <VideoButton
          title="Dieta"
          text="Analiza obecnego sposobu jedzenia, nauka poprawnych nawyków żywieniowych Wszystko jest w zasięgu ręki. "
          buttonText="Więcej ->"
          videoName="./food.mp4"
          link="/Oferta"
          buttonColor="border-accentColor"
          buttonColorHover="hover:border-green-600"
        />
      </div>
    </div>
  );
};

export default Services;
