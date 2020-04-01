import React from "react";
import s from "./Schedule.module.css"
import ScheduleListContainer from "./ScheduleList/ScheduleListContainer";
import SheduleMenuContainer from "./ScheduleMenu/SheduleMenuContainer";

const Schedule = () => {
  return (
    <div className={s.schedule}>
      <SheduleMenuContainer />
      <ScheduleListContainer />
    </div>
  )  
    
} 

export default Schedule;