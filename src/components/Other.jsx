import { brandGit, brandLink, brandPresentation, calendarGit, calendarLink, ghuserGit, ghuserLink, newsGit, teleportGit, todoGit, todoLink, wikiGit, wikiLink } from "../config/constants";
import { ReactComponent as LinkIcon } from '../assets/icon-link.svg';
import { ReactComponent as GhIcon } from '../assets/icon-gh.svg';
import { ReactComponent as PdfIcon } from '../assets/icon-pdf.svg';


export const Other = () => {

  return (
    <>
    <header className="portfolio__header mt10">Другие проекты и работы</header>


    <div className="portfolio">
    <section className="portfolio__wrap container pt2 pb2">
      <article className="portfolio__text">
        <p><span className="portfolio__name">My TODO List</span><span className="portfolio__brief"> Список задач</span></p>
      
        <div className="portfolio__info">
          <div className="portfolio__stack">
            React, Typescript, MobX
          </div>
        </div>

        <div className="links">
          <a href={todoLink} className="links__item" referrerPolicy="no-referrer">
            <LinkIcon />
          </a>
          <a href={todoGit} className="links__item" referrerPolicy="no-referrer">
            <GhIcon />
          </a>

        </div>
      
      </article>

      <div className="portfolio__images">
        <img className="teleport_img-home portfolio__img" src="/Viktoria-portfolio/img/other/todo.png" alt="todo" />
      </div>
    </section>
    </div>

    <div className="portfolio">
    <section className="portfolio__wrap container pt2 pb2">
      <article className="portfolio__text">
        <p><span className="portfolio__name">Calendar</span><span className="portfolio__brief"> Страница недельного календаря</span></p>
      
        <div className="portfolio__info">
          <div className="portfolio__stack">
            React, JS, styled-components
          </div>
        </div>

        <div className="links">
          <a href={calendarLink} className="links__item" referrerPolicy="no-referrer">
            <LinkIcon />
          </a>
          <a href={calendarGit} className="links__item" referrerPolicy="no-referrer">
            <GhIcon />
          </a>
        </div>
      
      </article>

      <div className="portfolio__images">
        <img className="teleport_img-home portfolio__img" src="/Viktoria-portfolio/img/other/calendar.png" alt="calendar" />
      </div>
    </section>
    </div>

    <div className="portfolio">
    <section className="portfolio__wrap container pt2 pb2">
      <article className="portfolio__text">
        <p><span className="portfolio__name">Wiki Search</span><span className="portfolio__brief"> Поиск по Википедии</span></p>
      
        <div className="portfolio__info">
          <div className="portfolio__stack">
            React, JS, API, MobX
          </div>
        </div>

        <div className="links">
          <a href={wikiLink} className="links__item" referrerPolicy="no-referrer">
            <LinkIcon />
          </a>
          <a href={wikiGit} className="links__item" referrerPolicy="no-referrer">
            <GhIcon />
          </a>
        </div>
      
      </article>

      <div className="portfolio__images">
        <img className="teleport_img-home portfolio__img" src="/Viktoria-portfolio/img/other/wiki.png" alt="wiki" />
      </div>
    </section>
    </div>

    <div className="portfolio">
    <section className="portfolio__wrap container pt2 pb2">
      <article className="portfolio__text">
        <p>
          <span className="portfolio__name">Devfinder</span><span className="portfolio__brief"> Поиск пользователей GitHub, учебный проект</span>
        </p>
        
        <div className="portfolio__info">
          <div className="portfolio__stack">
            React, Typescript, API
          </div>
        </div>

        <div className="links">
        <a href={ghuserLink} className="links__item" referrerPolicy="no-referrer">
            <LinkIcon />
          </a>
          <a href={ghuserGit} className="links__item" referrerPolicy="no-referrer">
            <GhIcon />
          </a>

        </div>
      
      </article>

      <div className="portfolio__images">
        <img className="teleport_img-home portfolio__img" src="/Viktoria-portfolio/img/other/ghuser.png" alt="news" />
      </div>
    </section>
    </div>

    <div className="portfolio">
    <section className="portfolio__wrap container pt2 pb2">
      <article className="portfolio__text">
        <p><span className="portfolio__name">BRAND</span><span className="portfolio__brief"> Интернет-магазин, учебный проект</span></p>
        <p>Пример работы, в которой для реализации использовала ООП JS для главной страницы и Vue.js для других страниц.</p>
      
        <div className="portfolio__info">
          <div className="portfolio__stack">
            JS, Vue.js
          </div>
        </div>

        <div className="links">
          <a href={brandLink} className="links__item" referrerPolicy="no-referrer">
            <LinkIcon />
          </a>
          <a href={brandGit} className="links__item" referrerPolicy="no-referrer">
            <GhIcon />
          </a>
          <a href={brandPresentation} className="links__item" referrerPolicy="no-referrer">
            <PdfIcon />
          </a>
        </div>
      
      </article>

      <div className="portfolio__images">
        <img className="teleport_img-home portfolio__img" src="/Viktoria-portfolio/img/brand/brand-men.png" alt="brand" />
      </div>
    </section>
    </div>

    <div className="portfolio">
    <section className="portfolio__wrap container pt2 pb2">
      <article className="portfolio__text">
        <p><span className="portfolio__name">Ньюс Лайн</span><span className="portfolio__brief"> Новостной агрегатор, учебный проект</span></p>
        <p>Загрузка новостей по API и отображение новостей по категориям из выбранных новостных порталов, административный раздел для управления контентом, аутентификация/авторизация пользователя.</p>
      
        <div className="portfolio__info">
        <div className="portfolio__stack">
          PHP/Laravel, MariaDB, API, Docker
        </div>
        </div>

        <div className="links">
          <a href={newsGit} className="links__item" referrerPolicy="no-referrer">
            <GhIcon />
          </a>

        </div>
      
      </article>

      <div className="portfolio__images">
        <img className="teleport_img-home portfolio__img" src="/Viktoria-portfolio/img/news/news-one.png" alt="news" />
      </div>
    </section>
    </div>

    </>
  )
}

