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

                    <Link className="deco_none  col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center py-3"
                    to="/blog_details">
                    <div className="card border-0 card-1">
                        <img src="./assets/img/blog1.jpg" className="card-img-top cardtopimg" alt="..."/>
                        <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                            <h5 className="card-text text-center">Pink two colour combination for bedroom walls</h5>
                        </div>
                        </div>
                    </Link>

                    <a className=" deco_none col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  d-flex justify-content-center align-items-center py-3" href="./inner_blog.html">
                        <div className="card border-0 card-1" >
                        <img src="./assets/img/blog2.jpg" className="card-img-top cardtopimg" alt="..."/>
                        <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                            <h5 className="card-text text-center">Blue two colour combination for bedroom walls</h5>
                        </div>
                        </div>
                        </a>

                        <a className="deco_none col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  d-flex justify-content-center align-items-center py-3" href="./inner_blog.html">
                            <div className="card border-0 card-1">
                            <img src="../assets/img/blog3.jpg" className="card-img-top cardtopimg" alt="..."/>
                            <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                                <h5 className="card-text text-center">Purple two colour combination for bedroom walls</h5>
                            </div>
                            </div>
                            </a>

                        <a className="deco_none col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  d-flex justify-content-center align-items-center py-3" href="./inner_blog.html">
                                <div className="card border-0 card-1" >
                                <img src="./assets/img/blog4.jpg" className="card-img-top cardtopimg" alt="..."/>
                                <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                                    <h5 className="card-text text-center">Red two colour combination for bedroom walls</h5>
                                </div>
                                </div>
                        </a>
                    <a className="deco_none  col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center py-3"
                    href="./inner_blog.html">
                    <div className="card border-0 card-1">
                        <img src="./assets/img/blog4.jpg" className="card-img-top cardtopimg" alt="..."/>
                        <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                            <h5 className="card-text text-center">Pink two colour combination for bedroom walls</h5>
                        </div>
                        </div>
                    </a>

                    <a className=" deco_none col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  d-flex justify-content-center align-items-center py-3" href="./inner_blog.html">
                        <div className="card border-0 card-1" >
                        <img src="./assets/img/blog3.jpg" className="card-img-top cardtopimg" alt="..."/>
                        <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                            <h5 className="card-text text-center">Blue two colour combination for bedroom walls</h5>
                        </div>
                        </div>
                        </a>

                        <a className="deco_none col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  d-flex justify-content-center align-items-center py-3" href="./inner_blog.html">
                            <div className="card border-0 card-1">
                            <img src="../assets/img/blog2.jpg" className="card-img-top cardtopimg" alt="..."/>
                            <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                                <h5 className="card-text text-center">Purple two colour combination for bedroom walls</h5>
                            </div>
                            </div>
                            </a>

                        <a className="deco_none col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  d-flex justify-content-center align-items-center py-3" href="./inner_blog.html">
                                <div className="card border-0 card-1" >
                                <img src="./assets/img/blog1.jpg" className="card-img-top cardtopimg" alt="..."/>
                                <div className="card-body py-5 d-flex align-items-center justify-content-center cardtopbody">
                                    <h5 className="card-text text-center">Red two colour combination for bedroom walls</h5>
                                </div>
                                </div>
                        </a>

                    
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default BlogtPage