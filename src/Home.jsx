import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './footer'
import firstslider from './assets/images/firstslider.jpg'

function Home() {
  return (
    <div className="home"> 
      <Header />

      <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="offcanvas__close">
                <button className="offcanvas__close-btn offcanvas-close-btn">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit"><i className="far fa-search"></i></button>
              </form>
            </div>
            <div className="mobile-menu fix mb-40"></div>

            <div className="offcanvas__map d-none d-lg-block mb-15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"></iframe>
            </div>

            <div className="offcanvas__contact mt-30 mb-20">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!1d23.8104753!4d90.4119873">12/A,
                      Mirnada City Tower, NYC</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:support@gmail.com">088889797697</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:+012-345-6789">support@mail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="body-overlay"></div>

      <div className="bd-slider__section">
        <div className="bd-slider__active bd-slider__wrapper swiper-container">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
              style={{ backgroundImage: `url(${firstslider})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
                    <div className="bd-slider__content">
                      <span className="bd-slider__subtitle" data-animation="fadeInUp" data-delay=".3s">We are
                        creative</span>
                      <h3 className="bd-slider__title" data-animation="fadeInUp" data-delay=".5s">Clean Simple &
                        Minimal</h3>
                      <p data-animation="fadeInUp" data-delay=".7s">Lorem ipsum dolor sit amet consmod tempor
                      </p>
                      <div className="bd-slider__btn" data-animation="fadeInUp" data-delay=".9s">
                        <a href="about.html" className="bd-btn">Read More <span><i
                          className="fa-regular fa-angle-right"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
                    <div className="bd-slider__content">
                      <span className="bd-slider__subtitle" data-animation="fadeInUp" data-delay=".3s">We are
                        creative inc.</span>
                      <h3 className="bd-slider__title" data-animation="fadeInUp" data-delay=".5s">Clean Simple &
                        Minimal</h3>
                      <p data-animation="fadeInUp" data-delay=".7s">Lorem ipsum dolor sit amet consmod tempor
                      </p>
                      <div className="bd-slider__btn" data-animation="fadeInUp" data-delay=".9s">
                        <a href="about.html" className="bd-btn">Read More <span><i
                          className="fa-regular fa-angle-right"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
