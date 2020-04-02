import React, {useState, useEffect} from 'react'
import * as axios from 'axios';
import Accordion from './Accordion';

const AccordionContainer = () => {
  const [setActive, setActiveState] = useState(true);
  const [data, setData] = useState([]);

  const toggleAccordion = () => { setActiveState(!setActive); }

  useEffect(() => {
   axios.get('http://u0362146.plsk.regruhosting.ru/league')
   .then(res => setData(res.data))
  })

  return( <Accordion active={setActive} 
                     toggleAccordion={toggleAccordion}
                     leagues={data} /> )

}

export default AccordionContainer ;