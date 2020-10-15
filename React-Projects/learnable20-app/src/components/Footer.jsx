import React from 'react'

function Footer () {
 return (
  <footer className="footer">
    <div className="footer__container">
        <div className="footer__container-1">

          <div className="footer__item-1">
            <h4><a href="#" className="footer__link">build software</a></h4>
            <h4><a href="#" className="footer__link">design different</a></h4>
            <h4><a href="#" className="footer__link">apply your knowledge</a></h4>
            <h4><a href="#" className="footer__link">faq</a></h4>
          </div>

          <div className="footer__item-2">
            <p className="footer__item-2--content">
              Our Local Campus center: Kilometer 7, 
              Enugu/Port<br/> Harcourt, Expressway, 
              Centenary City, Enugu.<br/>  Nigeria
            </p>
            <p><a href="#" className="footer__link mg-top">get in touch</a></p >
          </div>
        
        </div>
      <div className="footer__container-2">
          <div className="footer__container-img"></div>
          <div className="footer__container-2--content">
            <p>
              Learnable is proud to be <br/> a collaborative effort of <br/>  all the arms of our <br/>  product team
            </p>
            <p><a href="#" className="footer__link">head to devstudio</a></p >
          </div>
      </div>
      <div className="footer_icons">
        <div className="footer__icon-tweet">
        </div>
      </div>
    </div>
  </footer>
 )
}

export default Footer