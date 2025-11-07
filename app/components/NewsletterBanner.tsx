'use client';

import React, { useState } from 'react';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Create a hidden iframe to submit to Substack
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'substack-iframe';
      document.body.appendChild(iframe);

      // Create and submit form
      const form = document.createElement('form');
      form.action = 'https://noghtevorood.substack.com/subscribe';
      form.method = 'POST';
      form.target = 'substack-iframe';

      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'email';
      emailInput.value = email;
      form.appendChild(emailInput);

      document.body.appendChild(form);
      form.submit();

      // Clean up and show success
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setStatus('success');
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, 1000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Receive new episodes in your inbox.
          </h2>
          <p className="text-white/70 mb-8">
            Stay updated with the latest episodes and never miss a release. Subscribe to our newsletter!
          </p>
          
          {/* Custom Substack Form with Dark Theme */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#00704A] focus:ring-2 focus:ring-[#00704A]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-[#00704A] hover:bg-[#009962] disabled:bg-[#00704A]/50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                {status === 'loading' && (
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {status === 'success' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {status === 'idle' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                <span>
                  {status === 'loading' && 'Subscribing...'}
                  {status === 'success' && 'Subscribed! Check your email'}
                  {status === 'error' && 'Try again'}
                  {status === 'idle' && 'Subscribe Now'}
                </span>
              </button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-4 bg-[#00704A]/20 border border-[#00704A] rounded-lg">
                <p className="text-[#00704A] text-sm font-medium">
                  🎉 Successfully subscribed! Please check your email to confirm.
                </p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                <p className="text-red-400 text-sm font-medium">
                  Something went wrong. Please try again or visit our Substack directly.
                </p>
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-white/50 text-xs mt-4">
              Powered by <a href="https://noghtevorood.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00704A] transition-colors underline">Substack</a>. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;

