'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from './CTAButton';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/approach', label: 'Approach' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-nl-cream/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2"
            aria-label="North & Line Home"
          >
            <span className="text-xl md:text-2xl font-medium tracking-tight">
              North & Line
            </span>
            <span className="plus-symbol w-4 h-4 text-nl-black transition-transform duration-300 group-hover:rotate-45" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <ul className="flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-caption uppercase tracking-wider transition-colors duration-300 relative
                      ${pathname === item.href 
                        ? 'text-nl-black' 
                        : 'text-nl-gray hover:text-nl-black'
                      }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-nl-black"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <CTAButton
              href="/contact"
              location="nav"
              variant="secondary"
              className="ml-4"
            >
              Book a call
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 w-full h-px bg-nl-black transition-all duration-300 ${
                  isMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-full h-px bg-nl-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-nl-black transition-all duration-300 ${
                  isMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-nl-cream border-t border-nl-light-gray overflow-hidden"
          >
            <ul className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block text-subhead ${
                      pathname === item.href ? 'text-nl-black' : 'text-nl-gray'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4 border-t border-nl-light-gray"
              >
                <CTAButton href="/contact" location="nav">
                  Book a call
                </CTAButton>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
