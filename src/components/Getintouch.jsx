function Getintouch(){
    return(
        <div>
            
        <div className="container-fluid bg_getintouch p-4">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 px-0 ">
                    <h2 className=" text-center py-3 mb-3 text_uppercase text_grey">Get in touch</h2>
                    <form>
                        <div className="row justify-content-center">
                            <div className="col-11 col-md-5  pb-2 form-group">
                                <label for="user-name"></label>
                                <input type="text" className="form-control form-control-lg form_cont_user shadow-none bg-light rounded" id="user_name"
                                    aria-describedby="user-name" placeholder="NAME"/>
                
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
                                <button type="button" className="btn btn_color btn-lg btn-block text-white py-3 text_uppercase baseBlock_small">Submit</button>
                            </div>
                        
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>

        </div>
    )
}


export default Getintouch