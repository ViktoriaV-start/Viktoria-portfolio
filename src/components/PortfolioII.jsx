import { brandShopGit, brandShopLink, brandShopPresentation } from "../config/constants";
import { Point } from "./Point";
import { ReactComponent as LinkIcon } from '../assets/icon-link.svg';
import { ReactComponent as GhIcon } from '../assets/icon-gh.svg';
import { ReactComponent as PdfIcon } from '../assets/icon-pdf.svg';


export const PortfolioII = () => {

  return (
    <>
    <div className="portfolio">
      <section className="portfolio__wrap container">
        <article className="portfolio__text">
          <p><span className="portfolio__name">BRAND</span><span className="portfolio__brief"> Интернет-магазин, учебный проект</span></p>
          <p>
            Сайт интернет-магазина с возможность приобретения выбранного товара.
          </p>
         <p>
          На сайте клиент имеет возможность просматривать доступный товар, искать по названию, увидеть характеристики товара,
          выбрать и оформить заказ, зарегистрироваться или войти на сайт, как постоянных покупатель.
          </p>
          <p>На проекте играла роль frontend/backend-разработчика.</p>
          <div className="portfolio__task">Мои задачи:</div>
          <div className="portfolio__task-item">
            <Point />
            <span>Реализовала загрузку из базы данных и отображение товаров на страницах, добавление товара в корзину без перезагрузки страницы с использованием asyncJS;</span>
          </div>
          <div className="mt03 portfolio__task-item">
            <Point />
            <span>Добавила возможность удаления товара из корзины, изменения количества с фиксацией изменений в базе данных,
                подсчет общей стоимости одного типа товара в корзине и итоговой цены всех товаров, отображение количества товара в корзине;</span>
          </div>
          <div className="mt03 portfolio__task-item">
            <Point />
            <span>Добавила поиск товара по названию;</span>
          </div>
          <div className="mt03 portfolio__task-item">
            <Point />
            <span>Разработала систему аутентификации пользователя и регистрации нового пользователя, вход/выход в личный кабинет;</span>
          </div>
          <div className="mt03 portfolio__task-item">
            <Point />
            <span>Реализовала оформление заказа с внесением необходимых изменений в базу данных с присвоением заказу уникального номера</span>
          </div>
        </article>

        <div className="portfolio__images">
          <img className="brand-img portfolio__img" src="/Viktoria-portfolio/img/brand/brand-home.png" alt="Brand" />
        </div>
      </section>
    </div>

    <div className="portfolio__info-wrap">
      <div className="portfolio__info container">
        <div className="portfolio__stack">
          PHP, JS, MySQL, Twig
        </div>

        <div className="links">
          <a href={brandShopLink} className="links__item" target="_blank" referrerPolicy="noopener" rel="noreferrer">
            <LinkIcon />
          </a>
          <a href={brandShopGit} className="links__item" target="_blank" referrerPolicy="noopener" rel="noreferrer">
            <GhIcon />
          </a>
          <a href={brandShopPresentation} className="links__item" target="_blank" referrerPolicy="noopener" rel="noreferrer">
            <PdfIcon />
          </a>
        </div>
      </div>
    </div>
  </>
  )
}
