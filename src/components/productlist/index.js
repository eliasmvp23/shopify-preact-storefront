import ProductCard from "../productcard";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function ProductList({ products }) {

  const prdct = [];
  
products.map((product, i) => {
  prdct.push(
    <SwiperSlide key={`slide-${i}`}>
       <ProductCard key={product.node.id} product={product} />
    </SwiperSlide>
  )
})

return (
 
          <Swiper
            style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
            pagination={{ clickable: true }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
          >
            {prdct}
          </Swiper>
)
}

