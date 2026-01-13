'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Style', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Scissors className="h-8 w-8 text-blue-800 transform group-hover:rotate-180 transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-900/20 blur-xl group-hover:bg-blue-800/40 transition-all duration-500" />
            </div>
            <span className="text-2xl font-bold text-blue-800 tracking-wider">
              BLUE<span className="text-gray-300">DIAMOND</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group',
                  pathname === link.path
                    ? 'text-blue-800'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 bg-blue-800 transition-all duration-300',
                    pathname === link.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-blue-800 text-black font-semibold rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-800/50"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden bg-black/98 backdrop-blur-md',
          isMobileMenuOpen ? 'max-h-96 border-t border-blue-800/20' : 'max-h-0'
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'block px-4 py-3 rounded-lg transition-all duration-300',
                pathname === link.path
                  ? 'bg-blue-800/10 text-gray-300  border-l-4 border-blue-800 bg-blue-800'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full px-4 py-3 bg-blue-800 text-black font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 text-center mt-4"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
