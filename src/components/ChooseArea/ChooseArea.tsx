import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../img/choose/choose_1_1.jpg";
import img2 from "../../img/choose/choose_1_2.jpg";
import img3 from "../../img/choose/choose_1_3.jpg";
import img4 from "../../img/choose/choose_1_4.jpg";
import img5 from "../../img/choose/choose_1_5.jpg";
import type { FC } from "react";

interface Slide {
  title: string;
  subtitle: string;
  img: string;
}

const slides: Slide[] = [
  {
    title: "Seamless Integration",
    subtitle: "We ensure that our cloud solutions integrate smoothly.",
    img: img1,
  },
  {
    title: "Cost Efficiency",
    subtitle: "Reduce your IT overhead with our cost effective cloud solutions.",
    img: img2,
  },
  {
    title: "Expertise You Can Trust",
    subtitle: "We stay ahead of industry trends and implement cutting-edge tools.",
    img: img3,
  },
  {
    title: "Customized Solutions",
    subtitle: "We understand that every business is unique. Our cloud solutions.",
    img: img4,
  },
  {
    title: "End-to-End Support",
    subtitle: "We provide 24/7 monitoring and support to ensure your systems.",
    img: img5,
  },
];

interface ChooseAreaProps {
  className?: string;
}

const ChooseArea: FC<ChooseAreaProps> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className={`${props.className}`}>
      <div className="container th-container6">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-9 col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Why Choose Us</span>
              <h2 className="sec-title text-anime-style-3">
                Unlocking Growth Potential with Advanced Cloud Solutions
              </h2>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper th-slider whySlider2"
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
        >
          {slides.concat(slides, slides).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="category-card single2">
                <div className="box-img global-img">
                  <img src={item.img} alt="Image" />
                </div>
                <div className="choose-content text-center">
                  <h3 className="box-title">
                    <Link onClick={ClickHandler} to="/service">
                      {item.title}
                    </Link>
                  </h3>
                  <span className="choose-subtitle">{item.subtitle}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ChooseArea;
