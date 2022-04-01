import {Link} from 'react-router-dom';

function HomeCarousel(){
    return(
        <div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="img-fluid" src="./assets/img/carousel_1.jpg" alt="First slide"/>
                    <div className="fixbgl">
                        <div className="row h-100 d-flex justify-content-start align-items-center">

                            <div className="col-7 col-sm-4 iden offset-1">
                                {/* <h1 className="text-white text-center banner-head text_uppercase def_ani wow animate__animated animate__fadeInDown"> Get Inspired </h1> */}
                                <br />
                                <h2 className="text-white text-center banner-head text_uppercase">ULTRA SHEEN PAINT THAT STEALS YOUR SPOTLIGHT ROYAL HERITAGE</h2>
                                <div className="row">
                                <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                                    
                                <Link className="mt-1 mt-md-5 btn btn-lg btn-magenta baseBlock font_10" to='/contact'>Get In Touch</Link>


                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="carousel-item">
                    <img className="img-fluid" src="./assets/img/carousel_2.jpg" alt="Second slide"/>
                    <div className="fixbgr">
                        <div className="row h-100 d-flex justify-content-end align-items-center">

                            <div className="col-7 col-sm-4 iden">
                            <h1 className="text-white banner-head text_uppercase mx-5 text-center wow animate__animated animate__fadeInDown"> Get Inspired </h1>
                    <br />
                            <h2 className="text-white text-center banner-head text_uppercase">
                            EXPLORE OUR CELEBRATION INSPIRATIONS DESIGNES
                            </h2>

                                <div className="col-12 d-flex justify-content-center">
                                <Link className="mt-1 mt-md-5 btn btn-lg btn-magenta baseBlock font_10" to='/supershield'>Read More</Link>
                                    

                                </div>
                            
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>    
                <div className="carousel-item">
                    <img className="img-fluid" src="./assets/img/carousel_3.jpg" alt="Third slide"/>
                    <div className="fixbgl">
                        <div className="row h-100 d-flex justify-content-start align-items-center">

                            <div className="col-4 col-sm-4 iden offset-1">
                            {/* <h1 className="text-center banner-head text_uppercase def_ani wow animate__animated animate__fadeInDown text_black"> Get Inspired </h1> */}
                            <br />
                            <h2 className="text-center text-white banner-head text_uppercase text_black">Give your home a new twist</h2>

                            <div className="col-12 d-flex justify-content-center">
                                <Link className="mt-1 mt-md-5 btn btn-lg btn-magenta baseBlock font_10" to='/contact'>Get In Touch</Link>
                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    </div>
    )
}


export default HomeCarousel