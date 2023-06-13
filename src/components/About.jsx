import { useEffect, useState } from "react";
import { slLeft, slRight, aboutElem } from "../config/constants";


export const About = ({ slide }) => {

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
      <section className="about__presentation container">
        
        <article className={slideLeft + ' about__text'}>
          <p>
            Идея самостоятельно создать сайт с нуля и разместить в интернете волновала меня давно. 
            Именно поэтому 2,5 года я упорно училась на full-stack веб-разработчика и сейчас продолжаю совершенствовать свои знания.
          </p>
          <p className="about__text-item">
            Меня восхищает, как строки кода превращаются в страницы сайта, мне нравится  добиваться слаженной работы различных компонентов, 
            я стремлюсь создавать сайты - надежные для владельца и удобные для пользователя.
          </p>
          <p className="about__text-item">
            В проектах я разрабатывала как front-end, так и back-end части, занималась проектированием баз данных. 
            В командной работе играла роль скрам-мастера.
          </p>
          <p className="about__text-item">
            Увлекаюсь фотографией, люблю искусство, аниме и музыку.
          </p>
        </article>

        <div className="about__wrap">
          <img className={'about__img ' + slideRight } src="/Viktoria-portfolio/img/VV.jpeg" alt="VictoriaPhoto" />
        </div>

      </section>
    </>
  )
}

