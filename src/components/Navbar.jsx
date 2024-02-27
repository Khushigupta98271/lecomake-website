import {Link} from "react-router-dom";
import React from 'react'
import logo from'../images/background/Lecomake-logo.png'
import './Navbar.css';
const Navbar =()=>{
    return(
        <>
        <div className="row my-0 main-nav">
         <div className="col-12 p-0 d-none d-lg-block">
         <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid wrapper">
                    <Link to='/' className="navbar-brand"  >
                        <img src={logo} alt="lecomake-logo" width={75} height={50} className='img-fluid'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                  
                          <li className="nav-item mx-2">
                        <Link to='Components/Home' className="nav-link regular">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to='/Components/Services' className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </Link>
                            <ul className="dropdown-menu">
                            <li><Link to='./Components/Services' className="dropdown-item"  >Lecomake Management</Link></li>
                            <li><Link to='/' className="dropdown-item"  >Website Design and Devlopment</Link></li>
                            <li><Link to='/' className="dropdown-item"  >Android & IOS Apllication Development</Link></li>
                            <li>< Link to='/' className="dropdown-item"  >Support MSME & Company</Link></li>
                            <li><Link to='/' className="dropdown-item"  >Digital Marketing</Link></li>
                            <li><Link to='/' className="dropdown-item"  >Data Analysis</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link to='/' className="nav-link ">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/' className="nav-link ">Career</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/' className="nav-link ">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/' className="nav-link ">Blog</Link>
                        </li>
                        
                    </ul>
                    <div className=' pe-5'>
                    <div className="dropdown pe-4">
                        <button className="btn btn-secondary dropdown-toggle rounded-0 bg-transparent login-button px-4 py-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-circle w-25 h-25  me-2"></i>  Log In
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link to='/' className="dropdown-item" href="#">Client Login</Link></li>
                            <li><Link to='/' className="dropdown-item" href="#">Employee Login</Link></li>
                            
                        </ul>
                    </div>
                    </div>
                    </div>
                </div>
            </nav>
         </div> {/* End of large screen Navbar */}
         <div className="col-12 p-0 d-block d-lg-none">
         <nav className="navbar sm-navbar">
                <div className="container-fluid ">
                    <Link to='/' className="navbar-brand"  >
                     <img src={logo} alt=""  width={75} height={50} className='img-fluid'/>
                    </Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header off-body">
                       <img src={logo} alt=""  width={75} height={50} className='img-fluid'/>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body off-body">   
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page"  >Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to='/' className="nav-link dropdown-toggle text-white"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </Link>
                            <ul className="dropdown-menu off-body ">
                            <li><Link to='/' className="dropdown-item text-white"  >Lecomake Management</Link></li>
                            <li><Link to='/' className="dropdown-item text-white"  >Website Design and Devlopment</Link></li>
                            <li><Link to='/' className="dropdown-item text-white"  >Android & IOS Apllication Development</Link></li>
                            <li><Link to='/' className="dropdown-item text-white"  >Support MSME & Company</Link></li>
                            <li><Link to='/' className="dropdown-item text-white"  >Digital Marketing</Link></li>
                            <li><Link to='/' className="dropdown-item text-white"  >Data Analysis</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link " aria-current="page"  >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link " aria-current="page"  >Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page"  >Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page"  >Blog</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
          </div>
        </div>
        </>
       
    )

}
export default Navbar;