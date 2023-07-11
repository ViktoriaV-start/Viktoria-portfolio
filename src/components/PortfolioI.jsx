import { teleportGit, teleportPresentation } from "../config/constants"
import { Point } from "./Point"


export const PortfolioI = ({ focusPortfolio }) => {

  return (
    <>
    <header className="portfolio__header mt10">Проекты</header>
    <div className="portfolio">
    <section className="portfolio__wrap container">
      <article className="portfolio__text">
      <p><span className="portfolio__name">TELEPORT</span><span className="portfolio__brief"> Коммерческий проект по продаже телефонных номеров для бизнеса</span></p>
      <p ref={focusPortfolio}>Cайт агента оператора мультисервисной сети связи компании МТТ по продаже телефонных номеров для бизнеса корпоративным
        и частным клиентам с возможностью выбора номеров.
      </p>
      <p>
        Сайт продвигает услуги телекоммуникации и дает возможность потенциальному клиенту выбрать номер из предлагаемых провайдером вариантов;
        предоставляет клиенту возможность связаться с менеджером по телефону или отправить заявку;
        помогает агенту/партнеру компании МТТ организовать работу по обработке и анализу всех заявок, управлению списками клиентов и менеджеров.
      </p>
      <p>
        Агент(администратор) может создавать сеть независимых менеджеров, каждый из которых обладает правом подключения новых клиентов от имени
        агента посредством создания заявок на сайте и отправки их непосредственно в головную телекоммуникационную компанию. 
      </p>
      <p>
        Участвовала в командной разработке в роли fullstack-разработчика и скрам-мастера. Также на проекте были задействованы:
        дизайнер, верстальщик, frontend-разработчик, backend-разработчик.
      </p>
      <div className="portfolio__task">Мои задачи:</div>
      <div className="portfolio__task-item">
        <Point />
        <span>реализовала страницу заявок (административная часть, front/backend): получение списка заявок из БД, пагинация, сортировка, поиск, оформление страницы;</span>
      </div>
      <div className="mt03 portfolio__task-item">
        <Point /> 
        <span> разработала страницу добавления нового сотрудника (административная часть, front/backend) с логикой для внесения в БД, валидацией, оформление страницы;</span>
      </div>
      <div className="mt03 portfolio__task-item">
        <Point />
        <span>реализовала логику для внесения новой заявки в БД (backend);</span>
      </div>
      <div className="mt03 portfolio__task-item">
        <Point />
        <span>принимала участие в разработке БД;</span>
      </div>
      <div className="mt03 portfolio__task-item">
        <Point />
        <span>создала ряд общих компонентов, используемых на различных страницах;</span>
      </div>
      <div className="mt03 portfolio__task-item">
        <Point />
        <span>Исполняла обязанности скрам-менеджера: готовила бэклоги спринтов и отчеты о проделанной работе, решала организационные вопросы на разных этапах,
        нашла дизайнера и коммуницировала с ним по поводу макета, организовывала встречи и коммуникации между разработчиками</span>
      </div>
      </article>

      <div className="portfolio__images">
        <img className="teleport_img-home portfolio__img" src="/Viktoria-portfolio/img/teleport/teleport-home.png" alt="teleport" />
        <img className="teleport_img-appl portfolio__img" src="/Viktoria-portfolio/img/teleport/teleport-appl.png" alt="teleport" />
      </div>
    </section>
    </div>

    <div className="portfolio__info-wrap">
      <div className="portfolio__info container">
        <div className="portfolio__stack">
          JS/React, PHP/Laravel, Redis, MySQL, Docker
        </div>

        <div className="links">
          <a href={teleportPresentation} className="links__item" referrerPolicy="no-referrer"><svg className="icon" height="1.8rem" viewBox="0 0 512 512"><path d="M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"/></svg>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

