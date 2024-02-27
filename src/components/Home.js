import React from "react";
import './Home.css';
import service1 from '../images/background/02-01.png'
import service2 from '../images/background/03.png'
import service3 from '../images/background/05-01.png'
import service4 from '../images/background/01-01.png'
import service5 from '../images/background/04-01.png'
import service6 from '../images/background/03.png'
import whychoose from '../images/background/WhyChoose.png'
import serviceImg from  '../images/background/our-services.jpg' 
import CarouselImg from '../images/background/pexels-gustavo-fring-6285070.jpg'   
const Home=()=>{
    return(
        <>
        <div className="row">
            <div className="col-12 p-0">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div className="col-12 col-md-">

                        </div>
                        <div class="carousel-item active carousel-one">
                        <img src={CarouselImg} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption ">
                            <div className="row">
                                <div className="col-3 carousel-icons">
                                    <p><i className="fab fa-facebook my-2"></i></p>
                                     <p> <i className="fab fa-instagram my-2"></i></p>
                                   <p><i className="fab fa-twitter my-2"></i></p>
                                     <p><i className="fab fa-linkedin-in my-2"></i></p>
                                

                                </div>
                                <div className="col-9">

                                </div>
                            </div>
                            
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> */}
                    </div>
            </div>

        </div>
        {/* End of herosection */}
        <div className="row post-hero" >
           <div className="col-11 mx-auto">
            <div className="row p-1">
                <div className="col-12 col-md-6 col-lg-4 ">
                    <div className="card my-3 border-0 multi-service">
                        <div className="row">
                            <div className="col-3 text-start p-0 mt-4 mt-md-3 mt-lg-2 service-image-col">
                            <img src={service1} className=" rounded-start service-images p-0 " alt="..."/>    
                            </div>
                            <div className="col-9 p-0">
                            <div className="card-body ">
                                <h4 className="card-title service-head fw-bold">WEBSITE DESIGN & DEVELOPMENT</h4>
                                <p className="card-text text-secondary">Crafting Digital Excellence, One Pixel at a Time</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                    <div className="card my-3 border-0 multi-service">
                        <div className="row">
                            <div className="col-3 text-start p-0 mt-4 mt-md-3 mt-lg-2 service-image-col">
                            <img src={service2} className=" rounded-start service-images p-0 " alt="..."/>    
                            </div>
                            <div className="col-9 p-0">
                            <div className="card-body ">
                                <h4 className="card-title service-head fw-bold">SUPPORT MSME ENTERPRISES</h4>
                                <p className="card-text text-secondary">Nurturing Growth, Empowering MSMEs</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                    <div className="card my-3 border-0 multi-service">
                        <div className="row">
                            <div className="col-3 text-start p-0 mt-4 mt-md-3 mt-lg-2 service-image-col">
                            <img src={service3} className=" rounded-start service-images p-0 " alt="..."/>    
                            </div>
                            <div className="col-9 p-0">
                            <div className="card-body ">
                                <h4 className="card-title service-head fw-bold">DIGITAL MARKETING</h4>
                                <p className="card-text text-secondary">Unlocking Your Digital Potentia</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                    <div className="card my-3 border-0 multi-service">
                        <div className="row">
                            <div className="col-3 text-start p-0 mt-4 mt-md-3 mt-lg-2 service-image-col">
                            <img src={service4} className=" rounded-start service-images p-0 " alt="..."/>    
                            </div>
                            <div className="col-9 p-0">
                            <div className="card-body ">
                                <h4 className="card-title service-head fw-bold">DATA ANALYSIS</h4>
                                <p className="card-text text-secondary">Uncover Insights, Drive Excellence: Data in Action</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                    <div className="card my-3 border-0 multi-service">
                        <div className="row">
                            <div className="col-3 text-start p-0 mt-4 mt-md-3 mt-lg-2 service-image-col">
                            <img src={service5} className=" rounded-start service-images p-0 " alt="..."/>    
                            </div>
                            <div className="col-9 p-0">
                            <div className="card-body ">
                                <h4 className="card-title service-head fw-bold">LECOMAKE MANAGEMENT</h4>
                                <p className="card-text text-secondary">Nurturing Growth, Empowering MSMEs</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                    <div className="card my-3 border-0 multi-service">
                        <div className="row">
                            <div className="col-3 text-start p-0 mt-4 mt-md-3 mt-lg-2 service-image-col">
                            <img src={service6} className=" rounded-start service-images p-0 " alt="..."/>    
                            </div>
                            <div className="col-9 p-0">
                            <div className="card-body ">
                                <h4 className="card-title service-head fw-bold">ANDROID AND IOS APP DEVELOPMENT</h4>
                                <p className="card-text text-secondary">Nurturing Growth, Empowering MSMEs</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </div>
        {/* end of services card */}
        <div className="row why-choose py-5">
            <div className="col-12 col-lg-6 text-center position-relative">
                <img src={whychoose} alt="" className="img-fluid why-choose-img mx-auto w-75 h-100"/>
            </div>
            <div className="col-12 col-lg-6 position-relative Accordion-section">
                
              <div className="accordion p-5" id="accordionExample">
                <h3 className="Why-Lecomake my-5">Why Choose Lecomake</h3>
                <div class="accordion-item border-0">
                            <h3 class="accordion-header text-white" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i class="fas fa-hand-point-right me-3"></i>
                                Ready to elevate your IT Services ?
                            </button>
                            </h3>
                            <div id="collapseOne" class="accordion-collapse collapse show text-white" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            If you are ready to experience IT services that make a genuine difference, reach out to us today. Let is collaborate to elevate your IT capabilities and drive your business forward in the digital age.
                            </div>
                            </div>
                        </div>
                        <hr/>
                   <div className="accordion-item border-0">
                        <h3 className="accordion-header text-white" id="headingTwo">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <i class="fas fa-hand-point-right me-3"></i>
                            Ready to Shine in the Social Media Sphere ?
                        </button>
                        </h3>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-white">
                        If you are ready to amplify your social presence and build strong connections with your audience, reach out to us today. Let is embark on a social media journey that elevates your brand like never before.
                        </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="accordion-item border-0">
                        <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <i class="fas fa-hand-point-right me-3"></i>
                            Ready to Transform your presence ?
                        </button>
                        </h3>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-white">
                        This concise description offers a clear and engaging overview of your web design and development services, emphasizing key benefits and why visitors should choose your services. Remember to customize it with your company name and any specific details that set your business apart.
                        </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="accordion-item border-0">
                        <h3 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <i class="fas fa-hand-point-right me-3"></i>
                             Ready to take your brand global ?
                        </button>
                        </h3>
                        <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-white">
                        Reach out to our team today and explore the endless possibilities of worldwide brand promotion. Together, let is elevate your brand to new heights on a global stage.
                        </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
        {/* end of why choose lecomake company */}
        <div className="row p-5 we-creative">
            <div className="col-12 col-md-10 col-lg-7 mx-auto text-center my-5" >
            <h3 className="Creative">we are creative IT Company</h3>
                <p className="text-white px-md-3 px-lg-5">Lecomake Pvt. Ltd, we are your comprehensive solution for creative IT services, social media management, and website development. We are passionate about harnessing the power of technology and creativity to help your brand shine in the digital world.s</p>
            </div>
            <div className="col-12  col-lg-11 col-xl-10 mx-auto">    
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div class="card Creative-cards">
                            <div class="row">
                                <div class="col-6 ">
                                <p className="counter ps-3">317</p>
                                </div>
                                <div class="col-6 p-0">
                                <div class="card-body">
                                    <h5 class="card-title text-white text-start">SATISFIED CLIENTS</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div class="card border-0 Creative-cards">
                            <div class="row ">
                                <div class="col-6">
                                <p className="counter ps-3">22</p>
                                </div>
                                <div class="col-6  p-0 ">
                                <div class="card-body">
                                    <h5 class="card-title text-white text-start">COMPANY MEMBERS</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div class="card border-0 Creative-cards">
                            <div class="row  ">
                                <div class="col-6">
                                <p className="counter ps-3">15</p>
                                </div>
                                <div class="col-6 p-0 ">
                                <div class="card-body">
                                    <h5 class="card-title text-white text-start">AWARDS WON</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div class="card border-0 Creative-cards">
                            <div class="row">
                                <div class="col-6">
                                <p className="counter ps-3">2</p>
                                </div>
                                <div class="col-6 p-0">
                                <div class="card-body">
                                    <h5 class="card-title text-white text-start">YEARS OF EXPERIENCE</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end of we are creative it company */}
        <div className="row py-5"id="our-service">
            <h2 className="text-center text-white">Our Services</h2>
            <div className="col-12 col-md-4 col-lg-3 mx-auto my-3">
             <div class="card Our-Service-Card bg-transparent">
                <div class="card-body text-center">
                    <h5 class="card-title our-service-head">INFORMATION TECHNOLOGY</h5>
                    <p class="card-text py-2 px-lg-4 service-card-text">
                    Proactive monitoring and maintenance of IT infrastructure, Helpdesk support for end-users, IT security management, Data backup and disaster recovery, Network management and optimization..</p>
                    <p className="know-more">know more</p>
                    <img src={serviceImg} alt="" className="img-fluid serviceImg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mx-auto my-3">
             <div class="card Our-Service-Card bg-transparent">
                <div class="card-body text-center">
                    <h5 class="card-title our-service-head">WEBSITE & SOFTWARE</h5>
                    <p class="card-text py-2 px-lg-4 service-card-text">
                    We listen to your needs and deliver solutions that exceed expectations, Custom Web Design & development, Mobile Optimization, Intuitive User Experience, Cutting-Edge Development, SEO Integration.</p>
                    <p className="know-more">know more</p>
                    <img src={serviceImg} alt="" className="img-fluid serviceImg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mx-auto my-3">
             <div class="card Our-Service-Card bg-transparent">
                <div class="card-body our-service-head">
                    <h5 class="card-title text-white">SOCIAL MEDIA HANDLE</h5>
                    <p class="card-text py-2 px-lg-4 service-card-text">
                    Efficient resource allocation, including talent and budget management. Moreover, effective communication and collaboration among cross-functional teams promote synergy and enable seamless project execution.</p>
                    <p className="know-more">know more</p>
                    <img src={serviceImg} alt="" className="img-fluid serviceImg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mx-auto my-3">
             <div class="card Our-Service-Card bg-transparent">
                <div class="card-body our-service-head">
                    <h5 class="card-title text-white">BRAND PROMOTION</h5>
                    <p class="card-text py-2 px-lg-4 service-card-text">
                    We handle all major social platforms, including Facebook, Twitter, Instagram, LinkedIn, and more, Strategic Approach, Content Creation, Audience Engagement, Analytics and Insights, Trend Awareness</p>
                    <p className="know-more">know more</p>
                    <img src={serviceImg} alt="" className="img-fluid serviceImg" />
                </div>
              </div>
            </div>  
        </div>
        {/* end of our services section */}
        <div className="row py-5" id="Explore">
            <div className="col-12 col-md-10 col-lg-7 text-center mx-auto">
            <h3 className="text-white">Explore Our Latest Works</h3>
                <p className="text-white">Lecomake, we take pride in our continuous commitment to innovation and excellence. Our latest works are a testament to our dedication to staying at the forefront of our industry and pushing the boundaries of creativity, technology, and design.</p>
                
            </div>
            <div className="col-12 col-md-11 col-lg-6 mx-auto ">
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs " id="myTab" role="tablist">
                    <li className="nav-item mx-auto" role="presentation">
                        <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
                    </li>
                    <li className="nav-item mx-auto" role="presentation">
                        <button className="nav-link" id="Web-tab" data-bs-toggle="tab" data-bs-target="#Web" type="button" role="tab" aria-controls="Web" aria-selected="false">Web Design</button>
                    </li>
                    <li className="nav-item mx-auto" role="presentation">
                        <button className="nav-link" id="App-tab" data-bs-toggle="tab" data-bs-target="#App" type="button" role="tab" aria-controls="App" aria-selected="false">App Design</button>
                    </li>
                    <li className="nav-item mx-auto" role="presentation">
                        <button  className="nav-link" id="Brand-tab" data-bs-toggle="tab" data-bs-target="#Brand" type="button" role="tab" aria-controls="Brand" aria-selected="false">Brand</button>
                    </li>
                    <li className="nav-item mx-auto" role="presentation">
                        <button  className="nav-link" id="Development-tab" data-bs-toggle="tab" data-bs-target="#Development" type="button" role="tab" aria-controls="Development" aria-selected="false">Development</button>
                    </li>
                    </ul>
                </div>
                    {/* Tab panes  */}
                <div className="col-12 col-md-11 col-lg-10 mx-auto">
                    <div className="tab-content my-5">
                    <div  className="tab-pane active" id="all" role="tabpanel" aria-labelledby ="all-tab" tabindex="0">
                        <div className="row mx-auto">
                            <div className="col-12 col-md-6 col-lg-3 ">
                            <div className="Images-card my-2 all-one">
                                    <div className="content" onclick="OnClick()" >
                                        <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 ">
                            <div className="Images-card my-2 all-two">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-three ">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-four">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-five">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-six">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-seven">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-eight">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-nine">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="Images-card my-2 all-ten">
                                    <div className="content" onclick="OnClick()" >
                                    <div>
                                        <h2>Dubai</h2>
                                        <h3>United Arab Emirates</h3>  
                                        </div> 
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane" id="Web-Design" role="tabpanel" aria-labelledby="Web-Design-tab" tabindex="0">

                    </div>
                    <div className="tab-pane" id="App" role="tabpanel" aria-labelledby="App-tab" tabindex="0">...</div>
                    <div className="tab-pane" id="Brand" role="tabpanel" aria-labelledby="Brand-tab" tabindex="0">...</div>
                    <div className="tab-pane" id="Development" role="tabpanel" aria-labelledby="Development-tab" tabindex="0">...</div>
                    </div>
            </div>
        </div>
        {/* end of explore section */}

        <div className="row py-5" id="contact">
            <div className="col-12 col-md-10 col-lg-7 my-5 mx-auto">
                 <h3 className="text-white">We are the best IT Services company ever!!</h3>
                 <p>Are you ready to embark on a project that sets new standards and breaks boundaries? Reach out to us today and let is collaborate on your next venture.</p>
            </div>
             
        </div>
        
    </>
    );
}
export default Home;