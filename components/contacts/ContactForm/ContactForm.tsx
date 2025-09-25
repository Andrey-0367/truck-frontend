"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";
import { IMaskInput } from "react-imask";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isRobot, setIsRobot] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    setPhoneError("");
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.phone.length < 18) {
    setPhoneError("Пожалуйста, введите корректный номер телефона");
    return;
  }

  try {
    const response = await fetch('/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsRobot(false);
      setIsAgreed(false);
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert("Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.");
  }
};

  return (
    <div className={styles.contactForm}>
      <h2>Оставьте заявку</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <IMaskInput
            mask="+7 (000) 000-00-00"
            value={formData.phone}
            onAccept={handlePhoneChange}
            placeholder="+7 (___) ___-__-__"
            type="tel"
            required
            className={styles.input}
          />
          {phoneError && <div className={styles.error}>{phoneError}</div>}
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            placeholder="Текст сообщения"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.robotCheck}>
          <label>
            <input
              type="checkbox"
              checked={isRobot}
              onChange={(e) => setIsRobot(e.target.checked)}
              required
            />
            Я не робот
          </label>
        </div>

        <div className={styles.agreement}>
          <label>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              required
            />
            Я согласен на{" "}
            <span
              className={styles.policyLink}
              onClick={() => setShowPolicy(true)}
            >
              обработку персональных данных
            </span>
          </label>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isRobot || !isAgreed || !!phoneError}
        >
          Оставить заявку
        </button>
      </form>

      {showPolicy && (
        <div className={styles.modal} onClick={() => setShowPolicy(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Политика обработки персональных данных</h3>
            <div className={styles.policyText}>
              <p>1. Общие положения</p>
              <p>
                Настоящая политика обработки персональных данных составлена в
                соответствии с требованиями Федерального закона от 27.07.2006
                №152-ФЗ «О персональных данных» и определяет порядок обработки
                персональных данных и меры по обеспечению безопасности
                персональных данных.
              </p>

              <p>2. Основные понятия, используемые в Политике</p>
              <p>
                Автоматизированная обработка персональных данных — обработка
                персональных данных с помощью средств вычислительной техники.
              </p>

              <p>
                3. Оператор может обрабатывать следующие персональные данные
                Пользователя
              </p>
              <p>
                Фамилия, имя, отчество; Номер телефона; Адрес электронной почты;
                Также на сайте происходит сбор и обработка обезличенных данных о
                посетителях (в т.ч. файлов «cookie») с помощью сервисов
                интернет-статистики.
              </p>

              <p>4. Цели обработки персональных данных</p>
              <p>
                Цель обработки персональных данных Пользователя — заключение,
                исполнение и прекращение гражданско-правовых договоров;
                предоставление доступа Пользователю к сервисам, информации и/или
                материалам, содержащимся на веб-сайте; уточнение деталей заказа.
              </p>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setShowPolicy(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
