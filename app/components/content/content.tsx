import React, { useState } from 'react';
import { BoxContent } from '../box/box-content';
import { Background } from '../background/background';
import Head from "next/head";
import styles from './Content.module.scss'; 

export const Content: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  return (
    <Background>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.centeredContent}> 
        <BoxContent isOpen={modalOpen} onClose={() => setModalOpen(false)} title={"Box title"} >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </BoxContent>
        <button onClick={handleOpenModal} className={styles.button} >abrir modal</button>
      </div>
    </Background>
  );
};
