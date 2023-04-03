import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Error404 = () => {
  return (
    <div>
      <Header />
      <main>
        <Nav />
        <span> erreur 404</span>
      </main>
      <Footer />
    </div>
  )
}

export default Error404
