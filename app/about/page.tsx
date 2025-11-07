import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Noghte Vorood Podcast',
  description: 'Learn more about Noghte Vorood, where deep conversations begin — about technology, society, creativity, and the future.',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                About Noghte Vorood
              </h1>
              <div className="w-24 h-1 bg-[#00704A] mx-auto mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed">
                پادکست نقطه‌ورود | Where Deep Conversations Begin
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white/5 rounded-2xl p-8 lg:p-12 mb-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/90 leading-relaxed mb-6">
                  <strong className="text-[#00704A]">NoghteVoroord</strong> (meaning "Entry Point") is where deep conversations begin — about technology, society, creativity, and the future.
                </p>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  Each episode features honest, thought-provoking discussions with guests from fields like startups, AI, design, marketing, and culture.
                </p>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  We explore how ideas shape our world, how technology impacts human experience, and how curiosity connects everything in between.
                </p>
                
                <div className="bg-[#00704A]/20 border-l-4 border-[#00704A] p-6 my-8 rounded">
                  <p className="text-white/90 leading-relaxed mb-0 text-lg">
                    🎧 Tune in for meaningful stories, new perspectives, and a fresh point of entry into the world of ideas.
                  </p>
                </div>
              </div>
            </div>

            {/* Hosts Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                Your Hosts
              </h2>
              <div className="space-y-8">
                {/* Ehsan Gazar */}
                <div className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src="/ehsan_gazar.png"
                        alt="Ehsan Gazar"
                        width={120}
                        height={120}
                        className="rounded-full object-cover ring-4 ring-[#00704A]/50"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">Ehsan Gazar</h3>
                      <p className="text-[#00704A] font-semibold mb-3">Principal Engineer | Staff Engineer | Technical Lead</p>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        Principal Engineer with 10+ years leading global distributed teams to deliver scalable fintech and eCommerce solutions used by millions. 
                        Proven record in cloud architecture, AI innovation, and mentoring engineers to senior levels. Expert in microservices, Kubernetes, and AWS/GCP 
                        with track record of 99.9%+ uptime and 40%+ performance improvements. Experienced in architecting systems that process billions in transactions 
                        while maintaining exceptional reliability.
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.linkedin.com/in/gazar/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          LinkedIn
                        </a>
                        <a
                          href="https://gazar.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#00704A] hover:bg-[#009962] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ali Parvizi */}
                <div className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src="/ali_parvizi.png"
                        alt="Ali Parvizi"
                        width={120}
                        height={120}
                        className="rounded-full object-cover ring-4 ring-[#00704A]/50"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">Ali Parvizi</h3>
                      <p className="text-[#00704A] font-semibold mb-3">Front-end focused Software Engineer</p>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        With +5 years of experience as a Front-End Developer, my expertise lies in JavaScript, HTML, CSS, modern libraries, and frameworks, 
                        as well as mobile-responsive web development. I am passionate about solving complex challenges using optimal methods to achieve superior 
                        performance and unwavering quality. Furthermore, I am dedicated to continuous growth and fostering seamless collaboration within teams, 
                        I relentlessly strive to deliver exceptional outcomes that surpass expectations.
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.linkedin.com/in/ali-parvizi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          LinkedIn
                        </a>
                        <a
                          href="https://aliparvizi.ir/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#00704A] hover:bg-[#009962] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-[#00704A]/20 to-[#009962]/20 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Join the Conversation
              </h3>
              <p className="text-white/80 mb-6">
                Have a guest suggestion? Want to be part of the show?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdffVEg5ced7XDQCdxlVoxWqlvMGoO_9d0l8Uh9IOmaVw9VOw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00704A] hover:bg-[#009962] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Nominate a Guest
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;

