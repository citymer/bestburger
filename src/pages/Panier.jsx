import React, { Fragment } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RecapPanier from '../components/RecapPanier'

const Panier = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Nav />
        <RecapPanier />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Panier
