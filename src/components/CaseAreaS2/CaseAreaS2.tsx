import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import CaseData from '../../api/Case';
import category from '../../img/bg/category_3_bg.jpg';
import { Autoplay, Pagination } from 'swiper/modules';

interface CaseItem {
  slug: string;
  img: string;
  title: string;
  subtitle: string;
}

interface CaseAreaS2Props {
  className?: string;
}

const CaseAreaS2: FC<CaseAreaS2Props> = ({ className }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  const cases: CaseItem[] = CaseData.slice(12, 18);

  return (
    <section className={className} style={{ backgroundImage: `url(${category})` }}>
      <div className="container th-container">
        <div className="title-area text-center category-3-titlebox">
          <span className="sub-title text-anime-style-2">Benefits of AI and Machine Learning</span>
          <h2 className="sec-title text-anime-style-3">Innovate, Automate, Elevate with AI</h2>
        </div>

        <Swiper
          className="swiper th-slider has-shadow"
          id="processSlider"
          spaceBetween={30}
          loop={settings.loop}
          speed={settings.speed}
          autoplay={settings.autoplay}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5 },
          }}
        >
          {cases.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="category-card single2">
                <div className="box-img global-img">
                  <Link onClick={ClickHandler} to={`/case-study-details/${item.slug}`}>
                    <img src={item.img} alt="Image" />
                  </Link>
                </div>
                <h3 className="box-title">
                  <Link onClick={ClickHandler} to={`/case-study-details/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
                <span className="category-text">{item.subtitle}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CaseAreaS2;
