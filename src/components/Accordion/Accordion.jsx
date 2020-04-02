import React, {useState, useRef} from 'react'
import s from './Accordion.module.css';

const Accordion = (props) => {

  return (
    <div>
       {props.leagues.map((l,i) => 
        <div key={i} className={s.accordion__block}> 
        <button onClick={props.toggleAccordion} className={s.accordion}>
       <p className={s.accordion__title}>{l.league}</p>
           <span className={!props.active && i === 1 ? s.accordion__icon_rotate : s.accordion__icon }><i className="fas fa-caret-down"></i></span>
        </button>
        {l.items.map((e, j) => 
          <div key={j} className={props.active ? s.accordion__content : s.accordion__content_active}>
            <div className={s.accordion__text}>
               {e.item}
               <span><i className="fas fa-times"></i></span>
            </div>
          </div>
        )}
      </div>
       )}
    </div>
  )
}

export default Accordion;