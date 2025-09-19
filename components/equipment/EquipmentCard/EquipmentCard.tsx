'use client';

import Image from 'next/image';
import styles from './EquipmentCard.module.scss';

interface VehicleSpecs {
  length?: string;
  capacity?: string;
  volume?: string;
  pallets?: string;
  bodyType?: string;
  container?: string;
  temperature?: string;
}

interface Vehicle {
  id: number;
  title: string;
  image: string;
  specs: VehicleSpecs;
}

interface EquipmentCardProps {
  vehicle: Vehicle;
}

export default function EquipmentCard({ vehicle }: EquipmentCardProps) {
  return (
    <div className={styles.equipmentCard}>
      <div className={styles.cardImage}>
        <Image
          src={vehicle.image}
          alt={vehicle.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className={styles.cardContent}>
        <h3>{vehicle.title}</h3>
        
        <div className={styles.specs}>
          {vehicle.specs.length && (
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Длина кузова:</span>
              <span className={styles.specValue}>{vehicle.specs.length}</span>
            </div>
          )}
          
          {vehicle.specs.capacity && (
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Грузоподъемность:</span>
              <span className={styles.specValue}>{vehicle.specs.capacity}</span>
            </div>
          )}
          
          {vehicle.specs.volume && (
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Объем:</span>
              <span className={styles.specValue}>{vehicle.specs.volume}</span>
            </div>
          )}
          
          {vehicle.specs.pallets && (
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Количество европаллет:</span>
              <span className={styles.specValue}>{vehicle.specs.pallets}</span>
            </div>
          )}
          
          {vehicle.specs.bodyType && (
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Тип кузова:</span>
              <span className={styles.specValue}>{vehicle.specs.bodyType}</span>
            </div>
          )}
          
          {vehicle.specs.container && (
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Контейнер:</span>
              <span className={styles.specValue}>{vehicle.specs.container}</span>
            </div>
          )}
          
          {vehicle.specs.temperature && (
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Температурный режим:</span>
              <span className={styles.specValue}>{vehicle.specs.temperature}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}