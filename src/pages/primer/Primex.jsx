import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';                      
import Getintouch from '../../components/Getintouch';
import InspireColorPallet from '../../components/InspireColorPallet';


function Primex(){
    return(

        <div>
            <Navbar/>



            <div class="row  container-fluid  m-0 p-0">
                   

                   <img className="img-fluid" src="./assets/img/banner_2.jpg" alt="Primex Primer"/>
                       <div className="fixbg_new">
                           <div className="row h-100 d-flex  align-items-start">
                             <div className="col-4"></div>
                             <div className="col-4 curved_interior"> 
                                  <div className=" def_ani wow animate__animated animate__fadeIn ">
                                    <h4 className="heading_interior text-black text_uppercase text-white mt-sm-5 ">VENCER PAINTS PRIMEX</h4>
                                  </div>
                              </div>
                             <div className="col-4"></div>
                               
                           </div>
                       </div>

                   
               </div>









               <section class="container-fluid bg_blue">
        <div class="container-lg">

            <div class="row">
                <div class="col-xs-4 col-md-4 mb-1 mb-md-4  mt-5 pt-4 d-flex justify-content-center">
                    <img class="product_inner_img def_ani wow animate__animated animate__slideInLeft zoom_out p-1 " src="./assets/img/allround.png" alt="" />

                </div>
                <div class="col-xs-12 col-md-8 py-2 py-md-5 d-flex flex-column justify-content-center">
                    <h3 class="text-white text_uppercase text-center super_shield_h3 px-5 pt-5 def_ani wow animate__animated animate__fadeInDown">
                        vencer paints All Round
                    </h3>
                    <p class="text-white pt-2 py-md-5 pl-0 pl-md-3 text-center super_shield_p def_ani wow animate__animated animate__fadeIn">
                        It is a Cement based Primer for both Interior and Exterior surfaces. It is a versatile product that is based on acrylic co-polymer emulsion and formulated to provide good opacity, hiding, coverage and good alkali resistance.

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
                        <a class="nav-link active text_uppercase text-center custom_bg d-flex align-items-center justify-content-center  baseBlock_noHover def_ani wow animate__animated animate__fadeInDown"
                             id="pills-home-tab" data-toggle="pill"
                            href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Benefits</a>
                    </li>
                    <li class=" col-md-3 nav-item" role="presentation">
                        <a class="nav-link text_uppercase text-center custom_bg d-flex align-items-center justify-content-center baseBlock_noHover def_ani wow animate__animated animate__fadeInDown"
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
                                    <img class=""src="" alt=""/>
                                    <p class="super_shield_p p-2">Superior Whiteness</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_soft_sheen d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="" src=""  alt=""/>
                                    <p class="super_shield_p p-2">Good Hiding</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="" src=""  alt=""/>
                                    <p class="super_shield_p p-2">Unique  formulation</p>
                                </div>
                            </div>
                        </div>




                        <div class="row d-flex justify-content-md-center justify-content-center">

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5 d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_soft_sheen d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="svg_inner_img" src="./assets/svg/Paint_and_Primer.svg"  alt=""/>
                                    <p class="super_shield_p p-2">Excellent Coverage</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-8 col-md-4 mt-5  mb-5  d-flex justify-content-center">
                                <div
                                class="custom_img_box  bg_exc_work d-flex flex-column align-items-center justify-content-center card-2">
                                    <img class="" src=""  alt=""/>
                                    <p class="super_shield_p p-2">Shell Life 12 Months</p>
                                </div>
                            </div>

                        </div>


                    </div>



                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                    <div class="row d-flex p-0 p-md-5 my-3 justify-content-center align-items-center">
                        
                        <div class="col-12 col-md-12 col-lg-11 card p-3 pt-4 baseBlock_noHover">
                            

                            <table class="card-body table table-bordered">
                            
                                <tbody>
                                    <tr class="">
                                        <td class=" table_bord  pl-1 pl-sm-5"><strong>Shell Life</strong></td>
                                        <td class=" table_bord pl-1 pl-sm-3">12 Months</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Color</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">White</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Specific Gravity</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">1.4 +- 0.2 g/cm3</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Application</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">By Brush or Roller</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Thinning</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">Add 400ml of clean water to 1 Litre of Inex Primer</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Coverage</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">50 square feet / Litre depending on surface condition and porosity</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Surface Drying Time</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">30-45 minutes</td>
                                    </tr>
                                    <tr class="">
                                        <td class=" table_bord pl-1 pl-sm-5"><strong>Dry for Recoating</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">6 hours</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Packaging Size</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">1LTR, 4LTR, 10LTR &#38; 20LTR</td>
                                    </tr>
                                    <tr class="">
                                        <td class="table_bord pl-1 pl-sm-5"><strong>Advantages</strong></td>
                                        <td class="table_bord pl-1 pl-sm-3">
                                            <ul>
                                                <li>Superior Whiteness

                                                </li>
                                                <li>Good Hiding

                                                </li>
                                                <li>
                                                    Excellent Coverage
                                                </li>
                                            </ul>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>





                    


                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div class="row d-flex p-1 p-md-5 justify-content-center">
                            <div class="col-12 col-md-12 col-lg-11 p-2 p-md-5">
                                <h4 class="about_highlight_max text-left">Directions For Use </h4>
                                <ul class="p-3 ul_list_square">
                                    <li>
                                        <p class="tech_spec pl-2 py-1">Prepare wall surface by scraping off flaked
                                            coatings and ensure removal of fungus and algae growth with suitable biocide
                                            treatment.</p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">The surface must be free from loose particles,
                                            dirt, dust, grease and moisture.</p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">Take maximum precautions where the water tends to
                                            accumulate, i.e., places like parapet, sunshade, etc.</p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">The exterior surface should be free from seepage
                                            and constant dampness. During the rainy reason allow 2-3 days of
                                            sunshine for surface to dry before starting painting.</p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">Newly plastered walls must be allowed to cure for
                                            6 months before painting.</p>
                                    </li>
                                    <li>
                                        <p class="tech_spec pl-2 py-1">To 1 litre of <strong>PRIMEX</strong> add 400 ml of clean
                                            potable water.Between coats, allow
                                            minimum of 6 hours gap. On sensitive areas like parapets and awnings, an
                                            extra coat is recommended.</p>
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


export default Primex


