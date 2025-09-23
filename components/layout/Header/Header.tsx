'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          PALLADIUM
        </Link>
        
        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Главная
          </Link>
          <Link href="/equipment" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Техника
          </Link>
          <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}