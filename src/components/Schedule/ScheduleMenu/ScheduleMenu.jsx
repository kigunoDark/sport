import React from 'react';
import s from '../Schedule.module.css'

const SheduleMenu = (props) => {
  return (
    <div className={s.head}>
      <ul className={s.menu}>
        <li className={s.menu__item}>
          <a href="*">Сегодня <span>{props.present}</span></a>
        </li>
        <li className={s.menu__item}>
          <a href="*">Завтра <span>{props.future}</span></a>
        </li>
        <li className={s.menu__item}>
          <a href="*">Все матчи <span>{props.allEvents}</span></a>
        </li>
      </ul>
      <div className={s.calendar}>
        <i className="far fa-calendar-check"></i>
        <span>21.03 вт</span>
      </div>
    </div>
  )
}

export default SheduleMenu;