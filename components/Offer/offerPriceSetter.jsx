import React from "react";

const OfferPriceSetter = ({
  time,
  setTime,
  numberOfPeople,
  setnumberOfPeople,
  times,
  option,
  Options,
  numberOfPeopleOptions,
}) => {
  return (
    <div className="w-1/2  max-sm:w-full  flex flex-col items-center justify-center">
      <div className="w-full flex flex-col mb-5 gap-4">
        <span>
          {option == Options[0] && (
            <h2 className="titleSize text-accentColor font-serif textShadow text-center">
              Twoja Personalna Oferta Dietetyczna
            </h2>
          )}
          {option == Options[1] && (
            <h2 className="titleSize text-accentColor font-serif textShadow text-center">
              Twoja Personalna Oferta Trenningowa
            </h2>
          )}
          {option == Options[2] && (
            <h2 className="titleSize text-accentColor font-serif textShadow text-center">
              Twoja Personalna Oferta Całościowa obejmujące Dietę + Trenning
            </h2>
          )}
        </span>
        <h2 className="titleSize textShadow text-center  text-white">
          Indywidualna opieka!
        </h2>
        <span>
          {numberOfPeople == numberOfPeopleOptions[0] && (
            <p className="subtitleSize  font-mono font-bold text-center">
              Chcesz odmienić sylwetki i zadbać o zdrowie? <br />
              Potrzebujesz pomocy{" "}
              <span className="subtitleSize text-accentColor textShadow">
                {" "}
                Profesjonalisty
              </span>
            </p>
          )}
          {numberOfPeople == numberOfPeopleOptions[1] && (
            <p className="subtitleSize  font-mono font-bold text-center">
              Chcesz zmienić sylwetkę i zadbać o zdrowie? <br />
              Potrzebujesz pomocy{" "}
              <span className="subtitleSize text-accentColor textShadow">
                {" "}
                Profesjonalisty
              </span>
            </p>
          )}
          {numberOfPeople == numberOfPeopleOptions[2] && (
            <p className="subtitleSize  font-mono font-bold text-center">
              Chcecie odmienić sylwetki i zadbać o zdrowie? <br />
              Potrzebujecie pomocy{" "}
              <span className="subtitleSize text-accentColor textShadow">
                {" "}
                Profesjonalisty
              </span>
            </p>
          )}
        </span>{" "}
        <p className="titleSize  font-mono font-bold text-center">
          Program <span className="text-accentColor textShadow"> {option}</span>
        </p>
        {numberOfPeople == numberOfPeopleOptions[0] && (
          <p className="subtitleSize   font-sans text-red-700 font-bold text-center">
            Tylko za pełną zgodą prawnych opiekunów dziecka
          </p>
        )}
      </div>
      <div>
        <div></div>
        <div className="flex flex-row gap-5 mb-5">
          <div
            className={` w-40 h-40 max-xl:w-32 max-xl:h-32  max-sm:h-24  max-sm:w-24 rounded-xl ${
              numberOfPeople === numberOfPeopleOptions[0]
                ? "bg-baseColor  border-4 border-accentColor scale-110"
                : "bg-white"
            }`}
          >
            <div
              onClick={() => setnumberOfPeople(numberOfPeopleOptions[0])}
              className="bg-cover w-full h-full shadow-md shadow-black    rounded-xl cursor-pointer bg-BoyIcon"
            />
          </div>{" "}
          <div
            className={` w-40 h-40 max-xl:w-32 max-xl:h-32  max-sm:h-24  max-sm:w-24 rounded-xl ${
              numberOfPeople === numberOfPeopleOptions[1]
                ? "bg-baseColor  border-4 border-accentColor scale-110"
                : "bg-white"
            }`}
          >
            <div
              onClick={() => setnumberOfPeople(numberOfPeopleOptions[1])}
              className="bg-cover  w-full h-full  shadow-md shadow-black    rounded-xl cursor-pointer bg-SoloTreningIcon"
            />
          </div>
          <div
            className={` w-40 h-40 max-xl:w-32 max-xl:h-32  max-sm:h-24  max-sm:w-24 rounded-xl ${
              numberOfPeople === numberOfPeopleOptions[2]
                ? "bg-baseColor  border-4 border-accentColor scale-110"
                : "bg-white"
            }`}
          >
            <div
              onClick={() => setnumberOfPeople(numberOfPeopleOptions[2])}
              className="bg-cover   w-full h-full shadow-md shadow-black    rounded-xl cursor-pointer bg-CoupleTrenningIcon"
            />
          </div>
        </div>
      </div>
      <div className="relative flex-center flex-col w-full">
        <div className="titleSize text-center textShadow text-accentColor">
          <p>Czas współpracy</p>
        </div>
        <div className="flex flex-row w-full  left-0 h-44 translate-x-[-10%]">
          <input
            id="oneMouth"
            name="radio"
            type="radio"
            value={times[0]}
            onChange={(e) => setTime(e.target.value)}
            className="translate-x-[-8000%]"
          />
          <label
            htmlFor="oneMouth"
            className={`left-[30%]  ${
              time == 1 ? "scale-[80%]" : ""
            } shadow-md shadow-black absolute w-12 h-12 max-md:w-8  max-md:h-8 rounded-full  bg-accentColor cursor-pointer top-[10%]`}
          ></label>
          <p
            className={`left-[30%] ${
              time == 1 ? "text-accentColor textShadow" : ""
            } text-xl max-sm:text-sm font-bold absolute top-[40%] max-md:top-[30%] text-center translate-x-[-25%]`}
          >
            1 <br />
            Miesiące
          </p>
          <input
            id="threeMouth"
            name="radio"
            type="radio"
            value={times[1]}
            onChange={(e) => setTime(e.target.value)}
            className="translate-x-[-8000%]"
          />
          <label
            htmlFor="threeMouth"
            className={`left-[50%]  ${
              time == 3 ? "scale-[80%]" : ""
            } shadow-md shadow-black absolute w-12 h-12 max-md:w-8  max-md:h-8 rounded-full  bg-accentColor cursor-pointer top-[10%]`}
          ></label>
          <p
            className={`left-[50%] ${
              time == 3 ? "text-accentColor textShadow" : ""
            } text-xl max-sm:text-sm font-bold absolute top-[40%] max-md:top-[30%] text-center translate-x-[-25%]`}
          >
            3<br /> Miesiące
          </p>

          <input
            id="sixMountch"
            name="radio"
            type="radio"
            value={times[2]}
            onChange={(e) => setTime(e.target.value)}
            className="translate-x-[-8000%]"
          />
          <label
            htmlFor="sixMountch"
            className={`left-[70%]   ${
              time == 6 ? "scale-[80%]" : ""
            } shadow-md shadow-black absolute w-12 h-12 max-md:w-8  max-md:h-8 rounded-full  bg-accentColor cursor-pointer top-[10%]`}
          ></label>
          <p
            className={`left-[70%] ${
              time == 6 ? "text-accentColor textShadow" : ""
            } text-xl max-sm:text-sm font-bold absolute top-[40%] max-md:top-[30%] text-center translate-x-[-25%]`}
          >
            6 <br />
            Miesięcy
          </p>

          <input
            id="twelveMonths"
            name="radio"
            type="radio"
            value={times[3]}
            onChange={(e) => setTime(e.target.value)}
            className="translate-x-[-8000%]"
          />
          <label
            htmlFor="twelveMonths"
            className={`left-[90%]   ${
              time == 12 ? "scale-[80%]" : ""
            } shadow-md shadow-black absolute w-12 h-12 max-md:w-8  max-md:h-8 rounded-full  bg-accentColor cursor-pointer top-[10%]`}
          ></label>
          <p
            className={`left-[90%] ${
              time == 12 ? "text-accentColor textShadow" : ""
            } text-xl  max-sm:text-sm font-bold absolute top-[40%] max-md:top-[30%] text-center translate-x-[-25%]`}
          >
            {" "}
            12
            <br /> Miesięcy
          </p>

          <div
            className={`absolute bg-prime h-5 w-5 max-md:h-3 max-md:w-3 rounded-full transform duration-300  translate-x-[73%] max-md:translate-x-[80%] max-md:translate-y-[-4px]  top-[18%] ${
              time == 1 ? "left-[30%]" : ""
            } 
          ${time == 3 ? "left-[50%]" : ""}
          ${time == 6 ? "left-[70%]" : ""}
          ${time == 12 ? "left-[90%]" : ""}
          `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OfferPriceSetter;
