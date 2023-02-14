import React from 'react'

function ContactBox({name,li1,li2,li3,li4}) {
  return (
    <div className='ft-sec-2-list'>
    <h5 className='ft-sec-2-h5'>{name}</h5>
    <ul>
      <li><a href='#AboutUs'>{li1}</a></li>
      <li><a href='#Carrier'>{li2}</a></li>
      <li><a href='#Wearehiring'>{li3}</a></li>
      <li><a href='#Blog'>{li4}</a></li>
    </ul>
  </div>
  )
}

export default ContactBox