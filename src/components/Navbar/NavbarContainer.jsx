import React, {useState, useEffect} from "react"
import Navbar from "./Navbar";
import * as axios from 'axios'

const NavbarContainer = () => {
  const [search, setSearch] = useState(false);
  const [activeBurger, setBurger] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth))
    if(size > 900 && !activeBurger) {
      setBurger()
    } else  if (size <= 900 && activeBurger) {
      setBurger();
    }
    return () => window.removeEventListener("resize", () => setSize(window.innerWidth));
  },[])
  console.log(size)

  const burgerTuggle = () => setBurger(!activeBurger);
  const searchTuggle = () => setSearch(!search);

  return (<Navbar search={search} 
                  activateSearch={searchTuggle} 
                  deactivateSearch = {searchTuggle} 
                  burgerTuggle = {burgerTuggle}
                  activeBurger = {activeBurger}/>)
}

export default NavbarContainer;