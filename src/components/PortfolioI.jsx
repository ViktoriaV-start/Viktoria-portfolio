import { teleportGit, teleportPresentation } from "../config/constants";
import { Point } from "./Point";
import { ReactComponent as LinkIcon } from '../assets/icon-link.svg';
import { ReactComponent as GhIcon } from '../assets/icon-gh.svg';
import { ReactComponent as PdfIcon } from '../assets/icon-pdf.svg';


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
					<a href={teleportGit} className="links__item" referrerPolicy="no-referrer">
						<GhIcon />
					</a>
					<a href={teleportPresentation} className="links__item" referrerPolicy="no-referrer">
						<PdfIcon />
					</a>
				</div>
			</div>
		</div>
		</>
  );
};
