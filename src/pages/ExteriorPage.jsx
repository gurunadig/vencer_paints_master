import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

function ExteriorPage(){
    return(

        <div>
            <Navbar/>

            <div class="row  container-fluid  m-0 p-0">
                   <img className="img-fluid" src="./assets/img/Exterior_Banner_2.jpg" alt="exterior product Image"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-4 curved_interior"> 
                                  <div className=" def_ani wow animate__animated animate__fadeIn ">
                                    <h4 className="heading_interior text-black text_uppercase text-white mt-sm-5 ">Our Exterior Products</h4>
                                  </div>
                              </div>
                             <div className="col-4"></div>     
                           </div>
                       </div>
               </div>


            <div className="container-fluid bg_blue">
                <div className="container def_ani wow animate__animated animate__fadeInLeft">
                    <p className="text-white py-5 esthetics text-center ">
                    Your search for the best in class exterior paints that comes with excellent qualities comes to an end with the range of options available at Vencer Paints. There are high quality exterior emulsions, floor, and tile paints available at Vencer Paints. It can withstand nature’s elements and stay as fresh and graceful as new for a long time.

                    </p>
                </div>
            </div>
            
            <div class="container pb-4">
    <div class="">
       <h2 class="text_uppercase text-center p-3 def_ani wow animate__animated animate__fadeInUp ">Range Of Exterior Paints</h2>
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
                    <div class="col-md-5  d-flex justify-content-center align-items-end  bg_grey">
                        <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out" src="./assets/img/product_supershield_cropped.png" alt="..." />
                    </div>
                    <div class="col-md-7 ">
                        <div class="card-body bg_contact_band d-flex flex-column justify-content-center align-items-center">
                            <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Super Shield</h5>
                            <p class="card-text text-white py-2 text-center"> WEATHER GUARD <br/> LATEX <br/> ACRYLIC <br/> EMULSION</p>

                            <Link to="/supershield" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
                                more</Link>

                        </div>
                    </div>
                </div>
            </div>
        
        </div>


        <div class="col-lg-5 d-flex justify-content-center align-items-center flex-wrap row-eq-height">
        
            <div class="card border-0 py-2 def_ani wow animate__animated animate__fadeInUp prodgridsize" >
                <div class="row no-gutters py-2">
                    <div class="col-md-5 pt-5  pb-2 d-flex justify-content-center align-items-end  bg_grey prodgridsize" >
                        <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out" src="./assets/img/armour_exterior.png" alt="..." />
                    </div>
                    <div class="col-md-7 bg_blue prodgridsize" >
                        <div class="card-body bg_blue d-flex flex-column justify-content-center align-items-center ">
                            <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Armour</h5>
                            <p class="card-text text-white py-2 text-center">Is high durability exterior paint to withstand conditions like heavy rainfall, extreme heat and high humidity.</p>
                            <Link to="/armour" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
                                more</Link>
        
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

        <div class="col-lg-5 d-flex justify-content-center">
        
            <div class="card border-0 py-2 def_ani wow animate__animated animate__fadeInLeft prodgridsize" >
                <div class="row no-gutters py-2">
                    <div class="col-md-5  d-flex justify-content-center align-items-end  bg_grey ">
                        <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out p-1" src="./assets/img/weather_guard.png" alt="..." />
                    </div>
                    <div class="col-md-7 ">
                        <div class="card-body bg_contact_band d-flex flex-column justify-content-center align-items-center">
                            <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Weather Guard</h5>
                                                    <p class="card-text text-white py-2 text-center">Acrylic Emulsion water based paint.Is economical suit dry or moderately humid climatic conditions.</p>

                            <Link to="/weatherguard" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
                                more</Link>
        
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
        
        <div class="col-lg-5 d-flex justify-content-center">
        
        <div class="card border-0 py-2 def_ani wow animate__animated animate__fadeInLeft prodgridsize" >
            <div class="row no-gutters py-2">
                <div class="col-md-5  d-flex justify-content-center align-items-end  bg_grey ">
                    <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out p-1" src="./assets/img/weather_guard_advanced.png" alt="..." />
                </div>
                <div class="col-md-7 ">
                    <div class="card-body bg_contact_band d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Weather Guard ADVANCED</h5>
                                                <p class="card-text text-white py-2 text-center">Acrylic Emulsion water based paint.Advanced weather protection.</p>

                        <Link to="/weatherguardadvanced" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
                            more</Link>
    
                    </div>
                </div>
            </div>
        </div>
    
    </div>




    </div>


</div>

            <div className="container-fluid pt-2 beautify_wall ">

                <div className="row container-sm  m-0 p-0">

                    <div className="col-md-10 pl-3 d-flex flex-column align-items-center pt-5 mt-5 justify-content-start">
                        <h1 className="text_uppercase beautify_h1  transparent_background text_vencer_blue def_ani wow animate__animated animate__fadeInDown p-3">Let's Beautify Your Home</h1>
                        <p className="text_black beautify_p  pt-3 def_ani wow animate__animated animate__fadeInLeft pl-3">Our Vencer paints experts are willing to answer all your queries</p>
                        
                        <span id="getintouch"></span>
                    </div>
                </div>

                <div className="row container-sm m-0 p-0">
                    <div className="col-md-10  d-flex flex-column align-items-center justify-content-center">
                        <a href="#getintouch" className="beautify_button"> <button type="button" href="#getintouch"
                        className="btn btn_color btn-block text-white py-3 my-3 my-md-0 text_uppercase beautify_button def_ani wow animate__animated animate__fadeInDown baseBlock_small">
                        get in touch</button>
                    </a>
                    </div>
                </div>

            </div>



            <Footer/>
        </div>

)
}


export default ExteriorPage