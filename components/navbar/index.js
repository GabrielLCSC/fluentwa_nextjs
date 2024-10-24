'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './index.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 702) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`${
        isScrolled ? 'navbar navbar--scrolled' : 'navbar'
      } `}
    >
        <div className='navbar__left-side'>
          <Link className='navbar__left-side__link-logo' href="/">
            <Image
            className='navbar__logo'
              src="/images/logo.svg"
              width={44}
              height={44}
              alt='logo'
            />
          </Link>
          <div className="navbar__links">
            <Link href="/">À propos</Link>
            <Link href="/">Prix</Link>
            <Link href="/">Pédagogie</Link>
            <Link href="/">Programme</Link>
          </div>
        </div>
        <div className='navbar__right-side'>
          <Image
            src='/images/english-flag.svg'
            width={25}
            height={25}
            alt='english-flag'
          />
          <Link className='navbar__right-side__cta' href="/">En savoir plus</Link>
        </div>
        {/* Bouton pour mobile */}
        <button className="navbar__mobile-icon" onClick={toggleMobileMenu}>
          {/* Ici, tu peux ajouter l'icône que tu veux */}
          <Image
            src="/images/menu-icon.svg" // Remplace par ton icône
            width={30}
            height={30}
            alt="Menu Icon"
          />
        </button>

      {/* Menu mobile qui se déroule */}
      {isMobileMenuOpen && (
        <div className="navbar--mobile">
          <Link href="/">À propos</Link>
          <Link href="/">Prix</Link>
          <Link href="/">Pédagogie</Link>
          <Link href="/">Programme</Link>
          <Image
            src='/images/english-flag.svg'
            width={25}
            height={25}
            alt='english-flag'
          />
          <Link className='navbar__right-side__cta' href="/">En savoir plus</Link>
        </div>
      )}
    </nav>
  );
}
