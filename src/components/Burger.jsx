import React from 'react'

import icon from '../assets/iconHamburger.png'
import useFetch from '../services/fetchApi'

const Burger = () => {
  let { hamburger } = useFetch()

  return (
    <div className="sectionBurger">
      <div className="entete">
        <p className="incontournables">Les incontournables</p>
        <img src={icon} alt="icone hamburger" className="icon" />
      </div>
      <div className="contentBurger">
        {hamburger.map((burger) => (
          <div className="burger" key={burger.id}>
            <img src={burger.image} alt="burger" className="imgBurger" />
            <h3>{burger.name}</h3>
            <p>{burger.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Burger
