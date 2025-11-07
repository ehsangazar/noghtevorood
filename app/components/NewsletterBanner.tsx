import React from 'react';

const NewsletterBanner = () => {
  return (
    <section className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Receive new episodes in your inbox.
          </h2>
          <p className="text-white/70 mb-8">
            Stay updated with the latest episodes and never miss a release.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-green-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;

