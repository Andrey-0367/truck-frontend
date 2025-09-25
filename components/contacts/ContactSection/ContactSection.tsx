'use client';

import ContactForm from '../ContactForm/ContactForm';
import { YandexMap } from '../YandexMap/YandexMap';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <div className={styles.contactPage}>
      <h1>Контакты</h1>
      
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Наши реквизиты</h2>
          
          <div className={styles.infoItem}>
            <h3>Адрес</h3>
            <p>141282, Московская область, г Ивантеевка, ул Толмачева, д. 27/14 </p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Телефон</h3>
            <p>
              <a href="tel:+73952123456" className={styles.phoneLink}>
                +7 (3952) 123-456
              </a>
            </p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>info@pdtrans.ru.</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Режим работы</h3>
            <p>Без выходных</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Реквизиты</h3>
            <p>ООО «ТК Палладиум»</p>
            <p>ИНН/КПП: 5038194273/503801001</p>
            <p>ОГРН: 1255000084085</p>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <ContactForm />
        </div>
      </div>
      
      <div className={styles.mapSection}>
        <h2>Мы на карте</h2>
        <div className={styles.mapContainer}>
          <YandexMap />
        </div>
      </div>
    </div>
  );
}