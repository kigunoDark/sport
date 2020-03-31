import React from "react"
import m from './Menu.module.css'
import CountriesContainer from "./CountriesList/CountriesContainer"
import LeaguesContainer from "./LeaguesList/LeaguesContainer"

const Menu = () => {
    return (
      <div className={m.menu}>
        <LeaguesContainer />
        <CountriesContainer />
      </div>  
    )
}

export default Menu;