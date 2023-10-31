"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Button } from "./button";

const VideoButton = ({
  videoName,
  text,
  buttonText,
  title,
  link,
  buttonColor,
  buttonColorHover,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [overlayON, setOverlayON] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
        setOverlayON(false);
      } else {
        videoRef.current.pause();
        setOverlayON(true);
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isClient) {
    return <div></div>;
  }

  return (
    <div
      onMouseEnter={togglePlay}
      onMouseLeave={togglePlay}
      className="relative w-2/4 max-sm:w-full text-center justify-center items-center"
    >
      <video ref={videoRef} loop muted className="w-full h-full object-cover">
        <source src={videoName} type="video/mp4" />
      </video>
      <div className="z-10 absolute top-2 w-full right-1/2 text-white font-bold titleSize translate-y-1/2 translate-x-1/2">
        <h2>{title}</h2>
      </div>
      <div className="2xl:leading-10 xl:leading-6 max-xs:text-[8px] w-full xl:text-[20px] text-xs z-10 absolute top-1/3 right-1/2 text-gray-100 translate-x-1/2 2xl:text-[30px]">
        <p>{text}</p>
      </div>
      <div className="absolute z-10 w-32 h-10 top-[80%] shadow-md shadow-white left-1/2 translate-x-[-50%] max-sm:w-full text-center justify-center items-center">
        <Button
          className={`${buttonColor} ${buttonColorHover} text-white hover:text-accentColor w-full h-full border-t-2 border-r-2 hover:border-b-2 hover:border-l-2 hover:border-r-0 hover:border-t-0  `}
          aschild
        >
          {" "}
          <Link href={link}> {buttonText}</Link>
        </Button>
      </div>
      {overlayON ? (
        <div className="absolute inset-0 bg-black opacity-60"></div>
      ) : (
        <div className="absolute inset-0 bg-black opacity-25"></div>
      )}
    </div>
  );
};

export default VideoButton;
