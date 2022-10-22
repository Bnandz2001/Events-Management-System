import React from 'react';
import pict from './images/about.jpg'
import './about.css'
const About=()=> {
    return (
      
        <section className='about' id='about'>
         <h1 className="heading">ABOUT <span>US </span></h1>
         <div className="row">
            <div className="image9">
                <img src={pict}></img>
            </div>
            <div className="content5">
                <h3>An Event shouldn't be just an Experiential <span>thing, it should be an Emotional thing.</span></h3>
                <p>Events Create Opportunities For People To Connect With An Area, Spend Time Together, Celebrate And Experience The Diversity events Create A Sense Of Fun And Vibrancy, Resulting In A Strong Sense Of Community Connectivity, Pride And A Sense Of Place Of Cultures And Foster Creativity And Innovation.</p>
                {/* <p>Lorem ipsum dolor provident voluptas? Quo sit officiis ab illo praesentium adipisci, eum, magni delectus ex sed, quam laborum nesciunt!</p> */}
                <a href='#contact' class='btn btn-primary'>Contact Us</a>
            </div>
         </div>
          
  
        </section>
        
        
    );
  }
  
  export default About;