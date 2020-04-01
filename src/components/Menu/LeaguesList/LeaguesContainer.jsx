import React, {useState, useEffect} from "react"
import * as axios from 'axios'
import Leagues from "./Leagues";

const LeaguesContainer = () => {
  const [leagues, setLeague] = useState([]);
   
  useEffect(() => {
    axios.get('http://u0362146.plsk.regruhosting.ru/league')
    .then(res => setLeague(res.data))
    .catch(err => console.log(err))
  });

  return (<Leagues leagues={leagues} />)
}

export default LeaguesContainer;