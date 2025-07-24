import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import api from "../../api/data.json";
import ProductCart from '../shop/product-cart';
import type { FC } from 'react';

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number | string;
  delPrice?: number | string;
  proImg: string;
  Tag?: string;
  [key: string]: any;
}

const RecentlyViewed: FC = () => {
  const settings = {
    speed: 1200,
  };

  return (
    <div className="space-extra-top mb-30">
      <div className="row">
        <div className="title-area mb-25 text-center">
          <span className="sub-title">Similar Products</span>
          <h2 className="sec-title">Recently Viewed Items</h2>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }}
        loop={false}
        speed={settings.speed ?? 1000}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="has-shadow"
      >
        {api.map((product:Product, index) => (
          <SwiperSlide className="style2" key={product.id || index}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-block d-md-none mt-40 text-center">
        <div className="icon-box">
          <button className="slider-arrow default prev-btn">
            <i className="far fa-arrow-left"></i>
          </button>
          <button className="slider-arrow default next-btn">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
