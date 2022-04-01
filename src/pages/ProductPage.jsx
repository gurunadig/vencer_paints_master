import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductPage(){
    return(
        <div>
            <Navbar/>

            <div class="">
                <div class="row  container-fluid  img_background_2 m-0 p-0">
                    <div class="col-3 d-flex align-items-center  justify-content-center">
                        </div>

                        <div class="col-6 d-flex align-items-top  justify-content-center">
                            <div class="curved_interior def_ani wow animate__animated animate__fadeIn ">
                            <h4 class="heading_interior text-black text_uppercase text-white mt-sm-5 ">Our Exterior Products</h4>
                        </div>

                        <div class="col-3 d-flex align-items-center  justify-content-center">
                        </div>
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
                                    <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out" src="./assets/img/product_supershield_cropped.png" alt="..."/>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="card-body bg_contact_band d-flex flex-column justify-content-center align-items-center">
                                        <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Super Shield</h5>
                                        <p class="card-text text-white py-2 text-center"> WEATHER GUARD <br/> LATEX <br/> ACRYLIC <br/> EMULSION</p>

                                        <a href="./product_inner.html" class="btn btn-primary btn_white bord_green text_grey text_uppercase mx-auto baseBlock">read
                                            more</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>


                    <div class="col-lg-5 d-flex justify-content-center align-items-center flex-wrap row-eq-height">
                    
                        <div class="card border-0 py-2 def_ani wow animate__animated animate__fadeInUp prodgridsize" >
                            <div class="row no-gutters py-2">
                                <div class="col-md-5 pt-5  pb-2 d-flex justify-content-center align-items-end  bg_grey prodgridsize" >
                                    <img class="product_img my-md-0 my-3 def_ani wow animate__animated animate__zoomIn zoom_out" src="./assets/img/armour_exterior.png" alt="..."/>
                                </div>
                                <div class="col-md-7 bg_blue prodgridsize" >
                                    <div class="card-body bg_blue d-flex flex-column justify-content-center align-items-center ">
                                        <h5 class="card-title text_uppercase text-white text-center py-1">Vencer Paints Armour</h5>
                                        <p class="card-text text-white py-2 text-center">Is high durability exterior paint to withstand conditions like heavy rainfall, extreme heat and high humidity.</p>
                                        <a href="./product_armour.html" class="btn btn-primary btn_white bord_green text_grey text_uppercase baseBlock">read
                                            more</a>
                    
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

export default ProductPage