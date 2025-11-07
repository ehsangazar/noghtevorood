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
              NoghteVoroord (meaning "Entry Point") is where deep conversations begin — about technology, society, creativity, and the future. 
              A <span className="text-[#00704A] font-semibold">Farsi-speaking podcast</span> exploring how ideas shape our world, how technology impacts human experience, and how curiosity connects everything in between.
            </p>
            <p className="text-base lg:text-lg text-[#00704A] font-medium mt-4 max-w-2xl mx-auto lg:mx-0">
              🎧 Tune in for meaningful stories, new perspectives, and a fresh point of entry into the world of ideas.
            </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <a
              href="https://www.youtube.com/@noghte_vorood"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00704A] hover:bg-[#009962] text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </a>
            <a
              href="/episodes"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00704A]"
            >
              Browse Episodes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          </div>

          {/* Right Side - Co-Podcasters */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              {/* Co-Podcasters Grid */}
              <div className="space-y-6">
                {/* Ehsan Gazar */}
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src="/ehsan_gazar.png"
                        alt="Ehsan Gazar"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-[#00704A]/50 group-hover:ring-[#00704A] transition-all"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">Ehsan Gazar</h3>
                      <p className="text-sm text-white/70 mb-2">Principal Engineer | Technical Lead</p>
                      <div className="flex gap-2">
                        <a
                          href="https://www.linkedin.com/in/gazar/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-[#00704A] transition-colors"
                          aria-label="Ehsan's LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a
                          href="https://gazar.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-[#00704A] transition-colors"
                          aria-label="Ehsan's Website"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ali Parvizi */}
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src="/ali_parvizi.png"
                        alt="Ali Parvizi"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-[#00704A]/50 group-hover:ring-[#00704A] transition-all"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">Ali Parvizi</h3>
                      <p className="text-sm text-white/70 mb-2">Front-end Software Engineer</p>
                      <div className="flex gap-2">
                        <a
                          href="https://www.linkedin.com/in/ali-parvizi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-[#00704A] transition-colors"
                          aria-label="Ali's LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a
                          href="https://aliparvizi.ir/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-[#00704A] transition-colors"
                          aria-label="Ali's Website"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hosted By Label */}
                <div className="text-center pt-4">
                  <p className="text-white/50 text-sm">Your Hosts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

