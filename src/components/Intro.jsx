
export const Intro = ({ handleChangeFocus, focusAbout }) => {

  return (
    <>
      <section className="intro__description">
        <div>
          <img className="intro__img" src="./img/kubiki_clean.gif" alt="cubics" />
        </div>
        <article className="intro__text">
          <div>Привет! Меня зовут </div>
          <p className="intro__name">Виктория Васильева</p>
          <p>Я - Junior Веб-разработчик.</p>
          <p>Это презентация обо мне и моих работах</p>
        </article>
      </section>
      
      <svg onClick={(ev) => handleChangeFocus(ev, focusAbout)} className="arrow" width='50' height='50' viewBox="0 0 512 512">
        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/>
      </svg>
  </>
        

  )
};