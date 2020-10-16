import React from 'react'
import '../styles/Learnable.css'

const Learnable = () => {
 return (
  <>
   <header className="genesys__header">
    <div className="genesys__logo">
     <img className="logo" src="/img/logo.png" all="LOGO"/>
    </div>
   
     <nav className="genesys__navbar">
      <ul className="navbar-items-1">
       <li><a href="#">learnable</a></li>
       <li><a href="#">agora</a></li>
       <li><a href="#">startzone</a></li>
       <li><a href="#">about</a></li>
       <li><a href="#">contact</a></li>
      </ul>
     </nav>
     <div className="genesys__navbar-right">
      <span className="build">build a product with</span>
      <button className="devstudio">
       <a href="#">devstudio</a>
      </button>
     </div>
   </header>


   <main></main>

   <footer className="genesys__footer">
    <div className="footer__content">
     <div className="footer__left">
     <ul className="footer__link-1">
      <li><a href="#" className="footer__link">build software</a></li>
      <li><a href="#" className="footer__link">design different</a></li>
      <li><a href="#" className="footer__link">apply your knowledge</a></li>
      <li><a href="#" className="footer__link">faq</a></li>
     </ul>
     
     </div>
     <div className="footer__middle">
      <p className="footer__item-1">
        Our Local Campus center: Kilometer 7, 
        Enugu/Port<br/> Harcourt, Expressway, 
        Centenary City, Enugu.<br/>  Nigeria
      </p>
      <p className="underline touch"><a href="#">get in touch</a></p>
     </div>

     <div className="footer__right">
      <div className="footer__img"></div>
        <div className="footer__remark">
          <p className="footer__item-2">
            Learnable is proud to be <br/> 
            a collaborative effort of <br/>  
            all the arms of our <br/>  product team
          </p>
          <p className="underline studio"><a href="#">head to devstudio</a></p>
        </div>
     </div>
    </div>
    <div className="footer__end">

     <ul className="footer__icons">
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
     </ul>

     <div className="footer__copyright">
      <p className="copy--right">&copy; Genesys 2020 <span className="ps">Privacy Statement</span></p>
    </div>
    </div>
  </footer>
  </>
 )
}

export default Learnable