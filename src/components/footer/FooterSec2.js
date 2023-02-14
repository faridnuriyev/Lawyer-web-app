import React from 'react'
import ContactBox from '../ContactBox'
import './FooterSec2.css'
import LocationBox from '../LocationBox'
function FooterSec2() {
  return (
    <section className='footer-sec-2'>
      <div className='container'>
        <div className='footer-sec-2-content'>
          <ContactBox
            name={"Company Info"}
            li1={"About Us"}
            li2={"Carrier"}
            li3={"We are hiring"}
            li4={"Blog"}
          />
            <ContactBox
            name={"Legal"}
            li1={"About Us"}
            li2={"Carrier"}
            li3={"We are hiring"}
            li4={"Blog"}
          />
            <ContactBox
            name={"Features"}
            li1={"Business Marketing"}
            li2={"User Analytic"}
            li3={"Live Chat"}
            li4={"Unlimited Support"}
          />
            <ContactBox
            name={"Resources"}
            li1={"IOS & Android"}
            li2={"Watch a Demo"}
            li3={"Customers"}
            li4={"API"}
          />
          <LocationBox
            name={"Get In Touch"}
            img1={"assets/img/footer-phone.png"}
            title1={"(480) 555-0103"}
            img2={"assets/img/footer-loc.png"}
            title2={"4517 Washington Ave."}
            img3={"assets/img/footer-mail.png"}
            title3={"debra.holt@example.com"}
          />
        </div>
      </div>
    </section>
  )
}

export default FooterSec2