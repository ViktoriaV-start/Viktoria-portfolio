import { Point } from "./Point";


export const Work = () => {
  return (
    <>
    <header className="portfolio__header mt10">Стажировка и работа в компании "Wildberries"</header>

    <div className="portfolio">
      <section className="portfolio__wrap container">
        <article className="portfolio__text">
        <div className="portfolio__work">Мои задачи:</div>
        <div className="portfolio__work-item">
        <Point />
        <span>Успешно прошла этап стажировки и сдала внутренние экзамены;</span>
      </div>
      <div className="mt03 portfolio__work-item">
        <Point /> 
      <span>участвовую в разработке прототипов приложений</span>
      </div>
      <div className="mt03 portfolio__work-item">
        <Point />
        <span>выполняю отдельные задачи по поддержке существующих действующих платформ;</span>
      </div>
      <div className="mt03 portfolio__work-item">
        <Point />
        <span>вместе с командой занимаюсь фронтенд разработкой новых приложений;</span>
      </div>
        </article>

      <div className="portfolio__images">
        <img className="wb__img" src="/Viktoria-portfolio/img/wb.jpeg" alt="wb" />
      </div>
    </section>
    </div>

    <div className="portfolio__info-wrap">
      <div className="portfolio__info container">
        <div className="portfolio__stack">
          JS/React, Vue.js Composition, Nuxt
        </div>
      </div>
    </div>
    </>
  );
};
