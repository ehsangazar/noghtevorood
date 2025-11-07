import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const title = "Noghte Vorood";
  
  const splitText = (text: string) => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="inline-block w-4">&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className="split-text-char"
          style={{ animationDelay: `${index * 0.03}s` }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              {splitText(title)}
              <span className="title-underline">
                <svg viewBox="0 0 500 15" preserveAspectRatio="none">
                  {/* Main brush stroke */}
                  <path 
                    className="brush-stroke-main"
                    d="M5,10 Q30,8 60,9.5 Q90,11 120,10 Q150,9 180,10.5 Q210,12 240,10 Q270,8 300,9.5 Q330,11 360,10 Q390,9 420,10.5 Q450,12 480,10 Q495,9 500,9.5" 
                  />
                  {/* Texture layer 1 - darker */}
                  <path 
                    className="brush-stroke-texture-1"
                    d="M8,10.5 Q35,8.5 65,10 Q95,11.5 125,9.5 Q155,8.5 185,11 Q215,12.5 245,9.5 Q275,8 305,10 Q335,11.5 365,9.5 Q395,8.5 425,11 Q455,12.5 485,9.5 Q498,9 500,10" 
                  />
                  {/* Texture layer 2 - lighter */}
                  <path 
                    className="brush-stroke-texture-2"
                    d="M3,9.5 Q28,7.5 58,9 Q88,10.5 118,9 Q148,8 178,10 Q208,11.5 238,9 Q268,7.5 298,9 Q328,10.5 358,9 Q388,8 418,10 Q448,11.5 478,9 Q493,8.5 500,9" 
                  />
                  {/* Highlight layer */}
                  <path 
                    className="brush-stroke-highlight"
                    d="M10,9 Q40,7 70,8.5 Q100,10 130,8.5 Q160,7.5 190,9.5 Q220,11 250,8.5 Q280,7 310,8.5 Q340,10 370,8.5 Q400,7.5 430,9.5 Q460,11 490,8.5" 
                  />
                </svg>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              "Noghteye Vorood" is a podcast on programming, emerging tech, career paths, and startups. 
              We explore real experiences, personal journeys, and views on the future of software and AI.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/personal.webp"
                  alt="Hero Image"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

