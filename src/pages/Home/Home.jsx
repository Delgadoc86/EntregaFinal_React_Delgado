import React, { useRef } from 'react';
import Hero from '../../components/Hero/Hero';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = () => {
  const itemListRef = useRef(null);

  const irALista = () => {
    itemListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero irALista={irALista} />
      <div ref={itemListRef}>
        <ItemListContainer />
      </div>
    </>
  );
};

export default Home;
