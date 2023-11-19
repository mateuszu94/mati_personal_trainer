"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import Link from "next/link";

export const VideoButton = ({
  videoLink,
  buttonText,
  buttonLink,
  text,
  title,
}) => {
  const [playing, setPlaying] = useState(false);
  const [overlay, setoverlay] = useState(true);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setPlaying(true);
    setoverlay(false);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    setoverlay(true);
  };
  useEffect(() => {
    // Use the videoRef to control video playback
    if (videoRef.current) {
      if (playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing]);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center w-full lg:h-full md:h-1/2 max-sm:h-full"
    >
      <video ref={videoRef} className="w-full object-cover  h-full " loop muted>
        <source src={videoLink} type="video/mp4" />
      </video>
      <div className="text-white  absolute z-30  gap-20 sm:gap-5 max-sm:gap-10 text-center flex  flex-col items-center top-10">
        <h2 className="titleSize textShadow">{title}</h2>
        <p className="subtitleSize textShadow">{text}</p>
        <div className=" w-1/3  duration-300 ease-in-out textShadow  hover:border-green-600  shadow-lg shadow-white border-t-4 border-l-4 border-accentColor hover:border-t-0 hover:border-l-0  hover:border-b-4 hover:border-r-4">
          <Link href={buttonLink}>
            <p className="subtitleSize p-3  max-sm:p-3">{buttonText}</p>
          </Link>
        </div>
      </div>
      {overlay ? (
        <div className="bg-black w-full h-full absolute opacity-50"></div>
      ) : (
        <div className="bg-black w-full h-full absolute opacity-10"></div>
      )}
    </div>
  );
};
