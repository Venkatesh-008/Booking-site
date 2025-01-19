import React from 'react'
import './Blog.css'

import { Link } from "react-router-dom";
function Blog() {
  return (
    <div>
      <header>
                                <nav>
                                    <div className="nav__logo">onlyMALADIVES.com</div>
                                    <ul className="nav__links">
                                    <li className="link"><Link to="/">Home</Link></li>
                                    <li className="link"><Link to="/booking">Book</Link></li>
                                    <li className="link"><Link to="/blog">blog</Link></li>
                                    <li className="link"><Link to ="/aboutus">About Us</Link></li>
                                    </ul>
                                </nav>
                            </header>

                            <section className="home" id="home">
                                <div className="home-text container">
                                    <h2 className="home-title">Travel Blog</h2>
                                    <span className="home-subtitle">Your source of great content</span>
                                </div>
                            </section>

                            <section className="about container" id="about">
                                <div className="contentBx">
                                    <h2 className="titleText">Catch up with the trending topics</h2>
                                    <p className="title-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos consequuntur voluptate dolorum totam provident ducimus cupiditate dolore doloribus repellat. Saepe ad fugit similique quis quam. Odio suscipit incidunt distinctio.
                                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis libero pariatur ipsum suscipit voluptates aut, repellendus quos dolor autem, natus laboriosam consectetur maxime cumque, sunt magni optio? Veritatis, ea?
                                    </p>
                                    <a href="#" className="btn2">Read more</a>
                                </div>
                                <div className="imgBx">
                                    <img src="./assests/blogheader.jpg" alt="" className="fitBg"/>
                                </div>
                            </section>
                            
                            <div className="post container">

                                <div className="post-box tech">
                                    <img src="assests/blog-1.jpg" alt="" className="post-img"/>
                                    <h2 className="category">Tech</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-1.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box food">
                                    <img src="assests/blog-2.jpg" alt="" className="post-img"/>
                                    <h2 className="category">Tech</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-2.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box food">
                                    <img src="assests/blog-3.jpg" alt="" className="post-img"/>
                                    <h2 className="category">Food</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-3.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box news">
                                    <img src="assests/blog-4.jpg" alt="" className="post-img"/>
                                    <h2 className="category">Tech</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-1.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box tech">
                                    <img src="assests/blog-5.jpg" alt="" className="post-img"/>
                                    <h2 className="category">Tech</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-3.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box news">
                                    <img src="assests/blog-6.jpg" alt="" className="post-img"/>
                                    <h2 className="category">News</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-2.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box tech">
                                    <img src="assests/blog-7.jpg" alt="" className="post-img"/>
                                    <h2 className="category">Tech</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-3.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box news">
                                    <img src="assests/hotel-2.jpg" alt="" className="post-img"/>
                                    <h2 className="category">News</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-2.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>

                                <div className="post-box food">
                                    <img src="assests/hotel-4.jpg" alt="" className="post-img"/>
                                    <h2 className="category">Food</h2>
                                    <a href="#" className="post-title">How to create the best UI with Figma</a>
                                    <span className="post-date">12 Feb 2022</span>
                                    <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
                                    <div className="profile">
                                        <img src="assests/client-1.png" alt="" className="profile-img"/>
                                        <span className="profile-name">MKHB</span>
                                    </div>
                                </div>
                            </div>

                            <footer>
                                <div className="footer-container">
                                    <div className="sec aboutus">
                                        <h2>About Us</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quisquam minus quo illo numquam vel incidunt pariatur hic commodi expedita tempora praesentium at iure fugiat ea, quam laborum aperiam veritatis.</p>

                                    </div>
                                    <div className="sec quicklinks">
                                        <h2>Quick Links</h2>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to ="/aboutus">About Us</Link></li>
                                        </ul>
                                    </div>
                                    <div className="sec contactBx">
                                        <h2>Contact Info</h2>
                                        <ul className="info">
                                            <li>

                                            </li>
                                            <li>
                                                <span><i className='bx bx-envelope' ></i></span>
                                                <p><a href="mailto:venkateshindira08@gmail.com">venkateshindira08@gmail.com</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </footer>
    </div>
  )
}

export default Blog;