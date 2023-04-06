import ProductForm from "../../components/productform";
import { getAllProducts, getProduct, recursiveCatalog } from "../../lib/shopify";
import { route } from 'preact-router';
import { useState, useEffect } from "preact/hooks";
import { h, Component } from 'preact';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Endlich() {
  const [product, setProduct] = useState([]);
  const [product_h, setProduct_h] = useState([]);

  function getOrt() {
    const wocation = window.location.pathname;
    const frusa = wocation.split("/", 3);
    const prusa = frusa[2];
    return prusa;
  }

  useEffect(() => {
    getProduct(getOrt()).then((product) => {
        setProduct(product.images.edges);
        setProduct_h(product);
    });
  }, []);

  const images = product.map((image, i) => (
    <SwiperSlide key={`slide-${i}`}>
      <img src={image.node.url} alt={image.node.altText} />
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={1} navigation>
        {images}
      </Swiper>
      <div>
        {product_h && <ProductForm product={product_h} />}
      </div>
    </div>
  );
}

export default function ProductPage() {
  return <Endlich />;
}
 
