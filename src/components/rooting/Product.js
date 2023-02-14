import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './rootingPages.css'

function Product() {
  useEffect(() => {
    document.title = "Product"
  })
  return (
    <>
    <Header/>
    <div className='product'>
      <h2 className='exampleForRooting'>Product Page<br /> Example for rooting</h2>
    </div>
    <Footer />
    </>
  )
}

export default Product