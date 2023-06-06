import { useEffect, useRef, useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { PortfolioI } from './components/PortfolioI';
import { PortfolioII } from './components/PortfolioII';




export const App = () => {

const [slide, setSlide] = useState('');


  const focusAbout = useRef(null);
  const focusStack = useRef(null);
  const focusPortfolioI = useRef(null);
  const focusPortfolioII = useRef(null);
  const focusContact = useRef(null);

  const handleChangeFocus = (event, elem) => {
    elem.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
    setSlide(elem.current.className);
  }

  return (
    <>
      <section className="intro container">
        <Header handleChangeFocus={handleChangeFocus} focusAbout={focusAbout} focusStack={focusStack} />
        <Intro handleChangeFocus={handleChangeFocus} focusAbout={focusAbout} />
      </section>

      <section className="about container" ref={focusAbout}>
        <About focusStack={focusStack} handleChangeFocus={handleChangeFocus} slide={slide} />
      </section>

      <section className="stack container" ref={focusStack}>
        <Stack handleChangeFocus={handleChangeFocus} focusPortfolio={focusPortfolioI} slide={slide} />
      </section>
      
      <section className="portfolio-i container" ref={focusPortfolioI}>
        <PortfolioI handleChangeFocus={handleChangeFocus} focusPortfolioII={focusPortfolioII} slide={slide} />
      </section>

      <section className="portfolio-ii container" ref={focusPortfolioII}>
        <PortfolioII handleChangeFocus={handleChangeFocus} focusContact={focusContact} slide={slide} />
      </section>

      <section className="contact" ref={focusContact}>
        <div className="container">
          Contacts
        </div>
      </section>
    </>
  );
}


