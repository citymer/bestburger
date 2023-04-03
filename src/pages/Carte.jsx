import React, { Fragment } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Burger from '../components/Burger'

const Carte = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Nav />
        <Burger />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Carte
