import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage(){
    return(
        <div>
            <Navbar/>

            <div class="row  container-fluid  m-0 p-0">
                   <img className="img-fluid" src="./assets/img/ourstory.jpg" alt="Our story"/>
                       <div className="fixbg_about">
                         <div className="row h-100 container-fluid d-flex align-items-center justify-content-center m-0 p-0">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                               <h1 className="heading_about text-white text_uppercase def_ani wow animate__animated animate__fadeInDown">Our Story</h1>
                            </div>
                         </div>
                            
                      
                       </div>
               </div>



            <div className="container-fluid desktop_about_show_hide bg_pills">
               <div className="row">
                    <div className="col-3 bg_about">
                         <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                              <a
                                   className="nav-link active pills_color d-flex align-items-center justify-content-between pl-5 text_uppercase pr-4 baseBlock_about def_ani wow animate__animated animate__fadeIn"
                                   id="v-pills-home-tab"
                                   data-toggle="pill"
                                   href="#v-pills-about_us"
                                   role="tab"
                                   aria-controls="v-pills-about_us "
                                   aria-selected="true"
                              >
                                   About Us <i className="fa-solid fa-angle-right"></i>
                              </a>

                              <a
                                   className="nav-link pills_color d-flex align-items-center justify-content-between pl-5 text_uppercase pr-4 baseBlock_about def_ani wow animate__animated animate__fadeIn"
                                   id="v-pills-profile-tab"
                                   data-toggle="pill"
                                   href="#v-pills-people"
                                   role="tab"
                                   aria-controls="v-pills-profile"
                                   aria-selected="false"
                              >
                                   Our People <i className="fa-solid fa-angle-right"></i>
                              </a>

                              <a
                                   className="nav-link pills_color d-flex align-items-center justify-content-between text_uppercase pl-5 pr-4 baseBlock_about def_ani wow animate__animated animate__fadeIn"
                                   id="v-pills-settings-tab"
                                   data-toggle="pill"
                                   href="#v-pills-vision"
                                   role="tab"
                                   aria-controls="v-pills-settings"
                                   aria-selected="false"
                              >
                                   Vision <i className="fa-solid fa-angle-right"></i>
                              </a>

                              <a
                                   className="nav-link pills_color d-flex align-items-center justify-content-between pl-5 text_uppercase pr-4 baseBlock_about def_ani wow animate__animated animate__fadeIn"
                                   id="v-pills-messages-tab"
                                   data-toggle="pill"
                                   href="#v-pills-mission"
                                   role="tab"
                                   aria-controls="v-pills-messages"
                                   aria-selected="false"
                              >
                                   Mission <i className="fa-solid fa-angle-right"></i>
                              </a>

                              {/* <a
                                   className="nav-link pills_color d-flex align-items-center justify-content-between pl-5 text_uppercase pr-4 baseBlock_about def_ani wow animate__animated animate__fadeIn"
                                   id="v-pills-settings-tab"
                                   data-toggle="pill"
                                   href="#v-pills-journey"
                                   role="tab"
                                   aria-controls="v-pills-settings"
                                   aria-selected="false"
                              >
                                   Our Journey <i className="fa-solid fa-angle-right"></i>
                              </a> */}

                              <a
                                   className="nav-link pills_color d-flex align-items-center justify-content-between pl-5 text_uppercase pr-4 baseBlock_about def_ani wow animate__animated animate__fadeIn"
                                   id="v-pills-settings-tab"
                                   data-toggle="pill"
                                   href="#v-pills-catalog"
                                   role="tab"
                                   aria-controls="v-pills-settings"
                                   aria-selected="false"
                              >
                                   Download Catalog <i className="fa-solid fa-angle-right"></i>
                              </a>
                              <a
                                   className="nav-link pills_color d-flex align-items-center justify-content-between pl-5 text_uppercase pr-4 baseBlock_about def_ani wow animate__animated animate__fadeIn"
                                   id="v-pills-settings-tab"
                                   data-toggle="pill"
                                   href="#v-pills-awards"
                                   role="tab"
                                   aria-controls="v-pills-settings"
                                   aria-selected="false"
                              >
                                   Awards and recognitions <i className="fa-solid fa-angle-right"></i>
                              </a>
                         </div>
                    </div>
                    <div className="col-9 d-flex justify-content-center">
                         <div className="tab-content" id="v-pills-tabContent">
                              <div className="tab-pane fade show active" id="v-pills-about_us" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                   <div className="row p-3">
                                        <div className="col-12 d-flex align-items-center justify-content-center">
                                             <h2 className="text_uppercase py-2 def_ani wow animate__animated animate__fadeInRight">About Us</h2>
                                        </div>
                                   </div>

                                   <div className="row pill_row_height">
                                        <div className="col-md-12 d-flex py-2 pl-4 flex-column align-items-center justify-content-center">
                                             <div className="row d-flex justify-content-around mb-2 mx-2">
                                                  <div className="col-12">
                                                       <div className="card min_height_about">
                                                            <div className="card-body baseBlock_noHover">
                                                                 <div className="pills_wall_about float-right baseBlock_noHover">
                                                                      
                                                                 </div>

                                                                 <p className="card-text about_content px-3">
                                                                      <span className="about_highlight_max"> Vencer Paints and Adhesives </span> is a MUMBAI based private limited company lead by woman entrepreneur where majority of the stakes
                                                                      (i.e.:&nbsp;63%) are held by women.
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      It is one among the top paints and adhesives manufacturer in India. It manufactures high-quality paints, adhesives &#38; water proofing solutions for all types of
                                                                      buildings and sectors.
                                                                 </p>

                                                                 <p className="card-text about_content px-3">
                                                                      Since the beginning, <span className="about_highlight"> Vencer Paints and Adhesives </span>is evolving every day by staying up to date with the technology to provide high
                                                                      quality non-compromised products, which are not only eco-friendly but are also highly economical.
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      <span className="about_highlight"> Vencer Paints and Adhesives </span>is contributing in a small way to the aspiration of the Indian Government to become
                                                                      <span className="about_highlight_max"> ‘ATHMA NIRBAR BHARAT’.</span>
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="tab-pane fade" id="v-pills-people" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                   <div className="row p-3">
                                        <div className="col-12 d-flex align-items-center justify-content-center">
                                             <h2 className="text_uppercase py-2">Our People</h2>
                                        </div>
                                   </div>

                                   <div className="row d-flex justify-content-center align-items-cente">
                                        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                                             <div className="row d-flex justify-content-around mx-3 mb-3">
                                                  <div className="col-md-6 col-lg-6 col-xl-4 py-2 my-2">
                                                       <div className="card card-2 px-3 height_people">
                                                            <div className="card-body">
                                                                 <h5 className="card-title py-2">MRUTHYUNJAYA K KONANUR:</h5>
                                                                 <p className="card-text about_content">
                                                                      Mr Mruthyunjaya is the <span className="about_highlight"> Managing Director </span>of the company, who is having more than 15 Years of experience in manufacturing of water
                                                                      based emulsion, adhesives &#38; other allied products of paint industry.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-md-6 col-lg-6 col-xl-4 py-2 my-2">
                                                       <div className="card card-2 px-3">
                                                            <div className="card-body height_people">
                                                                 <h5 className="card-title py-2">RAMAPRASAD S RAO:</h5>
                                                                 <p className="card-text about_content">
                                                                      Mr Ramaprasad is the <span className="about_highlight"> C.E.O </span>of the Company. He holds a degree in Electrical Engineering &#38; has persuaded MBA. He has more than 30
                                                                      Years of experience including 15 Years of experience in international business.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-md-6 col-lg-6 col-xl-4 py-2 my-2">
                                                       <div className="card card-2 px-3 height_people">
                                                            <div className="card-body">
                                                                 <h5 className="card-title py-2">MURALIDHAR PYATI:</h5>

                                                                 <p className="card-text about_content">
                                                                      Mr Muralidhar is the<span className="about_highlight"> Director of R&#38;D/ Quality Control </span>of the company. He is a well-known chemist in Emulsion Industry who has
                                                                      more than 35 years of experience. He has developed many products through thorough Research &#38; Development (R&#38;D).
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-md-6 col-lg-6 col-xl-4 py-4 my-2">
                                                       <div className="card card-2 px-3 height_people">
                                                            <div className="card-body">
                                                                 <h5 className="card-title py-2">A S NARAYANA SHARMA:</h5>

                                                                 <p className="card-text about_content">
                                                                      Mr A S Narayana Sharma is the <span className="about_highlight"> Director of Marketing </span>of the company. He has more than 30 years of marketing experience in the paint
                                                                      industry and has previously worked for major paint manufacturing industries.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div className="col-md-6 col-lg-6 col-xl-4 py-4 my-2">
                                                       <div className="card card-2 px-3 height_people">
                                                            <div className="card-body">
                                                                 <h5 className="card-title py-2">SHIVANANDAM:</h5>

                                                                 <p className="card-text about_content">
                                                                      Mr Shivanandam is the<span className="about_highlight"> General Manager of Marketing. </span>He has more than 30 years of marketing experience in the paint industry and has
                                                                      worked in major paint companies like NEROLAC, AGSAR etc.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div className="col-md-6 col-lg-6 col-xl-4 py-4 my-2">
                                                       <div className="card card-2 px-3 height_people">
                                                            <div className="card-body">
                                                                 <h5 className="card-title py-2">SREEHARSHA A.V:</h5>

                                                                 <p className="card-text about_content">
                                                                      Mr Sreeharsha  is the<span className="about_highlight"> DGM of Marketing. </span>He has more than 20 years of marketing experience and has
                                                                      worked for major paint companies like RAJDOOTH PAINTS and BRITISH PAINTS.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="tab-pane fade" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                   <div className="row p-3">
                                        <div className="col-12 d-flex justify-content-center align-items-center">
                                             <h2 className="text_uppercase">Mission</h2>
                                        </div>
                                   </div>

                                   <div className="row pill_row_height">
                                        <div className="col-12 d-flex py-3 pl-4 align-items-center justify-content-center">
                                             <div className="row d-flex justify-content-around mx-2">
                                                  <div className="col-12">
                                                       <div className="card baseBlock_noHover">
                                                            <div className="card-body">
                                                                 <div className="pills_wall_mission float-right baseBlock_noHover"></div>

                                                                 <p className="card-text about_content p-3 text-justify">
                                                                      To continuously increase the value of all the stakeholders by manufacturing and supplying products that are best in the industry and also achieve a growth rate better
                                                                      than the PEERS year after year.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="tab-pane fade" id="v-pills-vision" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                   <div className="row p-3">
                                        <div className="col-12 d-flex justify-content-center align-items-center">
                                             <h2 className="text_uppercase py-1">Our Vision</h2>
                                        </div>
                                   </div>

                                   <div className="row pill_row_height d-flex align-items-center justify-content-center py-3">
                                        <div className="col-12 d-flex align-items-center justify-content-center">
                                             <div className="row d-flex justify-content-around mx-3">
                                                  <div className="col-12">
                                                       <div className="card baseBlock_noHover">
                                                            <div className="card-body">
                                                                 <div className="pills_wall_vision float-right baseBlock_noHover"></div>

                                                                 <p className="card-text about_content p-3 text-justify">
                                                                      We want to be one of the pioneers of Environmental friendly paints / Construction chemical manufacturers by adopting latest innovative technologies, thereby safeguarding
                                                                      the Environment &#38; also help farmers by making them our stakeholders in our sustainable growth.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* <div className="tab-pane fade" id="v-pills-journey" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                   <div className="row p-3">
                                        <div className="col-12 d-flex justify-content-center align-items-center">
                                             <h2 className="text_uppercase">Our Journey</h2>
                                        </div>
                                   </div>

                                   <div className="row py-2 pill_row_height d-flex align-items-center justify-content-center mx-3 mb-4">
                                        <div className="col-md-12 d-flex py-2 flex-column align-items-center justify-content-center">
                                             <div className="row d-flex justify-content-center">
                                                  <div className="col-12">
                                                       <div className="card baseBlock_noHover py-3">
                                                            <div className="card-body">
                                                                 <div className="pills_wall_journey float-right baseBlock_noHover"></div>
                                                                 <p className="card-text about_content px-3">
                                                                      The journey started in 2010 as a manufacturer of <span className="about_highlight"> Polishes &#38; Wood Primers </span>in the name of
                                                                      <span className="about_highlight">‘SRI SAI PAINTS &#38; VARNISHES’</span>
                                                                      . The products got a great response in the market. Thus, we decided to add few more new ranges of commodity to our bucket such as oil-based enamels, floor coats. Latter
                                                                      got a majestic response too and were a hit.
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      Since all of the manufactured products were a hit in the marketplace, there was in demand for the paint products. Thus, we started the production of water-based emulsions
                                                                      under a new company – ‘SRI SAI PAINT INDUSTRY’ in the year 2012.
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      To market the manufactured products for a larger section of dealers and painters, we needed a brand. Thus, the company – ‘V.C PAINTS’ came into existence in the year 2021
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      We also started to manufacture a very major raw material for emulsions, which is STYRENE/ ACRYLIC BINDERS under a new company – ‘SRI SAI ADHESIVES’. As a by-product, we
                                                                      also manufactured wood adhesives in the name of
                                                                      <span className="about_highlight">‘PLYCOL’</span>
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      Later we decided to diversify our product range as the amount of demand rose day by day. We were welcoming few chemists and experts to work along with us to bring their
                                                                      incredibly innovative ideas &#38; insights in manufacturing the best products in every matter. Instead of them working with us as an employee, we made them our partners.
                                                                      This decision was not only to motivated them to play their roles but also made them to bare some responsibilities and work together as a team to make the company as a
                                                                      MONOPOLY.
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      Thus, a new firm – <span className="about_highlight">‘Vencer Paints and Adhesives Private Limited’</span>
                                                                      came into existence in the year 2021.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
                                                                 </p>
                                                                 <p className="card-text about_content px-3">
                                                                      Now, ‘Vencer Paints and Adhesives Private Limited’ aka ‘Vencer Paints’ has three vertical products (namely – Water based emulsion paints, Adhesives/ Binders for paints,
                                                                      Water proofing chemicals) presently. And is planning to launch some more products in the near future.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div> */}

                              <div className="tab-pane fade" id="v-pills-catalog" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                   <div className="row p-3">
                                        <div className="col-12 d-flex justify-content-center align-items-center">
                                             <h2 className="text_uppercase py-1">Download Catalog</h2>
                                        </div>
                                   </div>
                                   <div className="row pill_row_height">
                                        <div className="col-md-12 d-flex py-2 pl-2  flex-column align-items-center justify-content-center">

                                        <h5 class="text-center "> Click To View Or Download Catalog</h5>


                                        <div className="col-12 col-md-12 pt-2 pb-4 d-flex align-items-center justify-content-center">
                                
                                <a className="py-2 text-center  alink_nostyle text-white" href="./assets/svg/Vencer_catalog.pdf">
                                <button type="button " className="   btn btn_color btn-lg btn-block text-white py-2 text_uppercase baseBlock_small under_effect">
                                     click  </button></a>
                               
                            </div>
                                        
                                        </div>
                                   </div>
                              </div>

                              <div className="tab-pane fade" id="v-pills-awards" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                   <div className="row p-3">
                                        <div className="col-12 d-flex justify-content-center align-items-center">
                                             <h2 className="text_uppercase">Awards And Recognitions</h2>
                                        </div>
                                   </div>

                                   <div className="row pill_row_height">
                                        <div className="col-12 d-flex py-3 pl-4 align-items-center justify-content-center">
                                             <div className="row d-flex justify-content-around mx-2">
                                                  <div className="col-12">
                                                       <div className="card baseBlock_noHover">
                                                            <div className="card-body">
                                                                 <div className="d-flex justify-content-around align-items-center">
                                                                      <img className="certificate_desk baseBlock_noHover" src="./assets/img/certificate_vencer.jpeg" alt="" />

                                                                      <p className="card-text about_content p-3">
                                                                           #startupindia<br />
                                                                           Date Issue : 25-06-2021 <br />
                                                                           Valid Upto : 12-03-2031 <br />
                                                                           Certificate Number : DIPP82122.
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-12 py-3">
                                                       <div className="card baseBlock_noHover">
                                                            <div className="card-body">
                                                                 <div className="d-flex justify-content-around align-items-center">
                                                                      <img className="certificate_desk baseBlock_noHover" src="./assets/img/trademark.jpg" alt="" />

                                                                      <p className="card-text about_content p-3">
                                                                           #governmentofIndia<br />
                                                                          Intellectual property<br />
                                                                           Date Issue : 14-12-2020 <br />
                                                                           TradeMark Number : 4779995.
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
            </div>

            <section className="container-md tab_about_show_hide">
               <div className="row d-flex justify-content-center">
                    <div className="col-12 pills_wall_about_mob my-3 d-flex justify-content-center align-items-center">
                         <h1 className="text_pills_h1 text_uppercase">About Us</h1>
                    </div>
                    <div className="col-11 py-3">

                         <div className="row d-flex justify-content-center align-items-center">
                              <div className="col-12">
                                   <div className="card py-2 height_mobile_about">
                                        <div className="card-body">
                                             <p className="card-text about_content_mobile px-3">
                                                  <span className="about_highlight_max_mobile"> Vencer Paints and Adhesives </span> is a MUMBAI based private limited company lead by woman entrepreneur where majority of the stakes
                                                  (i.e.:&nbsp;63%) are held by women.
                                             </p>
                                             <p className="card-text about_content_mobile px-3">
                                                  It is one among the top paints and adhesives manufacturer in India. It manufactures high-quality paints, adhesives &#38; water proofing solutions for all types of buildings and sectors.
                                             </p>
                                             <p className="card-text about_content_mobile px-3">
                                                  Since the beginning, <span className="about_highlight_max_mobile"> Vencer Paints and Adhesives </span>is evolving every day by staying up to date with the technology to provide high quality
                                                  non-compromised products, which are not only eco-friendly but are also highly economical.
                                             </p>
                                             <p className="card-text about_content px-3">
                                                  <span className="about_highlight_max_mobile">Vencer Paints and Adhesives </span>is contributing in a small way to the aspiration of the Indian Government to become
                                                  <span className="about_highlight_max"> ‘ATHMA NIRBAR BHARAT’.</span>
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>

                 
                    <div className="col-12 pills_wall_people_mob d-flex align-items-center justify-content-center">
                         <h1 className="text_pills_h1 text_uppercase">Our People</h1>
                    </div>
                    <div className="col-11 py-3">
                         <div className="row d-flex justify-content-center align-items-center">
                              <div className="col-12 pb-2">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title py-2">MRUTHYUNJAYA K KONANUR:</h5>
                                             <p className="card-text about_content_mobile">
                                                  Mr Mruthyunjaya is the <span className="about_highlight_max_mobile"> Managing Director </span>of the company, who is having more than 15 Years of experience in manufacturing of water based
                                                  emulsion, adhesives &#38; other allied products of paint industry.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-12 my-2">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title py-2">RAMAPRASAD S RAO:</h5>
                                             <p className="card-text about_content_mobile">
                                                  Mr Ramaprasad is the <span className="about_highlight_max_mobile"> C.E.O </span>of the Company. He holds a degree in Electrical Engineering &#38; has persuaded MBA. He has more than 30 Years of
                                                  experience including 15 Years of experience in international business.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="row d-flex justify-content-around">
                              <div className="col-12 my-2">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title py-2">MURALIDHAR PYATI:</h5>

                                             <p className="card-text about_content_mobile">
                                                  Mr Muralidhar is the<span className="about_highlight_max_mobile"> Director of R&#38;D/ Quality Control </span>of the company. He is a well-known chemist in Emulsion Industry who has more than 35
                                                  years of experience. He has developed many products through thorough Research &#38; Development (R&#38;D).
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-12 my-2">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title py-2">A S NARAYANA SHARMA:</h5>

                                             <p className="card-text about_content_mobile">
                                                  Mr A S Narayana Sharma is the <span className="about_highlight_max_mobile"> Director of Marketing </span>of the company. He has more than 30 years of marketing experience in the paint industry
                                                  and has previously worked for major paint manufacturing industries.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="row d-flex justify-content-start">
                              <div className="col-12 mt-2">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title py-2">SHIVANANDAM:</h5>

                                             <p className="card-text about_content_mobile">
                                                  Mr Shivanandam is the<span className="about_highlight_max_mobile"> General Manager of Marketing. </span>He has more than 30 years of marketing experience in the paint industry and has worked in
                                                  major paint companies like NEROLAC, AGSAR etc.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-12 mt-2">
                                   <div className="card">
                                        <div className="card-body">
                                             <h5 className="card-title py-2">SREEHARSHA A.V :</h5>

                                             <p className="card-text about_content_mobile">
                                             Mr Sreeharsha  is the<span className="about_highlight_max_mobile"> DGM of Marketing. </span>He has more than 20 years of marketing experience and has
                                            worked for major paint companies like RAJDOOTH PAINTS and BRITISH PAINTS.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


               <div className="row d-flex justify-content-center">
                    <div className="col-12 pills_wall_vision_mob d-flex justify-content-center align-items-center">
                         <h1 className="text_uppercase text_pills_h1">Our Vision</h1>
                    </div>
                    <div className="col-11">
                         <div className="row d-flex justify-content-start my-2">
                              <div className="col-12">
                                   <div className="card">
                                        <div className="card-body">
                                             <p className="card-text about_content_mobile">
                                                  We want to be one of the pioneers of Environmental friendly paints / Construction chemical manufacturers by adopting latest innovative technologies, thereby safeguarding the Environment
                                                  &#38; also help farmers by making them our stakeholders in our sustainable growth.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="row d-flex justify-content-center mt-2">
                    <div className="col-12 pills_wall_mission_mob d-flex justify-content-center align-items-center">
                         <h1 className="text_uppercase text_pills_h1">Mission</h1>
                    </div>

                    <div className="col-11">
                         <div className="row d-flex justify-content-start my-3">
                              <div className="col-12">
                                   <div className="card">
                                        <div className="card-body">
                                             <p className="card-text about_content_mobile">
                                                  To continuously increase the value of all the stakeholders by manufacturing and supplying products that are best in the industry and also achieve a growth rate better than the PEERS year
                                                  after year.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* <div className="row d-flex justify-content-center">
                    <div className="col-12 pills_wall_journey_mob d-flex justify-content-center align-items-center">
                         <h1 className="text_color_grey text_pills_h1 text_uppercase">Our Journey</h1>
                    </div>

                    <div className="col-11 mt-3">
                         <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                              <div className="row d-flex justify-content-center">
                                   <div className="col-12 my-2">
                                        <div className="card">
                                             <div className="card-body">
                                                  <p className="card-text about_content_mobile">
                                                       The journey started in 2010 as a manufacturer of <span className="about_highlight_max_mobile"> Polishes &#38; Wood Primers </span>in the name of
                                                       <span className="about_highlight_max_mobile">‘SRI SAI PAINTS &#38; VARNISHES’</span>
                                                       . The products got a great response in the market. Thus, we decided to add few more new ranges of commodity to our bucket such as oil-based enamels, floor coats. Latter got a majestic
                                                       response too and were a hit.
                                                  </p>
                                                  <p className="card-text about_content_mobile">
                                                       Since all of the manufactured products were a hit in the marketplace, there was in demand for the paint products. Thus, we started the production of water-based emulsions under a new
                                                       company – ‘SRI SAI PAINT INDUSTRY’ in the year 2012.
                                                  </p>
                                                  <p className="card-text about_content_mobile">
                                                       To market the manufactured products for a larger section of dealers and painters, we needed a brand. Thus, the company – ‘V.C PAINTS’ came into existence in the year 2012
                                                  </p>
                                                  <p className="card-text about_content_mobile">
                                                       We also started to manufacture a very major raw material for emulsions, which is STYRENE/ ACRYLIC BINDERS under a new company – ‘SRI SAI ADHESIVES’. As a by-product, we also
                                                       manufactured wood adhesives in the name of
                                                       <span className="about_highlight">‘PLYCOL’</span>
                                                  </p>
                                                  <p className="card-text about_content_mobile">
                                                       Later we decided to diversify our product range as the amount of demand rose day by day. We were welcoming few chemists and experts to work along with us to bring their incredibly
                                                       innovative ideas &#38; insights in manufacturing the best products in every matter. Instead of them working with us as an employee, we made them our partners. This decision was not only
                                                       to motivated them to play their roles but also made them to bare some responsibilities and work together as a team to make the company as a MONOPOLY.
                                                  </p>
                                                  <p className="card-text about_content_mobile">
                                                       Thus, a new firm – <span className="about_highlight_max_mobile">‘Vencer Paints and Adhesives Private Limited’</span>
                                                       came into existence in the year 2012.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
                                                  </p>
                                                  <p className="card-text about_content">
                                                       Now, <span className="about_highlight_max_mobile">‘Vencer Paints and Adhesives Private Limited’</span> aka <span className="about_highlight_max_mobile">‘Vencer Paints’</span> has three vertical
                                                       products (namely – Water based emulsion paints, Adhesives/ Binders for paints, Water proofing chemicals) presently. And is planning to launch some more products in the near future.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div> */}
               <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 py-2 m-0">
                         <h3 className="d-flex justify-content-center py-3 text_color_grey pl-5 pt-4 mobile_about text_uppercase">
                              download catalog
                         </h3>
                    </div>
                    <h5 class="text-center "> Click To View Or Download Catalog</h5>


