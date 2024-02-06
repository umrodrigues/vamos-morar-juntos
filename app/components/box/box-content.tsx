import React, { PropsWithChildren, useEffect } from 'react';
import styles from './BoxContent.module.scss';

interface BoxProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const BoxContent: React.FC<BoxProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && event.target instanceof HTMLElement && !event.target.closest(`.${styles.box}`)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${styles.mobileOverlay}`}>
      <div className={`${styles.box} ${styles.mobileBox}`}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>Fechar</button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
