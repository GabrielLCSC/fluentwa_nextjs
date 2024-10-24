'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './index.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={`${
        isScrolled ? 'navbar navbar--scrolled' : 'navbar'
      } `}
    >
        <div className='navbar__left-side'>
            <Link href="/">
                <Image
                    src="/images/logo.svg"
                    width={44}
                    height={44}
                    alt='logo'
                />
            </Link>
            <Link href="/">À propos</Link>
            <Link href="/">Prix</Link>
            <Link href="/">Pédagogie</Link>
            <Link href="/">Programme</Link>
        </div>
        <div className='navbar__right-side'>
            <Image
            src='images/english-flag.svg'
            width={25}
            height={25}
            alt='english-flag'
            />
            <Link className='navbar__right-side__cta' href="/">En savoir plus</Link>
        </div>
     
    </nav>
  );
};


