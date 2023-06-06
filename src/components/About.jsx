import { useEffect, useState } from "react";
import { slLeft, slRight, aboutElem } from "../config/constants";


export const About = ({ handleChangeFocus, focusStack, slide }) => {

  const [slideLeft, setSlideLeft] = useState('');
  const [slideRight, setSlideRight] = useState('');

  useEffect(() => {
    if(slide === aboutElem) {
      setSlideLeft(slLeft);
      setSlideRight(slRight);
    };
  }, [slide]);

  return (
    <>
      <header className="about__header"><div className="about__header-text">Обо мне</div></header>
      <section className="about__presentation">
        
        <article className={slideLeft + ' about__text'}>
          <p>
            Идея самостоятельно создать сайт с нуля и разместить в интернете волновала меня давно. 
            Именно поэтому 2,5 года я упорно училась на full-stack веб-разработчика и сейчас продолжаю совершенствовать свои знания.
          </p>
          <p>
            Меня восхищает, как строки кода превращаются в страницы сайта, мне нравится  добиваться слаженной работы различных компонентов, 
            я стремлюсь создавать сайты - надежные для владельца и удобные для пользователя.
          </p>
          <p>
            В проектах я разрабатывала как front-end, так и back-end части, занималась проектированием баз данных. 
            В командной работе играла роль скрам-мастера.
          </p>
          <p>
            Увлекаюсь фотографией, люблю искусство, аниме и музыку.
          </p>
        </article>

        <div className="about__wrap">
          <img className={'about__img ' + slideRight } src="/Viktoria-portfolio/img/VV.jpeg" alt="VictoriaPhoto" />
        </div>


      </section>
      
      <svg onClick={(ev) => handleChangeFocus(ev, focusStack)} className="arrow" width='50' height='50' viewBox="0 0 512 512">
        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/>
      </svg>
    </>
  )
}

