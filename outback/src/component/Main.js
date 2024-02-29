import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "./Main.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Main = ({keyid, swiperea, swiperview}) => {
  // swiperview.length > 1 ? swiperview : 
  return (
    <main className='container px-0' id={keyid}>
      

      <Swiper
      spaceBetween={0}
      slidesPerView={swiperview[0]}



      breakpoints={{
       
        768: {
          slidesPerView: swiperview.length > 1 ?  swiperview[1] : swiperview[0],
          
        },
        1024: {
          slidesPerView: swiperview.length > 1 ?  swiperview[2] : swiperview[0],
         
        },
      }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination ]}

    >
      { swiperea.map((e, i)=>{
        return <SwiperSlide style={{backgroundImage : `url(/img/${e})`}}></SwiperSlide>
      })}
      
      
    </Swiper>
    </main>
  );
};

export default Main;



