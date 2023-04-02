import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Bienvenue from '../components/Bienvenue'

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Nav />
        <Bienvenue />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
