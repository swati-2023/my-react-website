import React from 'react'

function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a className="brand" href="#">
          Crushaders
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
