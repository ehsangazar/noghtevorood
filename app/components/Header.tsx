import React from 'react';
import Image from 'next/image';

const Header = () => {
  const navLinks = ['About', 'Blog', 'Donate', 'Contact'];

  return (
    <header className="bg-black py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/channels4_profile.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation and Button */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white text-sm uppercase tracking-wide hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Episodes Button */}
          <button className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm uppercase tracking-wide font-medium transition-colors">
            EPISODES
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

