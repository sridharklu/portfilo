import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide } from 'swiper/react';
import sidebar from "../../img/sidebar.png";
import Ecommere from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from"../../img/musicapp.png";
import 'swiper/css';


const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>

        {/* heading */}
        <span>Recent Project</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper 
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        
        >
            <SwiperSlide>
                <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommere} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio
