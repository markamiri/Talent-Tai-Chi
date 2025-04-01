import React, { useState, useEffect } from "react";
import Button2 from "./Button2";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const totalImages = 4;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getImageSrc = (index) => `img/hero-${index}.webp`;

  // Auto-cycle slideshow every 5 seconds (after load)
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex % totalImages) + 1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Small non-blocking loader */}
      {isLoading && (
        <div className="absolute top-4 right-4 z-[999] text-sm text-blue-100">
          Loading...
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Background hero image */}
        <img
          src={getImageSrc(currentIndex)}
          alt={`Hero Slide ${currentIndex}`}
          loading="eager"
          width="1920"
          height="1080"
          className={`absolute left-0 top-0 size-full object-cover object-center transition-opacity duration-700 ${
            isLoading ? "blur-sm" : "blur-0"
          }`}
          onLoad={handleImageLoad}
        />

        {/* Top heading */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          SOCIETY
        </h1>

        {/* Overlay text content */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              TALENT TAICHI
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-lg text-blue-100">
              Find your flow and find balance <br /> peace and happiness.
            </p>
            <Button2
              id="join-class"
              title=" Join Class"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-[#AA0114] flex-center gap-1"
            />
          </div>
        </div>
      </div>

      {/* Duplicate heading for overlay? You can remove if not needed */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        SOCIETY
      </h1>
    </div>
  );
};

export default Hero;
