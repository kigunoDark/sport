import React, {useState, useEffect} from "react"
import * as axios from 'axios'
import Countries from "./Countries";

const CountriesContainer = () => {
  const [countries, setCountry] = useState([]);
   
  useEffect(() => {
    axios.get('http://u0362146.plsk.regruhosting.ru/country')
    .then(res => setCountry(res.data))
    .catch(err => console.log(err))
  });

  return (<Countries countries={countries}/>)
}

export default CountriesContainer;