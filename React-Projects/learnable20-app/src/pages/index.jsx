import React from 'react'
import '../styles/index.css'

const Homepage = ()  => {
 return (
  <>
   <header className="learnale__header">
    <div className="learnable__logo">
     <img className="logo" src="/img/logo.png" all="LOGO"/>
    </div>
   
     <nav className="learable__navbar">
      <ul className="navbar-items-1">
       <li><a href="#">learnable</a></li>
       <li><a href="#">agora</a></li>
       <li><a href="#">startzone</a></li>
       <li><a href="#">about</a></li>
       <li><a href="#">contact</a></li>
      </ul>
     </nav>
     <div className="learnable__navbar-right">
      <span className="build">build a product with</span>
      <button>
       <a href="#">devstudio</a>
      </button>
     </div>
   
   </header>
   <main></main>
   <footer></footer>
  </>
 )
}

export default Homepage