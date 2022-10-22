import React from 'react';
import pict from './images/contact1.jpg'
import './contactus.css'
const Contactus=()=> {
    return (
      
        <section className='contact' id='contact'>
         <h1 className="heading">CONTACT <span>US </span></h1>
         <div className="container6">
            <div className="cont1">
                <img src={pict}></img>
  
            </div>
            <div className="cont2">
                {/* <h3>An Event shouldn't be just an Experiential <span>thing, it should be an Emotional thing.</span></h3> */}
                <form>
                            <div className="mb-4">
                            
                                <input type="text" className="form-control"  placeholder="Your name.." ></input>
                            </div>
                            <div className="mb-4">
                                
                                <input type="text"className="form-control" placeholder='Location'></input>
                            </div>
                            <div className="mb-4">
                                

                                <input type="email" className="form-control"  placeholder="Email id" ></input>
                            </div>
                            <div className="mb-4">
                                
                                <textarea type="text" className="form-control"  placeholder="Your message" ></textarea>
                            </div>
                         
                        </form>
                {/* <p>Events Create Opportunities For People To Connect With An Area, Spend Time Together, Celebrate And Experience The Diversity events Create A Sense Of Fun And Vibrancy, Resulting In A Strong Sense Of Community Connectivity, Pride And A Sense Of Place Of Cultures And Foster Creativity And Innovation.</p> */}
                {/* <p>Lorem ipsum dolor provident voluptas? Quo sit officiis ab illo praesentium adipisci, eum, magni delectus ex sed, quam laborum nesciunt!</p> */}
                <a href='#' class='btn btn-primary'>Send Message</a>
            </div>
         </div>
          
  
        </section>
        
        
    );
  }
  
  export default Contactus;