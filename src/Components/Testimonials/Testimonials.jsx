import React from 'react'
import './Testimonials.css';
import {Swiper, SwiperSlide } from 'swiper/react';
import  profilePicel1 from "../../img/profile1.jpg";
import profilePicel2 from '../../img/profile2.jpg';
import profilePicel3 from '../../img/profile3.jpg';
import profilePicel4 from '../../img/profile4.jpg';
import profilePicel5 from '../../img/profile5.jpg';
import profilePicel6 from '../../img/profile6.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';


const Testimonials = () => {
   const clients =[{
        img: profilePicel1,
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        img: profilePicel2,
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: profilePicel3,
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: profilePicel4,
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: profilePicel5,
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        img: profilePicel6,
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }];
  return (
      <div className="t-wrapper" id='Testimonials'>
          <div className="t-heading">
              <span>Client always get</span>
              <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1"  style={{ background:"var(--purple)" }}></div>
                <div className="blur t-blur1"  style={{ background:"skyblue" }}></div>
          </div>
          {/* // slider */} 
          <Swiper
          
          modules={[Pagination]}
          slidesPerView = {1}
          pagination = {{ clickable: true }}
          
          >
                {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>

                        </div>
                    </SwiperSlide>
                );

                })}
          </Swiper>
      </div>


  )
}

export default Testimonials
