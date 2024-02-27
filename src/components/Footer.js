import React from 'react'
import logo from'../images/background/Lecomake-logo.png'
import './Footer.css';
 const Footer=()=>{
    return(
                <>
                 <div className='row' id="footer">
                    <div className='col-12 col-md-11 col-lg-10 mx-auto'>
                      <h4 className='text-center text-white'>Get In Touch</h4>
                      
                      <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4 py-5'>
                            <img src={logo} alt='' className='img-fluid' width={75} height={50} />
                            <p className='footer-description'>Founded in 2021, LECOMAKE PRIVATE LIMITED has evolved from a small but passionate team of tech enthusiasts into a dynamic force in the digital world. Our journey has been characterized by growth, innovation, and a relentless pursuit of excellence.</p>
                            <p className='footer-description'>
                            We are worked with clients of all sizes, across diverse industries, and in various corners of the globe, creating a diverse portfolio of success stories.s  
                            </p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 py-5'>
                            <h2 className='text-white'>Contact Us</h2>
                            <h6 className='text-white'>Address Information</h6>
                            <p className='text-white'>Head Office</p>
                            <p className='footer-description'>Third Floor, Office 02 , Magneto Mall, Bilaspur 495001 (C.G.) India</p>
                            <p className='text-white'>Our Branches</p>
                            <p className='footer-description'>India : 4TH FLOOR,KALINGHA VIHAR,PS-TAMANDO,BHUBANESWAR-751019 Odisha</p>
                            <p className='footer-description'>USA : 1250 Glenoaks Blvd. Suite 294 Glendale, CA 91201</p>
                            <p className='text-white'> Call Now</p>
                            <p className='footer-description'>+91 834 900 5440</p>
                            <p className='text-white'> Mail</p>
                            <p className='footer-description'>support@lecomake.com</p>
                        </div >
                        <div className='col-12 col-md-6 col-lg-4 py-5'>
                                <h6 className=' text-white'>EXPLORE OUR SITE</h6>
                                 <ul className='explore-list '>
                                    <li>About Us</li>
                                    <li>Contact</li>
                                    <li>Our Services</li>
                                    <li>Disclaimer</li>
                                    <li>privacy Policy</li>
                                 </ul>
                        </div>
                      </div>
                    </div>

                 </div>
                </>
    );
 }
 export default Footer;