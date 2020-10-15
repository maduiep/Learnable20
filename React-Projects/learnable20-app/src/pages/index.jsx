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
     <div className="about--text-content">
      <h1 className="about">
       Genesys provides opportunities for <br /> young Nigerian techies and <br /> opportunities to grow and <br /> innovate.
      </h1>
      <p>
       We understand that opportunities are scarce in these parts. We <br /> are either creating or exposing our people to these <br /> opportunities.
      </p>
     </div>
     <div className="about--image-content">
      <diV className="about--arrow-img"></diV>
      <div className="about--main--img"></div>
     </div>
    </section>

    <section className="genesys__learnable--section">
     <div className="learnable--img"></div>

     <div className="learnable--text-content">
      <h1 className="learnable--main-text">Learnable</h1>
      <p className="learnable-sub-text">
       Every year, young Nigerians are launching new careers in the technology 
       <br /> industry. Find out how Genesys is helping them do it.
      </p>
      <span><a href="#" className="learn-more">learn more</a></span>
     </div>
    </section>

    <section className="genesys__agora--section">
     <div className="agora--text-content">
      <h1 className="agora--main-text">Agora</h1>
      <p className="agora-sub-text">
       We are reimagining the workplace and how people work. 
       Find out how our <br /> 
       co-working spaces can help you enjoy the work that you do.
      </p>
      <span><a href="#" className="learn-more">learn more</a></span>
     </div>
     <div className="agora--img"></div>
    </section>
    <section className="genesys__startzone--section">
     <div className="startzone--img"></div>

     <div className="startzone--text-content">
      <h1 className="startzone--main-text">StartZone</h1>
      <p className="startzone-sub-text">
       The business environment is harsh for early-stage businesses. 
       We can help you <br /> rise above it all.
      </p>
      <span><a href="#" className="learn-more">learn more</a></span>
     </div>
    </section>

    <section className="genesys__otherThings--section">
    </section>

    <section className="genesys__bestTeam--section">
     <div className="bestTeam--img"></div>

     <div className="bestTeam--text-content">
      <h1 className="bestTeam--main-text">The best team in the world</h1>
      <p className="bestTeam-sub-text">
       We work with the most amazing people our industry has to offer. <br/> 
       They are really passionate about making a difference
      </p>
      <span><a href="#" className="learn-more">See team</a></span>
     </div>
    </section>
   </main>

   <footer></footer>
  </>
 )
}

export default Homepage