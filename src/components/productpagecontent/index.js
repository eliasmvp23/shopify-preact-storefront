import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ProductForm from '../productform';

const ProductPageContent = ({ product }) => {

    const images = [];
  
    product.images.edges.map((image, i) => {
      images.push(
        <SwiperSlide key={`slide-${i}`}>
          <img src={image.node.url} alt={image.node.altText}  />
        </SwiperSlide>
      )
    })
  
    return (
      <div>
        <div>
          <div>
            <div>
              <Swiper
                style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
  modules={[Navigation]}
	    navigation
                pagination={{ clickable: true }}
                className="h-96 rounded-2xl"
                loop="true"
              >
                {images}
              </Swiper>
            </div>
          </div>
          <ProductForm product={product} />
        </div>
      </div>
    )
  }
export default ProductPageContent
