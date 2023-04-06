import { h, Component, render } from 'preact';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


 export function SwiperImg() {
  
  return (

    <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
  >
    <SwiperSlide>
    <div>
     <img class="mx-auto" style="max-width: 150px; margin-left: auto; margin-right: auto; display: block;" src="../../assets/herz.png"/>
     <p  class="pt-5" style="text-align: center;"><strong>LIEBESGLÜCK</strong></p>
     <p style="text-align: center;">Weniger Stress, mehr Raum für romantische Gefühle und Spaß im Bett.</p>
   </div>
    </SwiperSlide>
    <SwiperSlide>
    <div>
      <img  class="mx-auto" style="max-width: 150px; margin-left: auto; margin-right: auto; display: block;" src="../../assets/hormon.png"/>
     <p class="pt-5" style="text-align: center;"><strong>HORMONBALANCE</strong></p>
     <p style="text-align: center;">Der Hormon- und Testosteronhaushalt wird natürlich ausbalanciert.</p>
    </div> 
    </SwiperSlide>
    <SwiperSlide>
    <div>
     <img  class="mx-auto" style="max-width: 150px; margin-left: auto; margin-right: auto; display: block;" src="../../assets/blatt.png"/>
     <p class="pt-5" style="text-align: center;"><strong>PFLANZENBASIS</strong></p>
     <p style="text-align: center;">Pflanzliche Extrakte aus Rosenwurz, Bockshornklee und Chilischote.</p>
   </div>
    </SwiperSlide>
  </Swiper>
  );
  }