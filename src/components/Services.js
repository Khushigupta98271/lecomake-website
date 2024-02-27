import React from 'react'
import'./Services.css'
import serviceIcon from '../images/background/03.png'
import serviceImg from  '../images/background/our-services.jpg'
// import {Link} from "react-router-dom";
const Services =()=>{
    return(
        <>
            <div className='row '>
                <div className='col-12 Service-Main'>
                     <h2 className='text-center py-5 m-0'>Our Services</h2>
                     </div>
                <div className='col-12 col-md-6 we-provide' >
                   
                        <div className="card border-0 bg-transparent">
                                <div className="row p-0">
                                    <div className="col-md-5">
                                    <img src={serviceIcon} className='img-fluid' alt=''/>
                                    </div>
                                    <div className="col-md-7">
                                    <div className="card-body">
                                    <h3 className='mt-2 mt-lg-5'>We Provide A Digital Platform </h3>
                                    </div>
                                    </div>
                                </div>
                                </div>
                </div>
                <div className='col-12 col-md-6 we-provide'>
                  <p className=' p-3 mt-lg-2'>Lecomake Pvt. Ltd, we are your comprehensive solution for creative IT services, social media management, and website development. We are passionate about harnessing the power of technology and creativity to help your brand shine in the digital world.</p>
                </div>
            </div>
            <div className='row six-Services py-5'>
                <div className='col-12 col-md-6 col-lg-4'>
                <figure className="snip1477">
                    <img src={serviceImg} alt="sample38" />
                    <div className="title">
                        <div>
                        <h2>Lecomake  </h2>
                        <h4>management</h4>
                        </div>
                    </div>
                    <figcaption>
                        <p className='d-none d-md-block'>We Provide comprehensive solutions to streamline operations, optimize efficiency, and drive growth for businesses of all sizes.</p>
                    </figcaption>
                    {/* <a ></a> */}
                    </figure>
                    
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                <figure className="snip1477">
                    <img src={serviceImg} alt="sample38" />
                    <div className="title">
                        <div>
                        <h2>Web Design</h2>
                        <h4>& Development</h4>
                        </div>
                    </div>
                    <figcaption>
                        <p className='d-none d-md-block'>We Create Responsive end extremely fast websites,with latest technology</p>
                    </figcaption>
                    {/* <a ></a> */}
                    </figure>
                    
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                <figure className="snip1477">
                    <img src={serviceImg} alt="sample38" />
                    <div className="title">
                        <div>
                        <h2>Android & IOS</h2>
                        <h4>App Development</h4>
                        </div>
                    </div>
                    <figcaption>
                        <p className='d-none d-md-block'>Developing Android and iOS applications demands a comprehensive approach blending technical prowess with user-centric design</p>
                    </figcaption>
                    {/* <a ></a> */}
                    </figure>
                    
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                <figure className="snip1477">
                    <img src={serviceImg} alt="sample38" />
                    <div className="title">
                        <div>
                        <h2>Support MSME</h2>
                        <h4>& Comapany</h4>
                        </div>
                    </div>
                    <figcaption>
                        <p className='d-none d-md-block'>Supporting Micro, Small, and Medium Enterprises (MSMEs) by giving Financial Assistance, Capacity Building, Access to Markets, etc</p>
                    </figcaption>
                    {/* <a ></a> */}
                    </figure>
                    
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                <figure className="snip1477">
                    <img src={serviceImg} alt="sample38" />
                    <div className="title">
                        <div>
                        <h2>Digital </h2>
                        <h4>Marketing</h4>
                        </div>
                    </div>
                    <figcaption>
                        <p className='d-none d-md-block'> We  give a range of strategies and techniques used to promote products or services using digital channels such as search engines, social media, email, websites, and mobile apps. </p>
                    </figcaption>
                    {/* <a ></a> */}
                    </figure>
                    
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                <figure className="snip1477">
                    <img src={serviceImg} alt="sample38" />
                    <div className="title">
                        <div>
                        <h2>Data </h2>
                        <h4>Analysis</h4>
                        </div>
                    </div>
                    <figcaption>
                        <p className='d-none d-md-block'> A great variety of techniques and methodologies tailored to different types of data and objectives. Some key components of data analysis includes -Data Collection, Data Collection and so on.</p>
                    </figcaption>
                    {/* <a ></a> */}
                    </figure>
                    
                </div>

            </div>
        </>
    )
}
export default Services;