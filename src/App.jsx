import { useEffect, useRef, useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { PortfolioI } from './components/PortfolioI';
import { PortfolioII } from './components/PortfolioII';
import { PortfolioIII } from './components/PortfolioIII';




export const App = () => {

const [slide, setSlide] = useState('');


  const focusAbout = useRef(null);
  const focusStack = useRef(null);
  const focusPortfolioI = useRef(null);
  const focusPortfolioII = useRef(null);
  const focusPortfolioIII = useRef(null);
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

      <section className="about" ref={focusAbout}>
        <About focusStack={focusStack} handleChangeFocus={handleChangeFocus} slide={slide} />
      </section>

      <section className="stack" ref={focusStack}>
        <Stack handleChangeFocus={handleChangeFocus} focusPortfolio={focusPortfolioI} slide={slide} />
      </section>
      
      <section className="portfolio-i" ref={focusPortfolioI}>
        <PortfolioI handleChangeFocus={handleChangeFocus} focusPortfolioII={focusPortfolioII} slide={slide} />
      </section>

      <section className="portfolio-ii" ref={focusPortfolioII}>
        <PortfolioII handleChangeFocus={handleChangeFocus} focusPortfolioIII={focusPortfolioIII} slide={slide} />
      </section>

      <section className="portfolio-iii" ref={focusPortfolioIII}>
        <PortfolioIII handleChangeFocus={handleChangeFocus} focusContact={focusContact} slide={slide} />
      </section>

      <section className="contact" ref={focusContact}>
        <div className="container">
          Contacts
        </div>
      </section>
    </>
  );
}


