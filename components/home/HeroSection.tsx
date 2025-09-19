'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Когда проснулся на зимнике, главное не перепутать направление!";

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
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 120);

      return () => clearInterval(typingInterval);
    }, 2000);

    return () => clearTimeout(timer);
  }, [fullText]);

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/car.jpg"
          alt="Грузовик на зимнике"
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        
        <div className={styles.textContainer}>
          <h1 className={`${styles.animatedText} ${isTypingComplete ? styles.complete : ''}`}>
            {displayText}
            {!isTypingComplete && <span className={styles.cursor}></span>}
          </h1>
        </div>
      </div>
      
      <div className={styles.bottomTextWrapper}>
        <div className={styles.bottomText}>
          <p>
            Мы предоставляем надежные грузоперевозки в любых условиях. 
            Наш опыт и современная техника позволяют доставлять грузы 
            даже в самых сложных погодных условиях и по труднодоступным маршрутам.
          </p>
        </div>
      </div>

      {/* Блок с карточками */}
      <div className={styles.cardsSection}>
        <h2 className={styles.cardsTitle}>Основные услуги TruckCompany</h2>
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