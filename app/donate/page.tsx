import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate - Noghte Vorood Podcast',
  description: 'Support Noghte Vorood podcast and help us create more amazing content.',
};

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Support Our Podcast
              </h1>
              <div className="w-24 h-1 bg-[#00704A] mx-auto mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed">
                Help us continue creating meaningful conversations
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white/5 rounded-2xl p-8 lg:p-12 mb-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/90 leading-relaxed mb-6 text-center">
                  Noghte Vorood is an independent podcast created with passion and dedication. 
                  Your support helps us continue bringing you quality content, meaningful conversations, 
                  and diverse perspectives from amazing guests.
                </p>
                
                <div className="bg-[#00704A]/20 border-l-4 border-[#00704A] p-6 my-8 rounded">
                  <p className="text-white/90 leading-relaxed mb-4">
                    <strong>Your contributions help us:</strong>
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>✅ Improve audio and video production quality</li>
                    <li>✅ Cover hosting and distribution costs</li>
                    <li>✅ Invest in better equipment</li>
                    <li>✅ Bring more diverse guests to the show</li>
                    <li>✅ Create additional content and resources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Donation CTA */}
            <div className="bg-gradient-to-r from-[#00704A]/20 to-[#009962]/20 rounded-2xl p-8 lg:p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00704A] rounded-full mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Make a Difference Today
                </h3>
                <p className="text-white/80 mb-8">
                  Every contribution, no matter the size, makes a real impact and helps us grow.
                </p>
              </div>

              <a
                href="https://github.com/sponsors/ehsangazar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#00704A] hover:bg-[#009962] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Support via GitHub Sponsors</span>
              </a>

              <p className="text-white/60 text-sm mt-6">
                Thank you for being part of our journey! 🙏
              </p>
            </div>

            {/* Alternative Support */}
            <div className="mt-12 bg-white/5 rounded-xl p-8 text-center">
              <h4 className="text-xl font-semibold text-white mb-4">
                Other Ways to Support
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-4">
                  <div className="text-3xl mb-2">📢</div>
                  <p className="text-white/80 text-sm">
                    Share episodes with friends and family
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">⭐</div>
                  <p className="text-white/80 text-sm">
                    Leave a review on Apple Podcasts or Spotify
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">💬</div>
                  <p className="text-white/80 text-sm">
                    Engage with us on social media
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonatePage;

