import {Link} from 'react-router-dom' 

function Carousel(){
    return(
        <div>
        <div className="row carouselbgblue">
            <div className="col-12">
            <p className="easy-head def_ani wow animate__animated animate__fadeInRight mt-4">
                           OUR PRODUCTS
                        </p>
            </div>
            <div className="col-12">
                    <div class="row  p-4">
                        <div class="col-6 col-md-3 col-lg-3 mt-2 mb-4 d-flex justify-content-md-center justify-content-lg-center">
                            <Link to="/armour">
                                <img src="./assets/img/armour_exterior.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                  
                        <div class="col-6 col-md-3 col-lg-3 mt-2 mb-4 d-flex justify-content-md-center justify-content-lg-center">
                            <Link to="/armour">
                                <img src="./assets/img/allround.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div class="col-6 col-md-3 col-lg-3 mt-2 mb-4 d-flex justify-content-md-center justify-content-lg-center">
                            <Link to="/weatherguard">
                                <img src="./assets/img/weather_guard.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div class="col-6 col-md-3 col-lg-3 mt-2 mb-4 d-flex justify-content-md-center justify-contentmd-lg-center">
                            <Link to="/royalheritage">
                                <img src="./assets/img/royal_heritage.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Carousel