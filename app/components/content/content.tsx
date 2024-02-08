import React, { useState } from 'react';
import { BoxContent } from '../box/box-content';
import { Background } from '../background/background';
import Head from "next/head";
import styles from './Content.module.scss'; 
import Button from '../button/button';

export const Content: React.FC = () => {
  const [yesModalOpen, setModalOpen] = useState(false);
  const [noModalOpen, setNoModalOpen] = useState(false);


  const handleYesOpenModal = () => {
    setModalOpen(true);
  }


  const handleNoOpenModal = () => {
    setNoModalOpen(true);
  }

  return (
    <Background>
      <Head>
        <title>Home</title>
      </Head>
      
      <div className={styles.centeredContent}> 
        <Button text='Sim' onClick={handleYesOpenModal} />
        <BoxContent isOpen={yesModalOpen} onClose={() => setModalOpen(false)} title={"Box title"} >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </BoxContent>
        <Button text='Não' onClick={handleNoOpenModal} backgroundColor='#ea4335' hoverColor='#ea4335'/>
        <BoxContent isOpen={noModalOpen} onClose={() => setNoModalOpen(false)} title={":("} >
          <p>Pensa bem em</p>
          <p>Vou te dar outra chance</p>

        </BoxContent>
      </div>
    </Background>
  );
};
