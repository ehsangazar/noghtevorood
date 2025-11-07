import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Episodes', href: '/episodes' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
  ];

  return (
    <header className="bg-black py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/channels4_profile.jpg"
            alt="Noghte Vorood Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation and Button */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-sm uppercase tracking-wide hover:text-[#00704A] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

