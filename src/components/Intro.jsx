
export const Intro = ({ handleChangeFocus, focusAbout }) => {

	return (
		<>
			<section className="intro__description container">
				<div className="intro__img-wrap slide-in-left">
					<img className="intro__img" src="/Viktoria-portfolio/img/kubiki_clean.gif" alt="cubics" />
				</div>
				<article className="intro__text slide-in-right">
				<div>Привет! Меня зовут </div>
					<p className="intro__name">Виктория Васильева</p>
					<p>Я - Junior Веб-разработчик.</p>
					<p className="intro__text-item">Это презентация обо мне и моих работах</p>
				</article>
			</section>
	</>
	);
};