import React from "react";
import s from "./Schedule.module.css"
const Schedule = () => {
  return (
    <div className={s.schedule}>
      <div className={s.head}>
        <ul className={s.menu}>
          <li className={s.menu__item}>
            <a href="*">Сегодня</a>
          </li>
          <li className={s.menu__item}>
            <a href="*">Завтра</a>
          </li>
          <li className={s.menu__item}>
            <a href="*">Все матчи</a>
          </li>
        </ul>

      <div className={s.calendar}>
        <i className="far fa-calendar-check"></i>
        <span>21.03 вт</span>
      </div>
      </div>

      <div className={s.league_board}>
          <div className={s.league_card}>
            <div className={s.league_card__head}>
              <span>Флаг</span>
              <span className={s.league_card__title}>Англия: Премьер-лига</span>
            </div>
            
            <div className={s.container}>
              <div className={s.league_card__info}>
                  <span className={s.time}>00.00</span>
                  <span>Эвертон-Ливерпуль</span>
                  <span>Перенесен</span>
                  <span>Подробнее</span>
              </div>
            </div>
          </div>
          
      </div>
    </div>
  )  
    
} 

export default Schedule;