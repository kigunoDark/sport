import React, {useState, useEffect} from "react"
import * as axios from 'axios'
import ScheduleMenu from './ScheduleMenu'

const SheduleMenuContainer = () => {
  const [allEvents, setEvent] = useState(0);
  const [presentEvents, setPresentEvents] = useState(0);
  const [futureEvents, seFutureEvents] = useState(0);
   
  useEffect(() => {
    axios.get('http://u0362146.plsk.regruhosting.ru/match')
    .then(res => {
      setEvent(res.data.length)
      return res.data
    })
    .then(data => {
      console.log(data)
      let presentCounter = 0;
      let futureCounter = 0;
      data.map(d => {
        let date = new Date(d.time).getDate();
        let dateToday  = new Date(Date.now()).getDate();
        if(date === dateToday) {
          presentCounter++;
        } else {
          futureCounter++;
        }
        setPresentEvents(presentCounter);
        seFutureEvents(futureCounter);
      })
    })
    .catch(err => console.log(err))
  },[]);
  return (<ScheduleMenu allEvents={allEvents} present={presentEvents} future={futureEvents}/>)
}

export default SheduleMenuContainer 