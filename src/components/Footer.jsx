import {Link} from 'react-router-dom';


function Footer(){
    return(
        <div>

        <div className="container-md-fluid bg_contact_band">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4  d-flex py-2 flex-column align-items-center">
                    <a href="mailto:vencer@vencerpaints.com"> <i className="fa-solid fa-envelope fa-2x py-2 icon_color  def_ani wow animate__animated animate__slideInLeft"></i></a>
                        <a className="py-2 contact_band_atag def_ani wow animate__animated animate__slideInLeft under_effect" href="mailto:vencer@vencerpaints.com">vencer@vencerpaints.com</a>
                        
                    </div>
                        <div className="col-xs-12 col-md-4 py-2 d-flex  flex-column align-items-center">
                            <a href="tel:+91-8296942539"><i className="fa-solid fa-phone fa-2x py-2 icon_color  def_ani wow animate__animated animate__slideInDown"></i></a>
                            
                            <a className="py-2 contact_band_atag under_effect def_ani wow animate__animated animate__slideInUp" href="tel:+91-8296942539">tel: +91-82969-42539</a>
                        
                        </div>
                    
                        <div className="col-xs-12 col-md-4 py-2 d-flex flex-column align-items-center">
                            <a href="./assets/svg/vencer_catalog.pdf"><i className="fa-solid fa-file fa-2x py-2 icon_color  def_ani wow animate__animated animate__slideInRight"></i></a>
                            <a className="py-2 contact_band_atag def_ani wow animate__animated animate__slideInRight under_effect" href="./assets/svg/Vencer_catalog.pdf">DOWNLOAD CATALOG</a>
                        
                        </div>
                </div>
            </div>
        </div>


        <div className="container-fluid bg_blue pt-3 m-0">
            <div className="container">
                <div className="row p-0 m-0">

                    <div className="col-sm-12 col-md-6 col-lg-3 my-2 d-flex align-items-start justify-content-center">

                    <img className="def_ani wow animate__animated animate__fadeIn" src="./assets/img/vencer_footer_white_red.png" alt=""/>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex  my-3  flex-column text-center text-md-left">
                        <h6 className="py-2  text_18 text_uppercase text-white">site link</h6>
                        <a className="py-2 text_uppercase text_14_footer underline_foot" href="/product">site map</a>
                        <a className="py-2 text_uppercase text_14_footer underline_foot" href="/product">faq</a>
                        <a className="py-2 text_uppercase text_14_footer underline_foot" href="/product">authorised dealer</a>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex my-3  flex-column text-center text-lg-left ">
                        <h6 className="py-2 text_18 text_uppercase text-white">products</h6>
                        <Link className="py-2 text_uppercase text_14_footer underline_foot" to="/interiorpage">interior wall paints</Link>
                        <Link className="py-2 text_uppercase text_14_footer underline_foot" to="/ExteriorPage">exterior wall paints</Link>
                        <Link className="py-2 text_uppercase text_14_footer underline_foot" to="/interiorpage">adhesive products</Link>
                        <Link className="py-2 text_uppercase text_14_footer underline_foot" to="/interiorpage">water proofing products</Link>
                        <Link className="py-2 text_uppercase text_14_footer underline_foot" to="/interiorpage">wood/metal paints</Link>
                        

                    </div>

                    <div className="col-sm-12  col-md-6  col-lg-3 d-flex my-3  flex-column text-center text-md-left">
                        <h6 className="py-2 text_18 text_uppercase text-white">connect with us</h6>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center justify-content-md-start">
                                <a href="/product"><i className="fa-brands  fa-linkedin  fa-2x icon_color_footer pr-3"></i></a>
                                <a href="/product"><i className="fa-brands fa-facebook-square fa-2x icon_color_footer px-3"></i></a>
                                <a href="/product"><i className="fa-brands fa-instagram fa-2x icon_color_footer px-3"></i></a>
                            </div>
                            <div className="col-12  d-flex justify-content-around">
                                <p className="text-white py-3">TIMES SQUARE 7TH &#38; 8TH FLR, CTS 349 &#38; 349-1 W.E HIGHWAY, NR SAI SERVICE, MUMBAI MH 400069 IN</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 pt-5 m-0 ">
                        <p className="text-white p-0 m-0 copy_foot text-center">&copy; 2022 &nbsp; Vencer Paints. &nbsp; All Rights Reserved.</p>
                    </div>
                    <div className="col-sm-12 pb-4 m-0">
                        <p className="p-0 m-0 text-white copy_foot text-center">powered by <a className="text-white" href="http://www.themushroomdigital.in/" target="_blank">themushroomdigital.in</a></p>
                    </div>


                </div>

            </div>

        </div>

        </div>
    )
}


export default Footer