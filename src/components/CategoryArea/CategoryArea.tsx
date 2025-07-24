import { useEffect, useRef, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryData from '../../api/category';
import categorybg from '../../img/bg/category_bg_1.webp';

interface CategoryAreaProps {
  className?: string;
  sliderOptions?: Partial<{
    slidesPerView: number;
    spaceBetween: number;
    loop: boolean;
    speed: number;
    autoplay: {
      delay: number;
      disableOnInteraction: boolean;
    };
    paginationType: 'bullets' | 'progressbar' | 'fraction';
  }>;
}

const defaultOptions = {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  paginationType: 'bullets' as const,
};

const CategoryArea: FC<CategoryAreaProps> = ({
  className = '',
  sliderOptions = {},
}) => {
  const mergedOptions = { ...defaultOptions, ...sliderOptions };
  const [, setSwiperInstance] = useState<any>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const multiplier = {
      translate: 0.1,
      rotate: 0.008,
    };

    const calculateWheel = () => {
      const slides = wrapperRef.current?.querySelectorAll<HTMLElement>('.single');
      if (!slides) return;

      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;
        ty = Math.max(0, ty);
        const transformOrigin = r < 0 ? 'left top' : 'right top';

        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      calculateWheel();
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className={className} style={{ backgroundImage: `url(${categorybg})` }}>
      <div className="container th-container">
        <div className="title-area mb-60 text-center">
          <span className="sub-title text-anime-style-2">Our Features</span>
          <h2 className="sec-title text-anime-style-3">Reliable IT for Unstoppable Growth</h2>
        </div>
        <div className="swiper th-slider categorySlider" id="categorySlider1" ref={wrapperRef}>
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={setSwiperInstance}
            spaceBetween={mergedOptions.spaceBetween}
            loop={mergedOptions.loop}
            speed={mergedOptions.speed}
            autoplay={mergedOptions.autoplay}
            slidesPerView={mergedOptions.slidesPerView}
            pagination={{
              el: paginationRef.current as unknown as string | HTMLElement,
              type: mergedOptions.paginationType,
              clickable: true,
              renderBullet: (index, className) => {
                const number = index + 1;
                const formatted = number < 10 ? `0${number}` : number;
                return `<span class="${className}">${formatted}</span>`;
              },
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 5, spaceBetween: 45 },
            }}
          >
            {CategoryData.map((cat, idx) => (
              <SwiperSlide key={idx}>
                <div className="category-card single">
                  <div className="box-img global-img">
                    <img src={cat.img} alt={cat.title} />
                  </div>
                  <h3 className="box-title">
                    <Link onClick={ClickHandler} to="/service">
                      {cat.title}
                    </Link>
                  </h3>
                  <p className="sec-text">{cat.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={paginationRef} className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
};

export default CategoryArea;
