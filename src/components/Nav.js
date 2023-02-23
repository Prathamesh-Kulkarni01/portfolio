import React, { useState } from 'react'
import './nav.css';


const Nav = () => {
    const [Nav, setNav] = useState(false)
  return (
    <div class="nav">
    <a href="/index.html" class="logo">Prathamesh</a>
      <div class="nav-link-container">
        <ul class="navlinks">
          <a href="/work.html" class="links"> Work</a>
          <a href="/about.html" class="links">About</a>
          <a href="/blog.html" class="links">Blog</a>
          <a href="/contacts.html" class="links">Contact</a>
        </ul>
      </div>

      {/* <!-- Side Nav For Mobile --> */}
      <div id="menu"class=" nav-link-container" onClick={()=>setNav(true)}>
        <p href='#'  class="icon" >
          <i class="fa fa-bars"></i>
        </p>
  </div>
    <div style={Nav?{display:'block',transform: "translate(0%)"}:{}}  id="mobile_nav">
      <h2 id="close"style={{backgroundColor:"seagreen",color:"seashell",padding: "16px",width: "23px",height: "23px",borderRadius: "50%",textAlign: "center",float: "right",margin: "10px"}} onClick={()=>setNav(false)} >X</h2>
      <div   class="">
        <ul class="navlink">
          <a href="/work.html" class="links"> Work</a>
          <hr></hr>
          <a href="/about.html" class="links">About</a>
          <hr></hr>
          <a href="/blog.html" class="links">Blog</a>
          <hr></hr>
          <a href="/contacts.html" class="links">Contact</a>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Nav