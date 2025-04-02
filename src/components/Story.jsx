import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button2 from "./Button2";
const Story = () => {
  const frameRef = useRef("null");
  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          {" "}
          Talent Tai Chi
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="What we Pratice "
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div>
              <div>
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  width="1280"
                  height="720"
                  className="w-full h-full md:h-[500px] pt-5 object-cover md:object-contain"
                  src="/img/3.jpg"
                  alt="entrance"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>

        <div className=" flex  justify-center md:-mt-64 md:me-44 md:justify-end ">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <ul className="mt-3 max-w-sm list-disc text-center font-circular-web text-violet-50 md:text-start pl-5">
              <li>24 Simplified Tai Chi</li>
              <li>103 Traditional Yang-style Tai Chi</li>
              <li>30 Tianlin Style Tai Chi</li>
              <li>Tai Chi Kungfu Fan</li>
              <li>Other traditional forms</li>
            </ul>

            <Button2
              id="realm button"
              title="Join  Classes"
              containerClass="mt-5"
            ></Button2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
