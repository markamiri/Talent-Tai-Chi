import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useState } from "react";
import { useRef } from "react";
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg ) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        controls={false}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">
            {title.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}{" "}
          </h1>
        </div>
        {description && (
          <div className="mt-3 max-w-64 space-y-3 text-xs leading-relaxed md:text-base ">
            {description.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
      {title}
    </div>
  );
};

const BentoCardImage = ({ src, title, description }) => {
  return (
    <div>
      {/* Image with title overlaid */}
      <div className="relative w-full h-[400px]">
        {" "}
        {/* or use size-full if defined elsewhere */}
        <img
          src={src}
          alt={title}
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-10 flex h-full flex-col justify-between p-5 text-blue-50">
          <h1 className="bento-title special-font">{title}</h1>
        </div>
      </div>

      {/* Description moved below image */}
      {description && (
        <div className="mt-3 space-y-3 leading-relaxed text-blue-50 md:text-base">
          {description.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-24">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Talent TaiChi Society is a non profit organization
          </p>

          <p className="max-w-md font-circular-web text-xl text-blue-50 opacity-50">
            Through education, and community engagement we aim to enrich lives,
            foster wellness and cultivate a deeper connection between
            individuals and the rich heritage of China.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          {" "}
          <BentoCard
            src="videos/feature-6.MP4"
            title={`Improve physical health, \n mental clarity, \n and emotional balance.`}
            description={`With authentic 5th-generation Yang Style Tai Chi`}
          />
        </BentoTilt>
        <div className="grid  grid-cols-2 grid-rows-1 gap-7">
          <BentoTilt className="bento-tilt_1 md:col-span-1 ">
            <BentoCardImage
              src="img/1.jpg"
              title={`Tai Chi welcomes everyone`}
              description={`Any\n Age \n Culture \n Ability or Experience.
                `}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
            <BentoCardImage
              src="img/2.webp"
              title={<>Our Lineage</>}
              description={` We follow Master Tiancai Li, \n A 5th-generation Yang-style master, \n Direct Disciple of Grandmaster Yang Zhenduo, \n To preserve the true spirit of traditional Tai Chi.`}
            />
          </BentoTilt>

          {/* 
<BentoTilt className="bento-tilt_2">
  <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
    <h1 className="bento-title special-font max-w-64 text-black">
      More coming Soon!
    </h1>

    <TiLocationArrow className="m-5 scale-[5] self-end" />
  </div>
</BentoTilt>

<BentoTilt className="bento-tilt_2">
  <video
    src="videos/feature-5.mp4"
    loop
    autoPlay
    muted
    className="size-full object-cover object-center"
  ></video>
</BentoTilt>
*/}
        </div>
      </div>
    </section>
  );
};

export default Features;
