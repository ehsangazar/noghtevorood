import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Noghte Vorood Podcast',
  description: 'Get in touch with Noghte Vorood podcast team.',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <div className="w-24 h-1 bg-[#00704A] mx-auto mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed">
                We'd love to hear from you. Send us a message!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Email Card */}
              <div className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-[#00704A] rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Email Us</h3>
                <p className="text-white/70 text-center mb-4">
                  For general inquiries and collaboration opportunities
                </p>
                <a
                  href="mailto:info@noghtevorood.com"
                  className="block text-center text-[#00704A] hover:text-[#009962] font-semibold transition-colors"
                >
                  info@noghtevorood.com
                </a>
              </div>

              {/* Guest Nomination Card */}
              <div className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-[#00704A] rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Nominate a Guest</h3>
                <p className="text-white/70 text-center mb-4">
                  Know someone who would be a great fit for the podcast?
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdffVEg5ced7XDQCdxlVoxWqlvMGoO_9d0l8Uh9IOmaVw9VOw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[#00704A] hover:text-[#009962] font-semibold transition-colors"
                >
                  Submit Nomination →
                </a>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="bg-gradient-to-r from-[#00704A]/20 to-[#009962]/20 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
                Stay Connected
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@noghte_vorood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">YouTube</h4>
                    <p className="text-white/70 text-sm">Watch full episodes</p>
                  </div>
                </a>

                {/* Newsletter */}
                <a
                  href="https://noghtevorood.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all"
                >
                  <div className="w-12 h-12 bg-[#00704A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Newsletter</h4>
                    <p className="text-white/70 text-sm">Get updates via email</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

