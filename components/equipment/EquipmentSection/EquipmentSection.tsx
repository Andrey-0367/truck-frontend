'use client';


import EquipmentCard from '../EquipmentCard/EquipmentCard';
import styles from './EquipmentSection.module.scss';

export default function EquipmentSection() {
  // Данные для карточек
  const containerTrucks = [
    {
      id: 1,
      title: "Контейнеровоз 40ft",
      image: "/container.jpg",
      specs: {
        length: "12.2 м",
        capacity: "28 т",
        volume: "67 м³",
        pallets: "22 европаллеты",
        bodyType: "Контейнерный",
        container: "40ft"
      }
    },
    {
      id: 2,
      title: "Контейнеровоз 20ft",
      image: "/cont-2.jpg",
      specs: {
        length: "6.1 м",
        capacity: "25 т",
        volume: "33 м³",
        pallets: "11 европаллет",
        bodyType: "Контейнерный",
        container: "20ft"
      }
    },
    {
      id: 3,
      title: "Контейнеровоз универсальный",
      image: "/cont-1.jpg",
      specs: {
        length: "13.6 м",
        capacity: "30 т",
        volume: "82 м³",
        pallets: "26 европаллет",
        bodyType: "Контейнерный",
        container: "40ft/20ft"
      }
    }
  ];

  const semiTrailers = [
    {
      id: 4,
      title: "Полуприцеп тентованный",
      image: "/car.jpg",
      specs: {
        length: "13.6 м",
        capacity: "22 т",
        volume: "82 м³",
        pallets: "33 европаллеты",
        bodyType: "Тентованный"
      }
    },
    {
      id: 5,
      title: "Полуприцеп рефрижератор",
      image: "/ref.jpeg",
      specs: {
        length: "13.6 м",
        capacity: "20 т",
        volume: "78 м³",
        pallets: "30 европаллет",
        bodyType: "Рефрижератор",
        temperature: "-25°C до +25°C"
      }
    },
    {
      id: 6,
      title: "Полуприцеп изотермический",
      image: "/isoterm.jpg",
      specs: {
        length: "13.6 м",
        capacity: "21 т",
        volume: "80 м³",
        pallets: "32 европаллеты",
        bodyType: "Изотермический"
      }
    },
    {
      id: 7,
      title: "Полуприцеп шторный",
      image: "/fura-3.jpg",
      specs: {
        length: "13.6 м",
        capacity: "22 т",
        volume: "82 м³",
        pallets: "33 европаллеты",
        bodyType: "Шторный"
      }
    }
  ];

  const gazelles = [
    {
      id: 8,
      title: "Газель NEXT",
      image: "/gaz-1.jpeg",
      specs: {
        length: "4.2 м",
        capacity: "1.5 т",
        volume: "11 м³",
        pallets: "6 европаллет",
        bodyType: "Тентованный"
      }
    },
    {
      id: 9,
      title: "Газель удлиненная",
      image: "/gazel.jpg",
      specs: {
        length: "6.0 м",
        capacity: "3.0 т",
        volume: "14 м³",
        pallets: "8 европаллет",
        bodyType: "Тентованный"
      }
    },
    {
      id: 10,
      title: "Газель рефрижератор",
      image: "/gaz-ref.jpg",
      specs: {
        length: "4.2 м",
        capacity: "1.3 т",
        volume: "9 м³",
        pallets: "5 европаллет",
        bodyType: "Рефрижератор",
        temperature: "-10°C до +10°C"
      }
    }
  ];

  return (
    <div className={styles.equipmentPage}>
      <h1>Наша техника</h1>
      
      <div className={styles.section} id="containers">
        <h2>Контейнерные перевозки</h2>
        <div className={styles.cardsContainer}>
          {containerTrucks.map(truck => (
            <EquipmentCard key={truck.id} vehicle={truck} />
          ))}
        </div>
      </div>
      
      <div className={styles.section} id="semi-trailers">
        <h2>Полуприцепы</h2>
        <div className={styles.cardsContainer}>
          {semiTrailers.map(trailer => (
            <EquipmentCard key={trailer.id} vehicle={trailer} />
          ))}
        </div>
      </div>
      
      <div className={styles.section}id="vans">
        <h2>Газели</h2>
        <div className={styles.cardsContainer}>
          {gazelles.map(gazelle => (
            <EquipmentCard key={gazelle.id} vehicle={gazelle} />
          ))}
        </div>
      </div>
    </div>
  );
}