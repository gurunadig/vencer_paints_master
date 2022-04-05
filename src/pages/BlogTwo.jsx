// import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function BlogTwo(){
    return(
        <div>
            <Navbar/>
            
            <div class="row  container-fluid d-flex align-items-center justify-content-center m-0 p-0">
                   <img className="img-fluid w-100" src="./assets/img/blogimg_2.jpg" alt="Interior Ezy Wash"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-12 d-flex align-items-center justify-content-center">
                        <h5 className="heading_blog text-white p-3 m-0 text_uppercase def_ani wow animate__animated animate__fadeInDown">
                        Yellow Colour Combination for Home Interiors
                        </h5>
                
                
                    </div>
                             <div className="col-4"></div>  
                           </div>
                       </div>
               </div>


            <div className="container-fluid px-2 px-sm-2 px-md-4 px-lg-5 py-4 bg_getintouch">
                <div className="row px-1 px-lg-4">
                    <div className="col-12 col-md-8 px-3">
                        <h3 className="py-3">Yellow Colour Combination for Home Interiors</h3>
                    <p>
                    Yellow is the color of memory, hope, joy and enlightenment. Yellow means light and warmth of summer. This basic color spreads a cheerful mood, helps to think clearly and helps to make decisions. Yellow is the perfect color for the interior walls of your study, as it stimulates your thought process, activates memory and ultimately improves your memory skills. Yellow emphasizes the idea of wisdom and knowledge.
                    </p>
                    </div>



                    <div className="col-12 pl-3  col-md-4 d-flex flex-column align-items-center carousel_image_1 carouselsize">
                        <div className="d-flex justify-content-around align-items-center py-5">
                            <a href="mailto:vencer@vencerpaints.com"><i className="fa-solid fa-envelope fa-3x px-5 blog_a"></i></a>
                            <a href="tel:+91-8296942539"><i className="fa-solid fa-phone fa-3x px-5 blog_a"></i></a>
                        </div>
                        <h4 className="py-3 text-white">Reach Out Now</h4>
                    <a href="tel:+91-8296942539" className="py-2 blog_a text-white under_effect"> <h2>+91-8296942539</h2></a>
                    <a href="mailto:vencer@vencerpaints.com" className="py-3 blog_a text-white under_effect"> <h3>vencer@vencerpaints.com</h3></a>
                    <a href="#getintouch" className="beautify_button py-2 blog_a text-white under_effect"> <button type="button mr-5" href="./getintouch.html"
                        className="btn btn_color btn-block text-white py-3 px-1 text_uppercase beautify_button baseBlock def_ani wow animate__animated animate__fadeInLeft">
                        Get In Touch</button>
                </a>



                    </div>            
                </div>
            </div>



            <Footer/>
        </div>
    )
}


export default BlogTwo