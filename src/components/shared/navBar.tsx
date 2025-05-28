'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'A propros', href: '#home' },
  { label: 'Iyara ', href: '#transport' },
  { label: 'Mirobex', href: '#technology' },
  { label: 'Squirel', href: '#consulting' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 lg:px-20 px-6 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={70} height={70}/>
        </Link>
       
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-semibold hover:text-amber-500 transition-colors duration-300 ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-[#1B263B]'
              }`}
            >
              {item.label}
            </a>
          ))}
          
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X 
              className={`h-6 w-6 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} 
            />
          ) : (
            <Menu 
              className={`h-6 w-6 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} 
            />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 font-medium hover:text-amber-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
        
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;