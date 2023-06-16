import { useRef, useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { PortfolioI } from './components/PortfolioI';
import { PortfolioII } from './components/PortfolioII';
import { PortfolioIII } from './components/PortfolioIII';
import { Contact } from './components/Contact';
import { Other } from './components/Other';


export const App = () => {

  const [slide, setSlide] = useState('');

  const focusAbout = useRef(null);
  const focusStack = useRef(null);
  const focusPortfolio = useRef(null);
  const focusContact = useRef(null);

  const handleChangeFocus = (event, elem) => {
    elem.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
    setSlide(elem.current.className);
  }

  return (
    <>

      <Header handleChangeFocus={handleChangeFocus}
              focusAbout={focusAbout}
              focusStack={focusStack}
              focusPortfolio={focusPortfolio}
              focusContact={focusContact}
      />
      <section className="intro container">
        <Intro handleChangeFocus={handleChangeFocus} focusAbout={focusAbout} />
      </section>

      <section className="about" ref={focusAbout}>
        <About slide={slide} />
      </section>

      <section className="stack" ref={focusStack}>
        <Stack handleChangeFocus={handleChangeFocus} slide={slide} />
      </section>
      
      <section className="portfolio-i">
        <PortfolioI focusPortfolio={focusPortfolio} />
      </section>

      <section className="portfolio-ii">
        <PortfolioII />
      </section>

      <section className="portfolio-iii">
        <PortfolioIII />
      </section>

      <section className="other" >
        <Other />
      </section>

      <section className="contact" >
        <Contact focusContact={focusContact} />
      </section>
    </>
  );
}
