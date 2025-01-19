import React from 'react'
import './Aboutus.css'

import { Link } from "react-router-dom";
function Aboutus() {
  return (
    <div>
<header>
                                <nav>
                                    <div className="navvv__logo">onlyMALADIVES.com</div>
                                    <ul className="navvv__links">
                                    <li className="linkss"><Link to="/">Home</Link></li>
                                    <li className="linkss"><Link to="/booking">Book</Link></li>
                                    <li className="linkss"><Link to="/blog">blog</Link></li>
                                    <li className="linkss"><Link to="/aboutus">About Us</Link></li>
                                    </ul>
                                </nav>
                            </header>

<div className="aboutpic">
                             <section className="about containers" id="abouts">
                                <div className="contentBxs">
                                    <h2 className="titleTexts">About Us</h2>
                                    <p className="title-texts">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos consequuntur voluptate dolorum totam provident ducimus cupiditate dolore doloribus.
                                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis libero pariatur ipsum suscipit voluptates aut, repellendus quos dolor autem, natus laboriosam consectetur maxime cumque, sunt magni optio? Veritatis, ea?
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nihil aliquam, quae non dicta tenetur  possimus 
                                        <br /> quasi odit obcaecati libero laudantium autem harum quas iusto, amet esse exercitationem architecto, saepe corporis. Commodi, minima?
                                    </p>
                                </div>
                            </section>
        </div>

        
                            <footer className="footers">
                                    <div className="section__containers footer__containers">
                                        <div className="footer__cols">
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
                                        <div className="footer__cols">
                                       <h4>Company</h4>
                                                   <li className="links"><Link to="/">Home</Link></li>
                                                   <li className="links"><Link to="/Aboutus">Book</Link></li>
                                                   <li className="links"><Link to="/Aboutus">Blog</Link></li>
                                                   <li className="links"><Link to="/Aboutus">Our Team</Link></li>
                                        </div>
                                        <div className="footer__cols">
                                        <h4>Legal</h4>
                                        <p>FAQs</p>
                                        <p>Terms & Conditions</p>
                                        <p>Privacy Policy</p>
                                        </div>
                                        <div className="footer__cols">
                                        <h4>Resources</h4>
                                        <p>Social Media</p>
                                        <p>Help Center</p>
                                        <p>Partnerships</p>
                                        </div>
                                    </div>
                                    <div className="footer__bars">
                                        Venkatesh S Ui/Ux & MERN-STACK developer. <br /> +91 93426 68237.
                                    </div>
                                    </footer>
    </div>
  )
}

export default Aboutus;