

export const Header = ({
                        handleChangeFocus,
                        focusAbout,
                        focusStack,
                        focusPortfolio,
                        focusContact
                       }) => {

  return (
    <header className="header__wrap">
      <div className="header container">

      <div className="header__logo">
        <svg className="svg" viewBox="0 0 17.7 21.45">
          <g id="Слой_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"/>
            <g id="_936036768">
              <g>
                <rect className="fil1" transform="matrix(0.201326 0.143512 -0 0.188936 0.0434972 6.31556)" width="43.74" height="46.61"/>
                <path className="fil4" d="M0.04 6.32l8.81 6.27 0 8.81 -8.81 -6.28 0 -8.8zm7.16 6.99c-0.23,-0.17 -0.44,-0.18 -0.62,-0.03 -0.12,0.11 -0.26,0.33 -0.42,0.69l-1.43 3.1 -0.46 -0.33 -1.75 -6.01c-0.1,-0.36 -0.2,-0.62 -0.28,-0.77 -0.12,-0.2 -0.3,-0.4 -0.55,-0.57l0 -0.44 2.45 1.75 0 0.43c-0.31,-0.22 -0.47,-0.23 -0.47,-0.04 0,0.08 0.05,0.3 0.15,0.66l1.02 3.5 0.84 -1.92c0.12,-0.24 0.18,-0.43 0.18,-0.54 0,-0.29 -0.23,-0.59 -0.7,-0.93l0 -0.43 2.04 1.46 0 0.42z"/>
              </g>
              <g>
                <rect className="fil1" transform="matrix(0.201326 -0.142521 -0 0.188936 8.84923 12.5927)" width="43.74" height="46.61"/>
                <path className="fil0" d="M8.85 12.59l8.81 -6.23 0 8.8 -8.81 6.24 0 -8.81zm7.16 -3.18c-0.24,0.17 -0.45,0.46 -0.62,0.87 -0.12,0.27 -0.27,0.69 -0.43,1.28l-1.43 5.13 -0.46 0.33 -1.75 -3.53c-0.1,-0.21 -0.19,-0.34 -0.28,-0.37 -0.11,-0.04 -0.3,0.03 -0.55,0.21l0 -0.44 2.45 -1.73 0 0.43c-0.31,0.23 -0.47,0.43 -0.47,0.63 0,0.08 0.05,0.22 0.16,0.44l1.02 2.05 0.84 -3.11c0.12,-0.42 0.18,-0.69 0.18,-0.8 0,-0.29 -0.23,-0.26 -0.7,0.07l0 -0.43 2.04 -1.45 0 0.42z"/>
              </g>
              <rect className="fil3 str0" transform="matrix(0.201324 -0.14335 0.188933 0.134528 0.043488 6.30105)" width="43.74" height="46.61"/>
            </g>
          </g>
        </svg>
      <span className="header__slogan">Hello, World!</span>
      </div>

        <nav className="nav">
          <span className="nav__item" onClick={(ev) => handleChangeFocus(ev, focusAbout)}>Обо мне</span>
          <span className="nav__item" onClick={(ev) => handleChangeFocus(ev, focusStack)}>Инструменты</span>
          <span className="nav__item" onClick={(ev) => handleChangeFocus(ev, focusPortfolio)}>Проекты</span>
          <span className="nav__item" onClick={(ev) => handleChangeFocus(ev, focusContact)}>Контакты</span>
        </nav>

        <div class="nav__dropdown">
        <svg class="nav__dropdown-icon" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          <div class="nav__dropdown-content">
            <p onClick={(ev) => handleChangeFocus(ev, focusAbout)}>Обо мне</p>
            <p onClick={(ev) => handleChangeFocus(ev, focusStack)}>Инструменты</p>
            <p onClick={(ev) => handleChangeFocus(ev, focusPortfolio)}>Проекты</p>
            <p onClick={(ev) => handleChangeFocus(ev, focusContact)}>Контакты</p>
          </div>
        </div>
      </div>
    </header>
  )
}