import React from 'react'

function LocationBox({name,img1,title1,img2,title2,img3,title3}) {
  return (
    <div className='ft-sec-2-list'>
    <h5 className='ft-sec-2-h5'>{name}</h5>
    <div className='footer-location'>
        <div className='contact-number'>
            <img src={img1} alt={title1} />
            <h6>{title1}</h6>
        </div>
        <div className='location'>
            <img src={img2} alt={title2} />
            <h6>{title2}</h6>
        </div>
        <div className='contact-email'>
            <img src={img3} alt={title3} />
            <h6>{title3}</h6>
        </div>
    </div>
  </div>
  )
}

export default LocationBox