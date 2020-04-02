import React from "react";
import s from "../Schedule.module.css";
import flag from "../../../usa.png";

const ScheduleList = props => {
  return (
    <div className={s.league_board}>
      {props.items.map((item, i) => (
        <div key={i} className={s.league_card}>
          {item.items.map((data, i) => (
            <div key={i}>
              {data.match.length > 0 && (
                <div>
                  <div className={s.league_card__head}>
                    <img src={flag} alt="USA" className={s.league__flag} />
                    <span key={i} className={s.league_card__title}>
                      {item.league}: {data.item}
                    </span>
                  </div>
                  {data.match.map((m, i) => (
                    <div key={i} className={s.container}>
                      <div className={s.league_card__info}>
                        <span className={s.time}>{m.time}</span>
                        <span className={s.groups}>
                          {m.name} <i className="fas fa-star"></i>
                        </span>
                        <span className={s.status}>{m.status}</span>
                        <span className={s.moreInf}>Подробнее</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
