import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <div>

        <section className="navbar_ven bg_blue_nav">
            <nav className="navbar bg_blue_nav navbar-expand-md navbar-dark bg-light">
             <a className="navbar-brand p-0" href="/">
                        <img className="img-fluid logo_nav" src="./assets/img/vencer_header_vp-merged.png" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars navconstyle"></i></span>
                    </button>
                    <div className="collapse navbar-collapse row" id="navbarNav">
                        <div className="col-12">
                        <ul className="navbar-nav d-flex justify-content-left justify-content-md-center align-items-left align-items-md-center p-0 m-0">
                        <li className="nav-item active">
                                <Link className="nav-link text_uppercase text-white custom_tab text_nav_transf px-lg-3  under_effect zoom" to="/">Home <span className="sr-only">(current)</span></Link>
            
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect  zoom" to='/about'>Company</Link>
            
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link text-white text_uppercase text_nav_transf px-lg-3  zoom dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                                </a>
                                <div className="dropdown-menu mt-3" aria-labelledby="navbarDropdown">

                                    <div className="row">
                                    <div className="col-md-4 d-flex justify-content-center">
                                        <ul className="nav flex-column">
                                            <li className="nav-item mt-2">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf under_effect text-underline px-lg-3" to="#">
                                                INDUSTRIAL
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Venacrylsb2101">VENACRYL - SB2101</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Venacrylsbhg">VENACRYL - SBHG1871</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Pab2404">PAB-2404</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Pabhg410">PAB-HG410</Link>
                                            </li>
                                            {/* <li className="nav-item">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Sbv700">SB-V700</Link>
                                            </li> */}
                                            <li className="nav-item">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Ahtp28">AHT-P28</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Dap28">DA-P28</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-center">
                                        <ul className="nav flex-column">
                                        <li className="nav-item mt-2">
                                                    <Link className="nav-link text-white text_uppercase  text_nav_transf text-underline px-lg-3" to="#">
                                                    ARCHITECURAL COATINGS
                                                    </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/interiorpaints">INTERIOR COATINGS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/exteriorpaints">EXTERIOR COATINGS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/WaterEnamles">WATER ENAMEL - AQUA SHINE</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/primerpaints">PRIMERS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Putty">PUTTY</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/MachineColurant">MACHINE COLOURANTS</Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/UniversalStainers">UNIVERSAL STAINERS</Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/oilbasedpaints">OIL BASED ENAMELS</Link>
                                            </li>
                                            
                                            
                                        </ul>
                                    </div>
                                    
                                    <div className="col-md-4 d-flex justify-content-center">
                                    
                                        <ul className="nav flex-column">
                                            <li className="nav-item mt-2">
                                            <Link className="nav-link text-white text_uppercase  text_nav_transf text-underline px-lg-3" to="#">
                                            ADHESIVE / CON. CHEMICALS
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/StrongHold">STRONG HOLD</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/Vaari">VAARI</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/JumboProof">JUMBO PROOF - 1101</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect" to="/JumboCrete">JUMBO CRETE 3301</Link>
                                            </li>
                                        </ul>
                                    </div>
                                
                                    
                                    </div>
                                </div>
                                


                            </li>


                            {/* <li className="nav-item">
                                <Link className="nav-link text-white text_uppercase  text_nav_transf px-lg-3 under_effect  zoom" to='#'>color tools</Link>
            
                            </li> */}
                            
            
                            <li className="nav-item">
                                <Link className="nav-link text-white text_uppercase text_nav_transf px-lg-3  under_effect zoom" to="/partners">find our partners</Link>
                            </li>
            
            
                            <li className="nav-item ">
                                <Link className="nav-link text-white text_uppercase text_left text_nav_transf px-lg-3  under_effect zoom" to='/blog'>blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text_uppercase text-left text_nav_transf px-lg-3 under_effect zoom" to='/contact'>get in touch</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </section>
        
        </div>
    )
}


export default Navbar