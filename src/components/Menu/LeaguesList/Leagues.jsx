import React, { useState }  from  'react'
import l from './Leagues.module.css'

const Leagues = (props) => {

  return(
    <div className={l.leagues}>
      <h3 className={l.title}>Мои лиги</h3>
    
    
      <div className={l.accordion__block}>
        <button  className={l.accordion}>
          <p className={l.accordion__title}>Some title</p>
        </button>
      </div>
      <div className={l.accordion__content}>
        <div
        className={l.accordion__item}>
          dsdada
        </div>
      </div>

    </div>
  )
}

export default Leagues