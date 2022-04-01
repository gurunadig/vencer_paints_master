import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';                      
import Getintouch from '../../components/Getintouch';
import InspireColorPallet from '../../components/InspireColorPallet';


function EasyWash(){
    return(

        <div>
            <Navbar/>


            
            <div class="row  container-fluid  m-0 p-0">
                   <img className="img-fluid" src="./assets/img/ezy_wash_banner.jpg" alt="Interior Ezy Wash"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-4 curved_interior"> 
                                  <div className=" def_ani wow animate__animated animate__fadeIn ">
                                    <h4 className="heading_interior text-black text_uppercase text-white mt-sm-5 ">Vencer Paints Ezy Wash</h4>
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
                    <img class="product_inner_img def_ani wow animate__animated animate__slideInLeft zoom_out" src="./assets/img/Ezy_wash.png" alt="ezy_wash" />

                </div>
                <div class="col-xs-12 col-md-8 pt-4 pb-2 d-flex flex-column ">
                    <h3 class="text-white text_uppercase text-center super_shield_h3 px-5 pt-5 def_ani wow animate__animated animate__fadeInDown">vencer paints Ezy Wash
                    </h3>
                    <p class="text-white pt-3 pl-2  text-center super_shield_p def_ani wow animate__animated animate__fadeIn">
                        EZY Wash Premium Acrylic Emulsion Paint is a superior Interior wall paint formulation based on a highly durable co-polymer resin, high opacity pigments which contribute for improved wetting of the surface with paint ensuring smooth, excellent flow, even drying and easy to clean.
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
                            aria-controls="pills-contact" aria-selected="false">Usage</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active " id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">

                        <div class="row d-flex justify-content-md-between justify-content-center">


                            <div class="col-xs-12 col-sm-8 col-md-4  mt-5 d-flex justify-content-center">
                                <div
                                    class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Stain_Resistant.svg" alt=""/>
                                    <p class="super_shield_p p-2">Stain Resistant</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_soft_sheen d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Anti_Fungal.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Anti Algal</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Paint_and_Primer.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Paint and Primer</p>
                                </div>
                            </div>
                        </div>




                        <div class="row d-flex justify-content-md-center justify-content-center">

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_soft_sheen d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Elegant_sheen.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Elegant Sheen</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5  mb-5  d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Endures_3_years.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Endures 3 Years</p>
                                </div>
                            </div>

                        </div>


                    </div>



                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                        <div class="row d-flex p-2 p-md-5 my-2 justify-content-center align-items-center">
                            
                            <div class="col-12 col-md-12 col-lg-11 card p-3 pt-4 baseBlock_noHover">
                                

                                <table class="card-body table table-bordered">
                                
                                    <tbody>
                                        <tr class="">
                                            <td class=" table_bord  pl-1 pl-sm-5"><strong>Finish</strong></td>
                                            <td class=" table_bord pl-1 pl-sm-3">Smooth matt and slight sheen</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Paint Base Type</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Water Based Paint</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Surface Drying Time</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">45 minutes</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Coats Required</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Minimum 2 coats required</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Coverage</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">90-100 square feet / Litre / 2 coats on puttied, primed and well dried surface</td>
                                        </tr>
                                        <tr class="">
                                            <td class=" table_bord pl-1 pl-sm-5"><strong>Dry for Recoating</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3"></td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Thinning</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Mix 250-300 ml of clean potable water with 1 Litre of paint</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Specific Gravity</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3"></td>
                                        </tr>
                                      
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Packaging Size</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">1LTR, 4LTR, 10LTR &#38; 20LTR</td>
                                        </tr>
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Advantages</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3"></td>
                                        </tr>
                                
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                

                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div class="row d-flex p-2 p-md-5 justify-content-center">
                            <div class="col-12 col-md-12 col-lg-11 p-2 p-md-5">
                                <h4 class="about_highlight_max text-left"> Surface Preparation: </h4>
                                <ul class="p-3 ul_list_square">
                                    <li>
                                        <p class="tech_spec pl-2 py-1">Clean the surface thoroughly, sand the surface with Emery Paper 180 rendering it free from previous paint coatings, flaking, loose particles, dust, dirt, oil, grease, grime etc. and wipe it clean.

                                        </p>
                                    </li>
           
                                    
                                    </ul>


                                    <h4 class="about_highlight_max text-left">Application: </h4>
                                    <ul class="p-3 ul_list_square">


                                    <li>
                                        <p class="tech_spec pl-2 py-1">On well dried and cleaned surface, apply a coat of VENCER MASTER STROKE Water Based Acrylic Cement Primer and allow drying for 6-8 hours.
                                        </p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">Rectify the undulations and smoothen the surface by applying thin coats of VENCER Wall DECOR Acrylic Wall Putty allowing it to dry for 6-8 hours.

                                        </p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">Sand the surface with Emery Paper 320 and wipe it clean.
                                        </p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">Do not apply premium emulsion directly over putty as that would lead to patchy appearance.


                                        </p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">
                                            On primed and puttied surface, apply 2 or 3 coats of EZY WASH Premium Emulsion thinned with 450/500ml of clean potable water for 1 litre of paint. Leave a gap of 3-4 hours between coats.
                                            
                                        </p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">To remove dirt, stain, from painted walls wash with water / mild soap solution (avoid detergent), after one month of painting.
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


            <InspireColorPallet />
            <Getintouch />
            <Footer/>

        </div>
    )
}


export default EasyWash


