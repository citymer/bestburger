import React from 'react'

import icon from '../assets/iconHamburger.png'
import { hamburgers } from '../data/data'

const Burger = () => {
  let { price, image } = hamburgers
  console.log(price)
  return (
    <div className="sectionBurger">
      <div className="entete">
        <p className="incontournables">Les incontournables</p>
        <img src={icon} alt="icone hamburger" className="icon" />
      </div>
      <div>
        <img src={image} alt="classic" />
      </div>
    </div>
  )
}

export default Burger
