import React from 'react';
import './login.css';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import {Link} from 'react-router-dom';
// import wall from '../css/new/Events-bro (5).png';
import { Navigation } from "swiper";
const login=()=> {
  return (
    
      <section className='home'>
       
                    

          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            
          <SwiperSlide>
                <div className="box1">
                  <div className="content"> 
                    <span>CREATE EVENTS LIKE</span>
                    <h3>WEDDINGS</h3>
                    <p>“Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry.”</p>
                    <a href='#even' className='btn'>GET STARTED</a>
                  </div>

                </div>
          </SwiperSlide>

          <SwiperSlide>
                <div className="box2">
                  <div className="content"> 
                    <span>CREATE EVENTS LIKE</span>
                    <h3>BIRTHDAYS</h3>
                    <p>A year older and wiser, HAPPY BIRTHDAY!</p>
                    <a href='#even' className='btn'>GET STARTED</a>
                  </div>

                </div>
                </SwiperSlide>

              <SwiperSlide>
                <div className="box3">
                  <div className="content"> 
                    <span>CREATE EVENTS LIKE</span>
                    <h3>MUSIC FESTIVALS</h3>
                    <p>IN THE WORLD OF MUSIC</p>
                    <a href='#even' className='btn'>GET STARTED</a>
                  </div>

                </div>
                </SwiperSlide>

              <SwiperSlide>
                <div className="box4">
                  <div className="content"> 
                    <span>CREATE EVENTS LIKE</span>
                    <h3>COLLEGE EVENTS</h3>
                    <p>College day, Annual meet, Technical Events, Hackathons,Arts and Literary Events</p>
                    <a href='#even' className='btn'>GET STARTED</a>
                  </div>

                </div>
                </SwiperSlide>



           
        </Swiper>
        

      </section>
      
      
  );
}

export default login;