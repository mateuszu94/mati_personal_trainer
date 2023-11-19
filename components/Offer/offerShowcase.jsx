"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSwipeable } from "react-swipeable";

const OfferShowcase = ({ text, bg, top, onDrag }) => {
  const [isMousePress, setIsMousePress] = useState(false);
  const divRef = useRef(null);
  const [coordX, setCoordX] = useState(0);

  const [centerX, setCenterX] = useState(0);
  const [divXPosition, setDivXPosition] = useState(0);
  const [offSetX, setOffSetX] = useState(0);
  const [isPassTheMiddle, setIsPassTheMiddle] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => onDrag(),
  });

  useEffect(() => {
    getDivXPosition();
    handleResize(); // Get initial center position

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", getDivXPosition);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handlePassTheMiddle();
  }, [divXPosition]);

  const handlePassTheMiddle = () => {
    if (centerX > divXPosition) {
      setIsPassTheMiddle(true);
      setIsMousePress(false);
      onDrag();
    }
  };

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    const centerXPosition = Math.floor(screenWidth / 2);
    setCenterX(centerXPosition);
  };

  const getDivXPosition = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setDivXPosition(rect.x);
    }
  };

  const handleMouseMove = (event) => {
    if (isMousePress === true) {
      if (coordX > event.clientX) {
        setOffSetX((event.clientX - coordX) / 10);
        getDivXPosition();
      }
    }
  };

  const handleMouseRelease = (event) => {
    setIsMousePress(false);
    setOffSetX(0);
    setCoordX(event.clientX);
  };

  const handleMousePress = (event) => {
    setIsMousePress(true);
    setCoordX(event.clientX);
  };

  const handleButtonOutClick = (event) => {
    onDrag();
    if (isPassTheMiddle) setIsPassTheMiddle(false);
    if (!isPassTheMiddle) setIsPassTheMiddle(true);
  };

  const divStylesOnEnter = {
    transform: ` rotateX(-12deg) `,
  };

  const divStylesOnMouseDown = {
    transform: ` rotateX(-12deg) translateX(${offSetX}%) `,
    transitionDuration: "0s",
  };

  const FinalDivStyle = {
    ...(mouseEnter ? divStylesOnEnter : {}),
    ...(isMousePress ? divStylesOnMouseDown : {}),
  };

  return (
    <div>
      <div
        {...handlers}
        onDrag={handleMouseMove}
        onMouseDown={handleMousePress}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseRelease}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`cursor-pointer border-2 border-slate-400 rounded-xl absolute h-[400px] textShadow text-center  flex-col transform skew-x-2 transition hover:z-50 hover:shadow-2xl    hover:shadow-slate-400   duration-1000 w-full z-20  bg-cover   translate-y-5 ease-in-out ${bg} ${top}   `}
        style={FinalDivStyle}
      >
        <div
          onClick={handleButtonOutClick}
          className="flex items-center text-[80px] hover:text-green-600 text-white w-[8%] h-[100%]  hover:cursor-pointer bg-black bg-opacity-70 rounded-md shadow-lg  shadow-black;"
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="absolute top-[50%] left-[20%]   text-white font-serif font-bold titleSize translate-y-[-50%]">
          <h2>{text}</h2>
        </div>
        <div
          ref={divRef}
          className="absolute h-full  w-2 right-[30%] top-0;"
        ></div>{" "}
      </div>

      <div>
        <div
          className={`absolute opacity-50 hidden top-0 h-[1400px] w-full overflow-hidden bg-black z-[80] `}
        ></div>
      </div>
    </div>
  );
};

export default OfferShowcase;
