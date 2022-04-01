// import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function BlogDetails(){
    return(
        <div>
            <Navbar/>
            
            {/* <div className="">
                <div className="row container-fluid blog_background_2 m-0 ">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <h5 className="heading_blog text-white p-3 m-0 text_uppercase def_ani wow animate__animated animate__fadeInDown">
                            9 Creative Blue Colour Combinations and Photos
                        </h5>
                
                
                    </div>
                </div>
                <div className="p-2">
                </div>
            
            </div> */}

            <div class="row  container-fluid d-flex align-items-center justify-content-center m-0 p-0">
                   <img className="img-fluid" src="./assets/img/carousel_2.jpg" alt="Interior Ezy Wash"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-12 d-flex align-items-center justify-content-center">
                        <h5 className="heading_blog text-white p-3 m-0 text_uppercase def_ani wow animate__animated animate__fadeInDown">
                            9 Creative Blue Colour Combinations and Photos
                        </h5>
                
                
                    </div>
                             <div className="col-4"></div>  
                           </div>
                       </div>
               </div>


            <div className="container-fluid px-2 px-sm-2 px-md-4 px-lg-5 py-4 bg_getintouch">
                <div className="row px-1 px-lg-4">
                    <div className="col-12 col-md-8 px-3">
                        <h3 className="py-3">Blue Colour Combination for Home Interiors</h3>
                    <p>Are you wondering about colours that go with grey? Despite its apparent neutrality, there’s never a dull moment with the colour grey. It’s versatile and can serve as an effective backdrop for any living space as well as take centre stage when it comes to interior décor. As such, it lies somewhere between black and white, and is a mix of both colours.</p>
                        <p>Grey can appear dark, almost black, and also light which resembles a shadow. Each of grey’s tints and shades gives a bedroom, living room, or kitchen a different persona. As per the science of colour psychology, this seemingly mute colour has lots to say. Glamour, stylish minimalism, and professionalism are some of the qualities this colour represents.</p>
                        <p>Modern sophistication is what will be the cornerstone of your design when you opt for grey. The beauty of using grey colour is that it blends brilliantly with other hues to create design concepts. There are several grey colour combinations that provide a rich and classNamey feel.</p>
                        <p>The colour is definitely for urbane homes. The sleek and industrial finish it gives to any living space is representative of sanctuaries in fast-paced cities. The colour is meditative in its own way and provides a soothing escape from the humdrum of daily life. Those who choose it for their homes will find that it also lends itself perfectly for other interior accessories like houseplants, wall paintings and sculpture.</p>
                        <p>While the colour works well for contemporary design, grey also provides a tinge of antiquity. There is a certain vintage charm to it when it is paired with dark colours. Depending on the colours you match it with, grey offers up a world of options for you to choose for the next design for your home. It works just as well for living rooms, kids’ rooms, master bedrooms, and kitchens.</p>
                        <p>Read on to know the best grey colour combinations for your home interior decoration.</p>
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


export default BlogDetails