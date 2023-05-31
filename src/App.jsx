import { useRef, useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Stack } from './components/Stack';

export const App = () => {

  const focusAbout = useRef(null);
  const focusStack = useRef(null);
  const focusPortfolio = useRef(null);

  const handleChangeFocus = (event, elem) => {
    elem.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }




  return (
    <>
      <section className="intro">
        <Header handleChangeFocus={handleChangeFocus} focusAbout={focusAbout} focusStack={focusStack} />
        <Intro handleChangeFocus={handleChangeFocus} focusAbout={focusAbout} />
      </section>

      <section className="about" ref={focusAbout}>
        <About focusStack={focusStack} handleChangeFocus={handleChangeFocus} />
      </section>

      <section className="stack" ref={focusStack}>
        <Stack handleChangeFocus={handleChangeFocus} focusPortfolio={focusPortfolio}/>
      </section>
      
      <section className="portfolio" ref={focusPortfolio}>
        <div className="container">
        Portfolio
        </div>
      </section>
      <section className="contact">
        <div className="container">
          Contacts
        </div>
      </section>
    </>
  );
}


