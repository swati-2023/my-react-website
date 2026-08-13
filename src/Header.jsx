import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/images/logo.png'

function Header() {
  return (
    <header>
      <div class="bd-header__section bd-header__transparent">
         <div class="bd-header__main" id="header-sticky">
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-lg-2 col-md-6 col-6">
                     <div class="logo">
                        <Link to="/">
                           <img src={logo} alt="logo" />
                        </Link>
                     </div>
                  </div>
                  <div class="col-lg-10 col-md-6 col-6">
                     <div class="d-flex justify-content-end">
                        <div class="main-menu">
                           <nav id="mobile-menu">
                              <ul>
                                 <li class="has-dropdown">
                                    <a href="index-3.html">Home</a>
                                    <ul class="submenu">
                                       <li><a href="index.html">Home Style 1</a></li>
                                       <li><a href="index-2.html">Home Style 2</a></li>
                                       <li><a href="index-3.html">Home Style 3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link to="/about">About</Link>
                                 </li>
                                 <li class="has-dropdown">
                                    <a href="portfolio.html">Projects</a>
                                    <ul class="submenu">
                                       <li><a href="portfolio.html">Projects V1</a></li>
                                       <li><a href="portfolio-2.html">Projects V2</a></li>
                                       <li><a href="portfolio-details.html">Projects Details V1</a></li>
                                       <li><a href="portfolio-details-2.html">Projects Details V2 </a></li>
                                       <li><a href="portfolio-details-3.html">Projects Details V3 </a></li>
                                       <li><a href="portfolio-details-4.html">Projects Details V4 </a></li>
                                       
                                    </ul>
                                 </li>
                                
                                 <li class="has-dropdown">
                                    <a href="services.html">Servics</a>
                                    <ul class="submenu">
                                       <li><a href="services.html">services</a></li>
                                       <li><a href="services-details.html">Services details</a></li>
                                    </ul>
                                 </li>
                                 <li class="has-dropdown">
                                    <a href="blog.html">Blog</a>
                                    <ul class="submenu">
                                       <li><a href="blog.html">Blog V1</a></li>
                                       <li><a href="blog-2.html">Blog V2</a></li>
                                       <li><a href="blog-3.html">Blog V3</a></li>
                                       <li><a href="blog-4.html">Blog V4</a></li>
                                       <li><a href="blog-details.html">Blog Details</a></li>
                                      
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="contact.html">Contact</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                        <div class="bd-header__main-right d-flex justify-content-end align-items-center pl-30">

                           <div class="bd-header__search d-none d-md-block p-relative">
                              <div class="bd-header__search-wrapper">
                                 <button class="bd-header__search-btn"><i class="fal fa-search"></i></button>
                                 <button class="bd-header__search-btn-close"><i class="fal fa-times"></i></button>
                              </div>
                              <div class="bd-header__search-form">
                                 <form>
                                    <input type="text" placeholder="Search Here" />
                                    <button><i class="fal fa-search"></i></button>
                                 </form>
                              </div>
                           </div>
                           <div class="bd-header__hamburger ml-50">
                              <button type="button" class="hamburger-btn offcanvas-open-btn">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
  )
}

export default Header
