import React, { ReactNode } from 'react';
import Image from 'next/image'; 
import styles from './Background.module.scss';

interface BackgroundProps {
  children: ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className={styles.background}>
      <Image
        src="/background.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.overlay}>
        {children}
      </div>
    </div>
  );
};
