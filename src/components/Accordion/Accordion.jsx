import React, {useState, useRef} from 'react'
import s from './Accordion.module.css';

const Accordion = (props) => {

  return (
    <div className={s.accordion__block}> 
      <button onClick={props.toggleAccordion} className={s.accordion}>
          <p className={s.accordion__title}>{props.data.league}</p>
          <span className={!props.active ? s.accordion__icon_rotate : s.accordion__icon }><i className="fas fa-caret-down"></i></span>
      </button>
      {props.data.items.map((e,i) =>
        <div key={i} className={props.active ? s.accordion__content : s.accordion__content_active}>
          <div className={s.accordion__text}>
            {e.item}
            <span><i className="fas fa-times"></i></span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion;