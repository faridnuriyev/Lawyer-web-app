import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = "Not Found"
  })
  return (
    <div className='product'>
    <h2 className='exampleForRooting'><Link to={'/'}>Back to Home</Link></h2>
  </div>
  )
}

export default NotFound