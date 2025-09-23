'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.scss';
import PalladLogo from '../PalladLogo/PalladLogo';

export default function HeroSection() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Данные для карточек
  const cards = [
    {
      id: 1,
      title: "Перевозка контейнеров",
      image: "/container.jpg",
      link: "/equipment"
    },
    {
      id: 2,
      title: "Полуприцепы",
      image: "/fura.jpg",
      link: "/equipment"
    },
    {
      id: 3,
      title: "Газель",
      image: "/gazel.jpg",
      link: "/equipment"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/panorama.jpg"
          alt="Грузовик на зимнике"
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        
        {/* Логотип поверх изображения */}
        <div className={styles.logoContainer}>
          <PalladLogo 
            className={styles.mainLogo}
          />
        </div>

 
      </div>
      
      <div className={styles.bottomTextWrapper}>
        <div className={`${styles.bottomText} ${isTextVisible ? styles.visible : ''}`}>
          <p>
            Мы предоставляем надежные грузоперевозки в любых условиях. 
            Наш опыт и современная техника позволяют доставлять грузы 
            даже в самых сложных погодных условиях и по труднодоступным маршрутам.
          </p>
        </div>
      </div>

      {/* Блок с карточками */}
      <div className={styles.cardsSection}>
        <h2 className={styles.cardsTitle}>Основные услуги PALLADIUM</h2>
        <div className={styles.cardsContainer}>
          {cards.map(card => (
            <Link key={card.id} href={card.link} className={styles.card}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}></div>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}