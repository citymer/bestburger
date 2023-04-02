import React from 'react'
import hamburger from '../assets/video/hamburger.mp4'

const Bienvenue = () => {
  return (
    <div className="banner">
      <video autoPlay muted loop src={hamburger} type="video/mp4"></video>
      <div className="content_text">
        <h2 className="bienvenu">Bienvenue</h2>
        <p>
          Nous sommes heureux de vous accueillir dans notre univers culinaire où
          vous pourrez découvrir une variété de hamburgers préparés avec des
          ingrédients de qualité supérieure et des recettes innovantes. Nous
          sommes impatients de vous offrir une expérience culinaire inoubliable,
          avec des hamburgers qui satisferont toutes vos envies. N'hésitez pas à
          explorer notre menu et à commander votre hamburger préféré dès
          maintenant !
        </p>
      </div>
    </div>
  )
}

export default Bienvenue
