import React from "react"
import n from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={n.navbar}>
          <div className={n.title}>
            <span>Расписание матчей</span>
          </div>
          <ul className={n.menu}>
            <li className={n.menu__item}><a href="#">Все</a></li>
            <li className={n.menu__item}><a href="#">Live</a></li>
            <li className={n.menu__item}><a href="#">Результат</a></li>
            <li className={n.menu__item}><a href="#">Расписание</a></li>
            <li className={n.menu__item}><a href="#">Прогнозы</a></li>
          </ul>

          <input className={n.serch} placeholder="searc"/>
          <button type="submit" className={n.btn}>Войти</button>

          <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
      </nav>
    )
}

export default Navbar;