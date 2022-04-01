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
                <div class="wrapper">
                    <div class="center-slider">
                        <div>
                            <Link to="/armour">
                                <img src="./assets/img/armour_exterior.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                  
                        <div>
                            <Link to="/armour">
                                <img src="./assets/img/allround.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/weatherguard">
                                <img src="./assets/img/weather_guard.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/ezy_wash.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/weatherguard">
                                <img src="./assets/img/weather_guard_advanced.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/master_stroke.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/royal_heritage.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/primex.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/product_supershield_cropped.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/walldecor.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/wonder.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/aqua_shine.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                        <div>
                            <Link to="/royalheritage">
                                <img src="./assets/img/solofresh.png" alt="" className="img-fluid" /> 
                            </Link>
                        </div>
                       
                  
                    
                    </div>
                </div>
            </div>
        </div>
          
    </div>
    )
}


export default Carousel