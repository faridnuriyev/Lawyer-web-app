import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'

function Layout() {
  useEffect(() => {
    document.title = "Home"
  })
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default Layout