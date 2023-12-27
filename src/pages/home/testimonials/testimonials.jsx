import React from 'react';
import Img from "../../../components/assets/img.png";
// import 'bootstrap/dist/css/bootstrap.css';
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'; 
 
const Testimonials = () => {
  const data = [
    {
      id: 1,
      testimonial: "Merci beaucoup, j'ai bien appris les bases de la programmation grace a vous et je compter approfondire au niveau avancé, jespere pouvoir continuer avec vous",
      avatar: Img,
      name: "Duplex",
    },
    {
      id: 2,
      testimonial: "J'ai beaucoup kiffé les maths cette année, j'ai pu obtenir mon baccalauréat avec mension en mathématiques grace a vous et votre chaine, mille fois merci",
      avatar: Img,
      name: "Laurel",
    },
    {
      id: 3,
      testimonial: "Vos cours de maths sont hyper bien détaillés, je comprends vraiment mieux lorsque je me prépare avec vous",
      avatar: Img,
      name: "Arlette",
    },
    {
      id: 4,
      testimonial: "Vos cours de maths sont hyper bien détaillés, je comprends vraiment mieux lorsque je me prépare avec vous",
      avatar: Img,
      name: "Evariste",
    },
  ];
  
    return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={'auto'}
        slidesPerView={3}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {
        data.map(({id, testimonial, avatar, name}) => {
          return(
          <SwiperSlide key={id} className="testimonial">
            <div className="avatar">
              <img src={avatar} alt='avatar'/>
            </div>
            <h5 className="user_name"> {name} </h5>
            <small className="user_review"> {testimonial} </small>
          </SwiperSlide>
          );})
      }
      </Swiper>
    );
};

export default Testimonials