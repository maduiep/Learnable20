import React from 'react'
import '../styles/index.css'

const Homepage = ()  => {
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

   <main className="genesys__main--content">
    <section className="genesys__about--section">
     <h1>
      Genesys provides opportunities for <br /> young Nigerian techies and <br /> opportunities to grow and <br /> innovate.
     </h1>
    </section>
    <section className="genesys__learnable--section"></section>
    <section className="genesys__agora--section"></section>
    <section className="genesys__startzone--section"></section>
   </main>
   
   <footer></footer>
  </>
 )
}

export default Homepage