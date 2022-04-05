import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Getintouch from '../components/Getintouch';
import HomeCarousel from '../components/HomeCarousel';

function HomePage(){
    return(
        <div>
            <Navbar/>
            <HomeCarousel />
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-6">
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 introbg def_ani wow animate__animated animate__fadeIn">
                                <img src="./assets/img/introsec.jpg" alt="" className="img-fluid intro-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                        <p className="intro-text def_ani wow animate__animated animate__fadeIn">
                            <p className="card-text about_content text-justify "><span className="about_highlight_max"> Vencer Paints </span> 
                            is a Mumbai based paint manufacturer. We manufacture and markets wide range products for exterior and interior painting requirements. Our product portfolio include items like Paint, Distemper, primer, Emulsion, putty etc.
                            </p>

                            <p className="card-text about_content text-justify">We foresee to become one of the leaders in paint industry by offering a quality product at affordable prices.
                        </p>
                        <p className="card-text about_content text-justify">
                        Established in 2021, Vencer paints is a backward integration  effort by Top level Leaders Ramaprasad Rao, Muralidhar Pyati, Mruthyunjaya K Konanur, A S Narayana Sharma, Shivanandam. Our production team is manned by experienced, qualified chemists and engineers. Our Emphasis is on consistent good quality. We pay the highest regard to the health and safety of those using our products and the environment in which they live and work. We assure you with our Quality with most competitive rates.
                               </p>
                        </p>
                        
                       
                       <Link className="btn btn-lg btn-magenta mt-4 def_ani wow animate__animated animate__fadeInUp baseBlock" to="/About"> Read More</Link>

                    </div>
                </div>
            </div>

            <div className="easy-sect mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4">
                            <p className="easy-head def_ani wow animate__animated animate__fadeInRight">
                                3 EASY STEP TO MAKE YOUR HOME  STYLISH 
                            </p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12 col-md-4">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <p className="the-count def_ani wow animate__animated animate__fadeInUp ">
                                        1
                                    </p>
                                </div>
                                <div className="col-9">
                                    <p className="the-subhead def_ani wow animate__animated animate__fadeInDown">
                                        CHOOSE FROM COLOUR PALLATE
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <p className="the-count def_ani wow animate__animated animate__fadeInDown ">
                                        2
                                    </p>
                                </div>
                                <div className="col-9">
                                    <p className="the-subhead def_ani wow animate__animated animate__fadeInUp ">
                                        CHOOSE OUR PRODUCTS
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <p className="the-count def_ani wow animate__animated animate__fadeInUp ">
                                        3
                                    </p>
                                </div>
                                <div className="col-9">
                                    <p className="the-subhead def_ani wow animate__animated animate__fadeInDown">
                                        GET FREE <br/> QUOTE
                                    </p>
                                </div>
                            </div>
                        </div>

                    
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p className="home-color-grid text-center def_ani wow animate__animated animate__fadeInLeft mb-5">
                        LET’S MAKE YOUR HOME COLOUR FULL
                    </p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-6 col-md-3 inspi-grid-img1 p-0 ">

                </div>

                <div className="col-6 col-md-3 inspi-grid grid-green d-flex align-items-center def_ani wow animate__animated animate__fadeInLeft baseBlock_reg">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p className="grid-text">THE <br/> INSPIRATOR</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <Link className="btn btn-lg btn-homecol green" to="/Inspirator">Read More</Link>
                        </div>
                    </div>
                </div>
   
                <div className="col-6 col-md-3 inspi-grid-img2 p-0">

                </div>

                <div className="col-6 col-md-3 inspi-grid grid-magenta d-flex align-items-center def_ani wow animate__animated animate__fadeInLeft baseBlock">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p className="grid-text">COLOUR <br/>
                                PALETTES</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button className="btn btn-lg btn-homecol green">Read More</button>
                        </div>
                    </div>
                </div>
   
                <div className="col-6 col-md-3 inspi-grid grid-lowred d-flex align-items-center def_ani wow animate__animated animate__fadeInRight baseBlock">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p className="grid-text">
                                FIND <br/>PARTNERS
                            </p>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                        <Link className="btn btn-lg btn-homecol green" to="/partners">
                            Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 inspi-grid-img3 p-0 ">

                </div>
   
   
                <div className="col-6 col-md-3 inspi-grid grid-yellow d-flex align-items-center def_ani wow animate__animated animate__fadeInRight baseBlock">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p className="grid-text">HAND <br/>
                                PICKED BY <br/>
                                THE EXPERTS</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button className="btn btn-lg btn-homecol green">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 inspi-grid-img4 p-0 ">

                </div>
            </div>

            <Carousel />
            
            <Getintouch />
            
            <Footer/>
        </div>
    )
}


export default HomePage