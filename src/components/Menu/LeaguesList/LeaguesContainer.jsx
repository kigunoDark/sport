import React, {useState, useEffect} from "react"
import * as axios from 'axios'
import Leagues from "./Leagues";

const LeaguesContainer = () => {
  const [leagues, setLeague] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function() {
      try {
        let league =  await axios.get('http://u0362146.plsk.regruhosting.ru/league');
        setLeague(league.data);
        setData(league.data);
      } catch(err) {
        console.log(err);
      }
    })();
  });

  return (<Leagues leagues={leagues}/>)
}

export default LeaguesContainer;