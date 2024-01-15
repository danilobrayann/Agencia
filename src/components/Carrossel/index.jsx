import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import videos from '../../assets/AE Digital - Agência de Marketing Digital.mp4'
import facebok from '../../assets/Business-Facebook-Cover-13.png'
import cursos from '../../assets/cursos.png'
export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 6000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 85000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        grabCursor= 'true'
      >
        <SwiperSlide>
        <video autoPlay loop muted>
              <source src={videos} type='video/mp4' />
            </video>
            <div className="slide-text">
             
            
            </div>


        </SwiperSlide>
        <SwiperSlide><img src={facebok} alt="" className='imagemCarrosel2' /></SwiperSlide>
        <SwiperSlide><img src={cursos} alt="" /></SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
