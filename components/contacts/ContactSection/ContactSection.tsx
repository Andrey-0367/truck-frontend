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
            <p>г. Москва, ул. Ленина, д. 1</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Телефон</h3>
            <p>+7 (3952) 123-456</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>info@truckcompany.ru</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Режим работы</h3>
            <p>Без выходных</p>
          </div>
          
          <div className={styles.infoItem}>
            <h3>Реквизиты</h3>
            <p>ООО "ТракКомпани"</p>
            <p>ИНН: 1234567890</p>
            <p>ОГРН: 1234567890123</p>
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