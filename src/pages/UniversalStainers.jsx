import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'

function UniversalStainers(){
    return(

        <div>
            <Navbar/>

            <div class="row  container-fluid  m-0 p-0">
                <img className="img-fluid" src="./assets/img/Exterior_Banner_2.jpg" alt="Universal Stainers"/>
                    <div className="fixbg_new">
                        <div className="row h-100 d-flex  align-items-start">
                            <div className="col-4"></div>
                            <div className="col-4 curved_interior"> 
                                <div className=" def_ani wow animate__animated animate__fadeIn ">
                                <h4 className="heading_interior text-black text_uppercase text-white mt-sm-5 ">MASTER TINT – UNIVERSAL STAINERS</h4>
                                </div>
                            </div>
                            <div className="col-4"></div>     
                        </div>
                    </div>
               </div>

   
    <section class="container-fluid bg_blue">
        <div class="container-lg">
           
            <div class="row">
                <div class="col-xs-4 col-md-4 mb-1 mb-md-4 mt-5 d-flex justify-content-center">
                    <img class="product_inner_img def_ani wow animate__animated animate__slideInLeft zoom_out"src="./assets/img/universal_stainers.png" alt="supershield"/>

                </div>
                <div class="col-xs-12 col-md-8 py-5 d-flex flex-column justify-content-center">
                    <h3 class="text-white text_uppercase text-center super_shield_h3 px-5 def_ani wow animate__animated animate__fadeInDown">
                    MASTER TINT – UNIVERSAL STAINERS
                    </h3>
                   
                    <p class="text-white pt-2 py-md-5 pl-0 pl-md-3  text-center super_shield_p def_ani wow animate__animated animate__fadeIn">
 
                    MASTER TINT universal stainers are high strength, concentrated stainers, which can be used to create a wide range of shades. The product has an established market for the last several years. These are used for Tinting Water and Enamel based paint.
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
                        <a class="nav-link active text_uppercase text-center  custom_bg d-flex align-items-center justify-content-center baseBlock_noHover def_ani wow animate__animated animate__fadeInDown"id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                            aria-controls="pills-home" aria-selected="true">Benefits</a>
                    </li>
                    <li class=" col-md-3 nav-item" role="presentation">
                        <a class="nav-link text_uppercase text-center  custom_bg d-flex align-items-center justify-content-center baseBlock_noHover def_ani wow animate__animated animate__fadeInUp" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                            aria-controls="pills-profile" aria-selected="false">Technical Data</a>
                    </li>
                    <li class=" col-md-3 nav-item" role="presentation">
                        <a class="nav-link text_uppercase text-center  custom_bg d-flex align-items-center justify-content-center baseBlock_noHover def_ani wow animate__animated animate__fadeInDown"id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
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

                            
                            <div class="col-12 col-md-12 col-lg-11 p-3 pt-4 card baseBlock_noHover">
                        <h4 class="about_highlight_max d-flex justify-content-start align-items-start text-left ">Physical Properties: </h4>

                                    
                                <table class="card-body table table-bordered" >
                                    
                                    <tbody class="">
                                        <tr class="">
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Brand</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">VENCER MASTER TINT MACHINE COLOURANT </td>
                                        </tr>
                                        <tr>
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Usage/Application</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Stainer</td>
                                        </tr>
                                        <tr>
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Packaging Size</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">50ml,100ml &#38; 200ml</td>
                                        </tr>
                                        <tr>
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Physical State</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Liquid</td>
                                        </tr>

                                        <tr>
                                            <td class="table_bord pl-1 pl-sm-5"><strong>Packaging Type</strong></td>
                                            <td class="table_bord pl-1 pl-sm-3">Bottle </td>
                                        </tr>
                                    </tbody>
                                </table>
               
                            
                            </div>

                
                        </div>
                    </div>






              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div class="row d-flex p-1 p-md-5 justify-content-center">
                    <div class="col-12 col-md-12 col-lg-11 p-2 p-md-5">
                        <h4 class="about_highlight_max text-left">Features:</h4>
                        <ul class="p-3 ul_list_square">
                            <li>
                                <p class="tech_spec pl-2 py-1">
                                MASTER TINT universal stainers are high strength, concentrated stainers, which can be used to create a wide range of shades. The product has an established market for the last several years. These are used for Tinting Water and Enamel based paint.
                                </p>
                            </li>
                            <li>
                                <p class="tech_spec pl-2 py-1">
                                The stainers are packed in  50ml, 100ml	&#38; 200ml bottles	&#38; are ideally suited for onsite tinting of paints. This is a common practice adopted by painters where shade matching is done on-site. The stainers are also suited for tinter dispensing and Red Devil tint shaker machines to give corresponding shades.
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


export default UniversalStainers