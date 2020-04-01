import React, {useState, useEffect} from "react"
import * as axios from 'axios'
import ScheduleList from "./ScheduleList";

const ScheduleListContainer = () => {
  const [items, setItem] = useState([]);

  useEffect(async () => {
   const shedules = await axios.get('http://u0362146.plsk.regruhosting.ru/match');
   const leauges = await axios.get('http://u0362146.plsk.regruhosting.ru/public/league');
   const parsedData = [];
 
  for(let l of leauges.data) {
    let league = l;
    if(league.items.length < 1) continue;
    
    league.items = league.items.map(e => {
      e.match = [];
    
    shedules.data.filter(m =>{
        if(e.id === m.league_id ) {
          m.time = new Date(m.time).getHours() + ":" + new Date(m.time).getMinutes();
          e.match.push(m);
          return false;
        }
        return true
      });
        return e;
    });  
    parsedData.push(league);
   } 
   setItem(parsedData)
  },[]);

  return (<ScheduleList items={items} />)
}

export default ScheduleListContainer 