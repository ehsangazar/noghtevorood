import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Noghte Vorood</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Where deep conversations begin — about technology, society, creativity, and the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                About
              </Link>
              <Link href="/speakers" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                Speakers
              </Link>
              <Link href="/episodes" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                Episodes
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                Privacy
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@noghtevorood.com" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                info@noghtevorood.com
              </a>
              <a href="https://noghtevorood.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                Newsletter
              </a>
              <a href="https://t.me/noghtevoroodpodcast" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                Telegram Community
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdffVEg5ced7XDQCdxlVoxWqlvMGoO_9d0l8Uh9IOmaVw9VOw/viewform" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#00704A] text-sm transition-colors">
                Nominate a Guest
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/70 text-sm">
              © {new Date().getFullYear()} Noghte Vorood. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.youtube.com/@noghte_vorood" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://t.me/noghtevoroodpodcast" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Telegram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.035 15.448l-.375 5.297c.536 0 .769-.229 1.046-.504l2.512-2.42 5.205 3.81c.954.526 1.63.25 1.891-.884l3.428-16.05.001-.002c.304-1.417-.512-1.97-1.443-1.622L1.12 9.37C-.264 9.904-.243 10.675.883 11l5.385 1.585L19.26 5.26c.598-.366 1.143-.163.695.203"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


