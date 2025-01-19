import React, { useState } from 'react';
import './Home.css';

import { Link } from "react-router-dom";

function Home() {
  


  return (
    <div>
      <nav className='navv'>
        <div className="navv__logo">OnlyMALADIVES.com</div>
       
        {/* Navigation Links */}
        <ul className="navv__links">
          <li className="links"><a href="#">Home</a></li>
          <li className="links"><Link to="/booking">Book</Link></li>
          <li className="links"><Link to="/blog">Blog</Link></li>
          <li className="links"><Link to="/Aboutus">About Us</Link></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="section__container header__container">
        <div className="header__image__container">
          <div className="header__content">
            <Link to="/blog"><h1>Enjoy Your Dream Vacation</h1></Link>
            <p>Book Hotels, Flights, and stay packages at lowest price.</p>
          </div>
          <div className="booking__container">
            <button className="btn"><Link to="/booking">REGISTER & BOOK NOW</Link></button>
          </div>
        </div>
      </header>

      {/* Popular Hotels Section */}
      <section className="section__container popular__container">
        <h2 className="section__header">Popular Hotels</h2>
        <div className="popular__grid">
          <div className="popular__card">
            <img src="assests/hotel-1.jpg" alt="popular hotel" />
            <div className="popular__content">
              <div className="popular__card__header">
                <h4>maladives Hotel-1</h4>
                <h4>$499</h4>
              </div>
              <p>maladives</p>
            </div>
          </div>
          <div className="popular__card">
            <img src="assests/hotel-2.jpg" alt="popular hotel" />
            <div className="popular__content">
              <div className="popular__card__header">
                <h4>maladives Hotel-2</h4>
                <h4>$549</h4>
              </div>
              <p>maladives</p>
            </div>
          </div>
          <div className="popular__card">
            <img src="assests/hotel-3.jpg" alt="popular hotel" />
            <div className="popular__content">
              <div className="popular__card__header">
                <h4>maladives Hotel-3</h4>
                <h4>$599</h4>
              </div>
              <p>maladives</p>
            </div>
          </div>
          <div className="popular__card">
            <img src="assests/hotel-4.jpg" alt="popular hotel" />
            <div className="popular__content">
              <div className="popular__card__header">
                <h4>maladives Hotel-4</h4>
                <h4>$449</h4>
              </div>
              <p>maladives</p>
            </div>
          </div>
          <div className="popular__card">
            <img src="assests/hotel-5.jpg" alt="popular hotel" />
            <div className="popular__content">
              <div className="popular__card__header">
                <h4>maladives Hotel-5</h4>
                <h4>$649</h4>
              </div>
              <p>maladives</p>
            </div>
          </div>
          <div className="popular__card">
            <img src="assests/blog-5.jpg" alt="popular hotel" />
            <div className="popular__content">
              <div className="popular__card__header">
                <h4>maladives Hotel-6</h4>
                <h4>$549</h4>
              </div>
              <p>maladives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="client">
        <div className="section__container client__container">
          <h2 className="section__header">What our clients say</h2>
          <div className="client__grid">
            <div className="client__card">
              <img src="assests/client-1.png" alt="client" />
              <p>
                The booking process was seamless, and the confirmation was
                instant. I highly recommend WDM&Co for hassle-free hotel bookings.
              </p>
            </div>
            <div className="client__card">
              <img src="assests/client-2.png" alt="client" />
              <p>
                The website provided detailed information about the hotel,
                including amenities and photos, which helped me make an informed decision.
              </p>
            </div>
            <div className="client__card">
              <img src="assests/client-3.png" alt="client" />
              <p>
                I was able to book a room within minutes, and the hotel exceeded
                my expectations. I appreciate WDM&Co's efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="section__container">
        <div className="reward__container">
          <p>100+ discount codes</p>
          <h4>Join rewards and discover amazing discounts on your booking</h4>
          <button className="reward__btn">Join Rewards</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>onlyMALADIVES.com</h3>
            <p>
              onlyMALADIVES.com is a premier hotel booking website that offers a seamless and
              convenient way to find and book accommodations worldwide.
            </p>
            <p>
              With a user-friendly interface and a vast selection of hotels,
              onlyMALADIVES.com aims to provide a stress-free experience for travelers
              seeking the perfect stay.
            </p>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <li className="links"><Link to="/Aboutus">Book</Link></li>
            <li className="links"><Link to="/Aboutus">Our Team</Link></li>
            <li className="links"><Link to="/Aboutus">Blog</Link></li>
            <li className="links"><Link to="/Aboutus">About Us</Link></li>
                     
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <p>FAQs</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer__col">
            <h4>Resources</h4>
            <p>Social Media</p>
            <p>Help Center</p>
            <p>Partnerships</p>
          </div>
        </div>
        <div className="footer__bar">
          Venkatesh S Ui/Ux & MERN-STACK developer. <br /> +91 9342668237.
        </div>
      </footer>
    </div>
  );
}

export default Home;
