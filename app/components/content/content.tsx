import React, { useState } from 'react';
import { BoxContent } from '../box/box-content';
import { Background } from '../background/background';
import Head from "next/head";

export const Content: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Background>
      <Head>
        <title>Home</title>
      </Head>
      <BoxContent isOpen={modalOpen} onClose={() => setModalOpen(false)} title={"Box title"} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BoxContent>
      <button onClick={() => setModalOpen(true)}>abrir modal</button>
    </Background>
  );
};