<div className="col-12 col-md-12 pt-2 pb-4 d-flex align-items-center justify-content-center">

<a className="py-2 text-center  alink_nostyle text-white" href="./assets/svg/Vencer_catalog.pdf">
<button type="button " className="   btn btn_color btn-lg btn-block text-white py-2 text_uppercase baseBlock_small under_effect">
click  </button></a>

</div>


                    <div className="col-12 py-2 m-0">
                         <h3 className="d-flex justify-content-center py-3 text_color_grey pl-5 pt-4 mobile_about text_uppercase">
                              AWARDS AND RECOGNITIONS
                         </h3>
                    </div>

                    <div className="row pill_row_height">
                         <div className="col-12 d-flex py-3 align-items-center justify-content-center">
                              <div className="row d-flex justify-content-around mx-0 mx-md-2">
                                   <div className="col-12 col-md-11">
                                        <div className="card">
                                             <div className="card-body">
                                                  <div className="">
                                                       <img className="certificate_mobile" src="../assets/img/certificate_vencer.jpeg" alt="" />

                                                       <p className="card-text about_content p-3">
                                                            #startUpIndia <br />
                                                            Date Issue : 25-06-2021 <br />
                                                            Valid Upto : 12-03-2031 <br />
                                                            Certificate Number : DIPP82122.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-12 col-md-11">
                                        <div className="card">
                                             <div className="card-body">
                                                  <div className="">
                                                       <img className="certificate_mobile" src="../assets/img/trademark.jpg" alt="" />

                                                       <p className="card-text about_content p-3">
                                                       #governmentofIndia<br />
                                                                          Intellectual property<br />
                                                                           Date Issue : 14-12-2020 <br />
                                                                           TradeMark Number : 4779995.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
            </section>

            <Footer/>
        </div>
    )
}


export default AboutPage