import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import videos from "../../assets/AE Digital - Agência de Marketing Digital.mp4";
import facebok from "../../assets/Business-Facebook-Cover-13.png";
import cursos from "../../assets/cursos.png";
import inovacao from "../../assets/inovacao.png";
import "./style.scss";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = ({}, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 6000)}s`;
    }
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
        grabCursor={true}
      >
        <SwiperSlide >
<div className="Groud">
          <video autoPlay loop muted>
            <source src={videos} type="video/mp4" />
          </video>
         
          <div className="slide-text">{/* Add your content here */}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={facebok} alt="" className="imagemCarrosel2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cursos} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={inovacao} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </>
  );
};

export default App;
