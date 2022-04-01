import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'

function Putty(){
    return(

        <div>
            <Navbar/>

            <div class="row  container-fluid  m-0 p-0">
                   <img className="img-fluid" src="./assets/img/banner1.jpg" alt="Wall Decor"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-4 curved_interior"> 
                                  <div className=" def_ani wow animate__animated animate__fadeIn ">
                                    <h4 className="heading_interior text-black text_uppercase text-white mt-sm-5 ">Vencer Paints Wall Decor</h4>
                                  </div>
                              </div>
                             <div className="col-4"></div>  
                           </div>
                       </div>
               </div>






    <section class="container-fluid bg_blue">
        <div class="container-lg">

            <div class="row">
                <div class="col-xs-4 col-md-4 mb-2 mt-5 pt-4 d-flex justify-content-center">
                    <img class="product_inner_img def_ani wow animate__animated animate__slideInLeft zoom_out" src="./assets/img/walldecor.png" alt="royal_heritage" />

                </div>
                <div class="col-xs-12 col-md-8 pt-4 pb-2 d-flex flex-column ">
                    <h3 class="text-white text_uppercase text-center super_shield_h3 px-5 pt-5 def_ani wow animate__animated animate__fadeInDown">
                    Vencer Paints Wall Decor
                    </h3>
                    <p class="text-white pt-3 pl-0 pl-md-2  text-center super_shield_p def_ani wow animate__animated animate__fadeIn">
                    Wall Putty is a superior formulation, based on acrylic resin. Water Based WALL DECOR is specially designed for levelling and smoothening the undulations on interior walls. It provides a smooth surface for paint application. Thinning, if required, can be done by adding water and bending to a smooth paste. WALL DECOR Wall Putty becomes hard on air-drying. Cutting is easily done using emery paper and involves no strain.
                    </p>   
                </div>
            </div>
        </div>
    </section>





    <div class="container-fluid bg_f5f5f5 pt-5">
        <div class="row mx-2">
            <div class="col-md-12">



                <ul class="nav nav-pills mb-3 row d-flex justify-content-around" id="pills-tab" role="tablist">
                    <li class=" col-md-3 nav-item" role="presentation">
                        <a class="nav-link active text_uppercase text-center  custom_bg d-flex align-items-center justify-content-center  baseBlock_noHover def_ani wow animate__animated animate__fadeInDown"
                             id="pills-home-tab" data-toggle="pill"
                            href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Benefits</a>
                    </li>
                    <li class=" col-md-3 nav-item" role="presentation">
                        <a class="nav-link text_uppercase text-center  custom_bg d-flex align-items-center justify-content-center baseBlock_noHover def_ani wow animate__animated animate__fadeInDown"
                            id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                            aria-controls="pills-profile" aria-selected="false">Technical Data</a>
                    </li>
                    <li class=" col-md-3 nav-item" role="presentation">
                        <a class="nav-link text_uppercase text-center custom_bg d-flex align-items-center justify-content-center baseBlock_noHover def_ani wow animate__animated animate__fadeInDown"
                            id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                            aria-controls="pills-contact" aria-selected="false">Product Sheet</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active " id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">

                        <div class="row d-flex justify-content-md-between justify-content-center">


                            <div class="col-xs-12 col-sm-8 col-md-4  mt-5 d-flex justify-content-center">
                                <div
                                    class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img"src="./assets/svg/Anti_Bacterial.svg" alt=""/>
                                    <p class="super_shield_p p-2">Anti Bacterial</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_soft_sheen d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Anti_Fungal.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Anti Fungal</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Very_smooth.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Excellent Smoothness</p>
                                </div>
                            </div>
                        </div>




                        <div class="row d-flex justify-content-md-center justify-content-center">

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_soft_sheen d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Paint_and_Primer.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Paint and Primer</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5  mb-5  d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Elegant_sheen.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Elegant Sheen</p>
                                </div>
                            </div>

                        </div>


                    </div>



                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                        <div class="row d-flex p-0 p-md-5 my-2 justify-content-center align-items-center">
                            
                            <div class="col-12 col-md-12 col-lg-11 card p-3 pt-4 baseBlock_noHover">
                                

                                <table class="card-body table table-bordered">
                                
                                    <tbody>
                                    <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Packaging Size</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">1KG, 5KG, 10KG &#38; 20KG</td>
                                        </tr>
                                        <tr class="">
                                            <td class=" table_bord  pl-1 pl-sm-5"><strong>Finish</strong></td>
                                            <td class=" table_bord pl-1 pl-sm-3">Luxury Smooth</td>
                                        </tr>
                                        <tr class="">
                                            <td class=" table_bord  pl-1 pl-sm-5"><strong>Brand</strong></td>
                                            <td class=" table_bord pl-1 pl-sm-3">VENCER PAINTS</td>
                                        </tr>
                                        <tr class="">
                                            <td class=" table_bord pl-1 pl-sm-5"><strong>Drying Time</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Touch Dry: Not more than 15 minutes; Hard Dry: Not more than 4 hours (4-6 ml wet film</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Colour</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">White</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Packaging Type</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Bucket</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Areas of Application</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Interior Wall Masonry, Asbestos False Ceiling, Gypsum Board and Similar Substrates.</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Consistency of Supply</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Smooth paste</td>
                                        </tr>
                                       
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Method of application</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Apply with putty knife</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    

                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div class="row d-flex p-1 p-md-5 justify-content-center">
                            <div class="col-12 col-md-12 col-lg-11 p-2 p-md-5">
                                <h4 class="about_highlight_max text-left">Directions for use: </h4>
                                <ul class="p-3 ul_list_square">
                                    <li>
                                        <p class="tech_spec pl-2 py-1">
                                        Ensure the surface is thoroughly clean, free from dust, dirt, grease, etc. by sanding with Emery Paper No. 180 and wiping off the powder with a cloth or cotton waste. Apply SAWP directly on primed wall without thinning using a putty knife. Deep dents and pores should not be filled at a time, but in thin layers. Allow to dry for 6 hours or overnight and rub the wall with emery paper No. 180. The loose powder on the surface is to be wiped off with a cloth or cotton waste.

                                        </p>
                                    </li>
                                  
                                    </ul>


                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


            <Footer/>
        </div>

)
}


export default Putty