import React from "react";
import n from "./Navbar.module.css";

const Navbar = props => {
  return (
    <nav className={n.navbar}>
      <div className={n.title}>
        <span>Расписание матчей</span>
      </div>
      <ul
        className={
          window.innerWidth > 900 && props.activeBurger
            ? n.menu
            : !props.activeBurger && window.innerWidth <= 900
            ? n.disabled_menu
            : n.menu
        }
      >
        <li className={n.menu__title}>
          <span>Меню</span>
          <span className={n.close_btn} onClick={props.burgerTuggle}>
            <i className="fas fa-times"></i>
          </span>
        </li>
        <li className={n.menu__item}>
          <a href="/#">Все</a>
        </li>
        <li className={n.menu__item}>
          <a href="/#">Live</a>
        </li>
        <li className={n.menu__item}>
          <a href="/#">Результат</a>
        </li>
        <li className={n.menu__item}>
          <a href="/#">Расписание</a>
        </li>
        <li className={n.menu__item}>
          <a href="/#">Прогнозы</a>
        </li>
      </ul>

      <div className={n.left_block}>
        {!props.search ? (
          <span className={n.search__btn} onDoubleClick={props.activateSearch}>
            {" "}
            <i className="fas fa-search"></i>
          </span>
        ) : (
          <input
            onBlur={props.deactivateSearch}
            className={n.search}
            placeholder=""
          />
        )}

        <button type="submit" className={n.btn}>
          Войти
        </button>
        <div className={n.burger} onClick={props.burgerTuggle}>
          <div className={n.line}></div>
          <div className={n.line}></div>
          <div className={n.line}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
