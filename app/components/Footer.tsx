import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">
            © {new Date().getFullYear()} Noghte Vorood. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              About
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Contact
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


