import { chatsGit, chatsLink } from "../config/constants";
import { Point, PointSmall } from "./Point";
import { ReactComponent as LinkIcon } from '../assets/icon-link.svg';
import { ReactComponent as GhIcon } from '../assets/icon-gh.svg';


export const PortfolioIII = () => {

return (
  <>
  <div className="portfolio">
    <section className="portfolio__wrap container">
      <article className="portfolio__text">
        <p><span className="portfolio__name">LET'S CHAT</span><span className="portfolio__brief"> Мессенджер, учебный проект</span></p>
        <p>
          Сайт для общения на различные темы и возможностью посещения страницы с развлекательной информацией.
        </p>
        <p>
          Пользователь сайта имеет доступ ко всем чатам сайта, может просматривать чаты,
          писать/удалять свои сообщения, создавать новые чаты или просматривать страницу с развлекательным контентом.
        </p>
        <p>На проекте играла роль frontend/backend-разработчика.</p>
        <div className="portfolio__task">Мои задачи:</div>
        <div className="portfolio__task-item">
          <Point />
          <span>Реализовала мессенджер с чатами;</span>
        </div>
        <div className="mt03 portfolio__task-item">
          <Point />
          <span>Добавила возможность переключения между страницами чатов и добавление/удаление новых чатов;</span>
        </div>
        <div className="mt03 portfolio__task-item">
          <Point />
          <span>Подключила страницу с данными, полученными через API;</span>
        </div>
        <div className="mt03 portfolio__task-item">
          <Point />
          <span>Добавила систему аутентификации пользователя и регистрации нового пользователя, вход/выход в личный кабинет</span>
        </div>
        <div className="portfolio__task mt03">Особенности:</div>
        <div className="portfolio__task-item">
          <PointSmall />
          <span>Использовала Firebase для аутентификации/регистрации пользователя;</span>
        </div>
        <div className="mt03 portfolio__task-item">
          <PointSmall />
          <span>Использовала Realtime Database Firebase для хранения данных чатов и сообщений, а также данных о пользователях;</span>
        </div>
        <div className="mt03 portfolio__task-item">
          <PointSmall />
          <span>Добавила возможность изменения темы страницы с сообщениями</span>
        </div>
      
      </article>

      <div className="portfolio__images">
        <img className="brand-img portfolio__img" src="/Viktoria-portfolio/img/messenger/messenger.png" alt="Brand" />
        <img className="brand-img portfolio__img" src="/Viktoria-portfolio/img/messenger/api.png" alt="Brand" />
      </div>
    </section>
  </div>

  <div className="portfolio__info-wrap">
    <div className="portfolio__info container">
      <div className="portfolio__stack">
      JS, React, Redux, Firebase, Api
      </div>

      <div className="links">
        <a href={chatsLink} className="links__item" target="_blank" referrerpolicy="noreferrer" rel="noopener">
          <LinkIcon />
        </a>
        <a href={chatsGit} className="links__item" target="_blank" referrerpolicy="noreferrer" rel="noopener">
          <GhIcon />
        </a>
        
      </div>
    </div>

  </div>
</>
)
}
