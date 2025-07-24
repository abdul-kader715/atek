import { useEffect, useRef, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import teamData from '../../api/team';
import teamBg from '../../img/bg/team_bg_4.webp';
import leftArrow from '../../img/icon/service-left.svg';
import rightArrow from '../../img/icon/service-right.svg';



interface SliderOptions {
  loop?: boolean;
  speed?: number;
  autoplay?: {
    delay?: number;
    disableOnInteraction?: boolean;
    pauseOnMouseEnter?: boolean;
  };
  slidesPerView?: number;
  spaceBetween?: number;
}

interface TeamAreaS7Props {
  sliderOptions?: SliderOptions;
}

const defaultOptions: SliderOptions = {
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 3,
  spaceBetween: 120,
};

const TeamAreaS7: FC<TeamAreaS7Props> = ({ sliderOptions = {} }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [, setSwiperInstance] = useState<any>(null); // can be typed more precisely if needed

  const mergedOptions = { ...defaultOptions, ...sliderOptions };

  useEffect(() => {
    const multiplier = {
      translate: 0.1,
      rotate: 0.008,
    };

    const calculateWheel = () => {
      if (!wrapperRef.current) return;
      const slides = wrapperRef.current.querySelectorAll<HTMLElement>('.single');
      if (!slides.length) return;

      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const offset = centerX - (rect.left + rect.width / 2);
        let translateY = Math.abs(offset) * multiplier.translate - rect.width * multiplier.translate;
        translateY = Math.max(0, translateY);
        const origin = offset < 0 ? 'left top' : 'right top';

        slide.style.transform = `translateY(${translateY}px) rotate(${-offset * multiplier.rotate}deg)`;
        slide.style.transformOrigin = origin;
      });
    };

    const animate = () => {
      calculateWheel();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const ClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="team-area7 bg-bottom-center position-relative space-bottom overflow-hidden background-image"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      <div className="container th-container2">
        <div className="title-area text-center">
          <span className="sub-title text-anime-style-2">Our Team Members</span>
          <h2 className="sec-title text-white text-anime-style-3">Meet Our Expert Members</h2>
        </div>

        <div ref={wrapperRef}>
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay, Pagination, Navigation]}
            loop={mergedOptions.loop}
            speed={mergedOptions.speed}
            autoplay={mergedOptions.autoplay}
            slidesPerView={mergedOptions.slidesPerView}
            spaceBetween={mergedOptions.spaceBetween}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: false, spaceBetween: 50 },
              767: { slidesPerView: 2, centeredSlides: true },
              992: { slidesPerView: 3, centeredSlides: true },
              1200: { slidesPerView: 3, centeredSlides: true, spaceBetween: 120 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              const { navigation } = swiper.params;
              if (navigation && typeof navigation !== 'boolean') {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            className="swiper th-slider has-shadow categorySlider teamSlider10"
            id="teamSlider10"
          >
            {teamData.slice(0, 6).map((item, idx: number) => (
              <SwiperSlide key={idx}>
                <div className="th-team team-grid3 single">
                  <div className="team-img">
                    <img src={item.image9} alt={item.name} />
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/team-guider-details/${item.slug}`}>
                        {item.name}
                      </Link>
                    </h3>
                    <div className="th-social">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="slider-arrow slider-prev" ref={prevRef}>
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="slider-arrow slider-next" ref={nextRef}>
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamAreaS7;
