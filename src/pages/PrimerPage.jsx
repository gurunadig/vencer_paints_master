import Navbar from '../components/Navbar';
import Footer from '../components/Footer';                      
import Getintouch from '../components/Getintouch';
import {Link} from 'react-router-dom';


function PrimerPage(){
    return(

        <div>
            <Navbar/>
                            


        <div class="row  container-fluid  m-0 p-0">
                   

                   <img className="img-fluid" src="./assets/img/banner_2.jpg" alt="Primer"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-4 curved_interior"> 
                                  <div className=" def_ani wow animate__animated animate__fadeIn ">
                                    <h4 className="heading_interior text-black text_uppercase text-white mt-sm-5 ">Our Primer Products</h4>
                                  </div>
                              </div>
                             <div className="col-4"></div>
                               
                           </div>
                       </div>

                   
               </div>

<div class="container-fluid bg_blue">
<div class="container def_ani wow animate__animated animate__fadeInLeft">
    <p class="text-white py-5 esthetics text-center ">
        Esthetics lie in the rhythm and balance of a space. Wood and metal brought together,
        create a unique setting that can be manipulated to create ancient charm or modern
        functionality. As beautiful as these surfaces are, wood and metal are sensitive to natural
        elements and need to be cared for. Vencer Paints has a range of products that can help you
        keep them beautiful and healthy.
        

    </p>
</div>
</div>

<div class="container pb-4">
<div class="">
<h2 class="text_uppercase text-center p-3 def_ani wow animate__animated animate__fadeInUp ">Range Of Primer Paints</h2>
<div class="row">
    <div class="col-4 "></div>

    <div class="col-4 border_bottom"></div>

    <div class="col-4 "></div>

</div>

</div>
<div class="row d-flex justify-content-around mt-3 row-eq-height">


    <div class="col-lg-5 d-flex justify-content-center">
    
        <div class="card border-0 py-2 def_ani wow animate__animated animate__fadeInUp prodgridsize" >
            <div class="row no-gutters py-2">
                <div class="col-md-5  d-flex justify-content-center align-items-end  bg_grey">
                    <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out pb-1" src="./assets/img/master_stroke.png" alt="..." />
                </div>
                <div class="col-md-7 ">
                    <div class="card-body bg_contact_band d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Master Stroke</h5>
                        <p class="card-text text-white py-2 text-center"> Interior Acrylic co-polymer emulsion to provide good opacity, hiding, coverage and good alkali resistance.
                            </p>

                        <Link to="/masterstroke" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
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
                    <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out" src="./assets/img/primex.png" alt="..." />
                </div>
                <div class="col-md-7 bg_blue prodgridsize" >
                    <div class="card-body bg_blue d-flex flex-column justify-content-center align-items-center ">
                        <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Primex</h5>
                        <p class="card-text text-white py-2 text-center">It is a Cement based Primer for Exterior surfaces.provide good opacity, hiding, coverage and good alkali resistance.</p>
                        <Link to="/primex" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
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
                    <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out pb-1" src="./assets/img/allround.png" alt="..." />
                </div>
                <div class="col-md-7 ">
                    <div class="card-body bg_contact_band d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints All Round</h5>
                            <p class="card-text text-white py-2 text-center">It is a Cement based Primer for both INTERIOR and EXTERIOR surfaces.Is based on acrylic co-polymer.
                            </p>   

                            <Link to="/allround" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
                more</Link>
    
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
    <div class="col-lg-5 d-flex justify-content-center">
        
    </div>
    




</div>      
</div>

            <Getintouch />


            <Footer/>
        </div>

)
}


export default PrimerPage