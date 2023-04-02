import React from 'react'
import hamburger from '../assets/video/hamburger.mp4'

const Bienvenue = () => {
  return (
    <div className="banner">
      <video autoPlay muted loop src={hamburger} type="video/mp4"></video>
      <div className="content_text">
        <h2 className="bienvenu">Bienvenue</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          dolorem culpa voluptates est sed sequi dolores, voluptatibus repellat
          repellendus suscipit fugiat vel inventore animi excepturi tempore
          doloremque labore nam incidunt.
        </p>
      </div>
    </div>
  )
}

export default Bienvenue
