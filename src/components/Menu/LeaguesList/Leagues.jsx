import React from  'react'
import l from './Leagues.module.css'
import AccodionContainer from '../../Accordion/AccodionContainer'

const Leagues = (props) => {

  return(
    <div className={l.leagues}>
      <h3 className={l.title}>Мои лиги</h3>
      <AccodionContainer />
    </div>
  )
}

export default Leagues