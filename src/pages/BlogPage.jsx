import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function BlogtPage(){
    return(
        <div>
            <Navbar/>
            
            <div class="row  container-fluid  m-0 p-0">
            <img className="img-fluid" src="./assets/img/about_wall.jpeg" alt="Interior Royal Heritage"/>
                <div className="fixbg_about">
                    <div className="row h-100 container-fluid d-flex align-items-center justify-content-center m-0 p-0">
                    <div className="col-12  d-flex align-items-center justify-content-center">
                    <h5 className="heading_blog text-white m-0 text_uppercase def_ani wow animate__animated animate__fadeInDown">
                    Trending Living Room Colour Combinations with Images
                </h5>
                    </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid px-2 px-sm-2 px-md-4 px-lg-5 pb-4">
                <h2 className="text-center p-3">Blogs</h2>
                <div className="row pt-2 d-flex justify-content-center align-items-center mx-0 mx-sm-1 mx-md-2 mx-lg-3">
                    
                    <div className="col-5">
                        <div className="card border-0 card-1">
                        <Link to="/BlogOne" class="deco_none">
                            <img src="./assets/img/blogimg_1.jpg" className="img-fluid w-100 h-100 card-img-top cardtopimg" alt="..."/>
                            <div className="card-body py-5 ">
                                <h5 className="card-text text-center">Orange Colour Combination for Home Interiors</h5>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card border-0 card-1">
                        <Link to="/BlogTwo" class="deco_none">
                            <img src="./assets/img/blogimg_2.jpg" className="img-fluid w-100 h-100 card-img-top cardtopimg" alt="..."/>
                            <div className="card-body py-5 ">
                                <h5 className="card-text text-center">Yellow Colour Combination for Home Interiors </h5>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="col-5 mt-5">
                        <div className="card border-0 card-1">
                        <Link to="/BlogThree" class="deco_none">
                            <img src="./assets/img/blogimg_3.jpg" className="img-fluid w-100 h-100 card-img-top cardtopimg" alt="..."/>
                            <div className="card-body py-5 ">
                                <h5 className="card-text text-center">Blue Colour Combination for Home Interiors</h5>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="col-5 mt-5">
                        <div className="card border-0 card-1">
                        <Link to="/BlogFour" class="deco_none">
                            <img src="./assets/img/blogimg_4.jpg" className="img-fluid w-100 h-100 card-img-top cardtopimg" alt="..."/>
                            <div className="card-body py-5 ">
                                <h5 className="card-text text-center">Green Colour Combination for Home Interiors</h5>
                            </div>
                        </Link>
                        </div>
                    </div>

                    
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default BlogtPage