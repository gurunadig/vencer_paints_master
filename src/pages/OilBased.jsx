import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';





function OilBasedPage(){
    return(

        <div>
            <Navbar/>

            <div class="row  container-fluid  m-0 p-0">
                   

                   <img className="img-fluid" src="./assets/img/banner1.jpg" alt="Oil Based Paint page"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-4 curved_interior"> 
                                  <div className=" def_ani wow animate__animated animate__fadeIn ">
                                    <h4 className="heading_interior text-black text_uppercase text-white mt-sm-5 ">Oil Based Enamels</h4>
                                  </div>
                              </div>
                             <div className="col-4"></div>
                               
                           </div>
                       </div>

                   
               </div>

               <div class="container-fluid bg_blue">
               <div class="container def_ani wow animate__animated animate__fadeInLeft">
                   <p class="text-white py-5 esthetics text-center ">
                   Enamels are perfectly suitable for painting your wooden and metal surfaces. It is oil-based and has a unique glossy look. Choose various enamels by Vencer Paints and enjoy its superior gloss and high performance. It is quite durable and lasts for a long time. Check out various options available and select something that adds to the overall appeal of your property.
                   </p>
               </div>
           </div>



           <div class="container pb-4">
               <div class="">
               <h2 class="text_uppercase text-center p-3 def_ani wow animate__animated animate__fadeInUp ">Range Of Oil enamels</h2>
               <div class="row">
                   <div class="col-4 "></div>

                   <div class="col-4 border_bottom"></div>

                   <div class="col-4 "></div>

               </div>
               
               </div>
               <div class="row justify-content-around mt-3 row-eq-height">


                   
                   <div class="col-lg-5 d-flex justify-content-center">
                   
                   <div class="card border-0 py-2 def_ani wow animate__animated animate__fadeInUp prodgridsize" >
                       <div class="row no-gutters py-2">
                           <div class="col-md-5 pt-5  pb-2 d-flex justify-content-center align-items-end  bg_grey" >
                               <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out" src="./assets/img/premium_high_gloss.png" alt="..." />
                           </div>
                           <div class="col-md-7 bg_contact_band prodgridsize" >
                               <div class="card-body bg_contact_band d-flex flex-column justify-content-center align-items-center ">
                                   <h5 class="card-title text_uppercase text-white text-center py-1">Premium High Gloss Enamel</h5>
                                   <p class="card-text text-white py-2 text-center">Is an premium High Gloss oil Based paint.</p>
                                   <Link to="/premiumenamels" class="btn btn-primary btn_white bord_green text_grey text_uppercase baseBlock">read
                           more</Link>
               
                               </div>
                           </div>
                       </div>
                   </div>
               
               </div>



                   <div class="col-lg-5 d-flex justify-content-center">
                   
                       <div class="card border-0 py-2 def_ani wow animate__animated animate__fadeInUp prodgridsize" >
                           <div class="row no-gutters py-2">
                               <div class="col-md-5 pt-5  pb-2 d-flex justify-content-center align-items-end  bg_grey" >
                                   <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out" src="./assets/img/master_coat.png" alt="..." />
                               </div>
                               <div class="col-md-7 bg_blue prodgridsize" >
                                   <div class="card-body bg_blue d-flex flex-column justify-content-center align-items-center ">
                                       <h5 class="card-title text_uppercase text-white text-center py-1">Master Coat Synthetic Enamel</h5>
                                       <p class="card-text text-white py-2 text-center">Is an premium Synthetic oil Based paint.</p>
                                       <Link to="/mastercoat" class="btn btn-primary btn_white bord_green text_grey text_uppercase baseBlock">read
                               more</Link>
                   
                                   </div>
                               </div>
                           </div>
                       </div>
                   
                   </div>

                  

               


               </div>

           </div>

           <div class="container-fluid pt-2 beautify_wall ">

               <div class="row container-sm  m-0 p-0">

                   <div class="col-md-10 pl-3 d-flex pt-5 mt-5 flex-column align-items-center justify-content-center">
                       <h1 class="text_uppercase beautify_h1  transparent_background text_vencer_blue def_ani wow animate__animated animate__fadeInDown p-3">Let's Beautify Your Home</h1>
                       <p class="text_black beautify_p  pt-3 def_ani wow animate__animated animate__fadeInLeft pl-3">Our Vencer paints experts are willing to answer all your queries</p>
                       
                       <span id="getintouch"></span>
                   </div>
               </div>

               <div class="row container-sm m-0 p-0">
                   <div class="col-md-10  d-flex flex-column align-items-center justify-content-center">
                       <a href="#getintouch" class="beautify_button"> <button type="button" href="#getintouch"
                       class="btn btn_color btn-block text-white py-3 my-3 my-md-0 text_uppercase beautify_button def_ani wow animate__animated animate__fadeInDown baseBlock_small">
                       get in touch</button>
                   </a>
                   </div>
               </div>

           </div>

         




            
            <Footer/>

        </div>
    )
}


export default OilBasedPage


