import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactPage(){
    return(
        <div>
            <Navbar/>

            <div className="container-fluid carousel_image_1 p-0 p-lg-4">
                <div className="container-fluid px-2 px-md-5">
                    <div className="row d-flex justify-content-center">
                
                    <div className="col-10 col-md-12 col-lg-8 px-0  ">
                        <h2 className=" text-center py-3 mb-3 text_uppercase text-white">Get in touch</h2>
                        <form>
                            <div className="row justify-content-center">
                                <div className="col-11 col-md-5  pb-2 form-group">
                                    <label for="user-name"></label>
                                    <input type="text" className="form-control form-control-lg form_cont_user shadow-none bg-light rounded" id="user_name"
                                        aria-describedby="user-name" placeholder="NAME" />
                    
                                </div>
                                <div className="col-11 col-md-5 pb-2 form-group">
                                    <label for="PhoneNumber"> </label>
                                    <input type="number" placeholder="PHONE NUMBER" className="form-control form_cont_user form-control-lg shadow-none bg-light rounded" id="phone_number"/>
                                </div>
                            </div>
                        
                            
                    
                    
                            <div className="row justify-content-center">
                                <div className="col-11 col-md-5 pb-2 form-group">
                                    <label for="company-email"></label>
                                    <input type="email" placeholder="EMAIL" className="form-control form_cont_user form-control-lg shadow-none bg-light rounded" id="email_id"
                                        aria-describedby="company-email"/>
                    
                                </div>
                                <div className="col-11 col-md-5 pb-2 form-group">
                                    <label for="company-name"></label>
                                    <input type="text" placeholder="CITY" className="form-control form_cont_user form-control-lg shadow-none bg-light rounded" id="city"/>
                                </div>
                            </div>
                
                    
                            <div className="row justify-content-center">
                                
                                <div className="col-11 col-md-5 pb-2 form-group">
                                    <label for="company-name"></label>
                                    <input type="text" placeholder="WHAT YOU'RE LOOKING FOR"
                                        className="form-control form_cont_user form-control-lg shadow-none bg-light rounded" id="looking_for"/>
                                </div>
                                <div className="col-11 col-md-5 pb-4">
                                    <label for="exampleFormControlTextarea1"></label>
                                    <textarea className="form-control form-control-lg form_cont_user shadow-none bg-light rounded" id="message" placeholder="MESSAGE" rows="3"></textarea>
                                </div>
                                
                
                
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3 pt-2 pb-4">
                                    <button type="button" className="btn btn_color btn-lg btn-block text-white py-lg-3 text_uppercase baseBlock_small">Submit</button>
                                </div>
                            
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-4 px-0 ">
                        <p><iframe className="iframemap" title="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120762.39086959079!2d72.75572603986059!3d18.93915126364968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swakhande%20stadium!5e0!3m2!1sen!2sin!4v1645983192704!5m2!1sen!2sin" ></iframe></p>
                        
                    </div>
                
                </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default ContactPage