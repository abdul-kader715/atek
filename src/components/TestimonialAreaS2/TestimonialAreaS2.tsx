import { useState, type FC } from 'react';
import testimonial1 from '../../img/testimonial/testi_2_1.png';
import testimonial2 from '../../img/testimonial/testi_2_2.png';
import testimonial3 from '../../img/testimonial/testi_2_3.png';
import testimonial4 from '../../img/testimonial/testi_2_4.png';
import testimonial5 from '../../img/testimonial/testi_2_5.png';

import MapImg from '../../img/bg/map.webp';
import shape from '../../img/shape/shape_2_2.png';
import small from '../../img/shape/small-cloud.png';
import shape2 from '../../img/shape/shape_2_5.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  designation: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Cloud computing services provide a wide range of offerings tailored to different business needs, enabling organizations to harness the power of cloud technology. Here are some key services provided in cloud computing solutions.",
    name: "Andrew Simon",
    designation: "Content Creator",
    image: testimonial1,
  },
  {
    id: 2,
    text: "Cloud computing services provide a wide range of offerings tailored to different business needs, enabling organizations to harness the power of cloud technology. Here are some key services provided in cloud computing solutions.",
    name: "Maria Doe",
    designation: "UiXi Designer",
    image: testimonial2,
  },
  {
    id: 3,
    text: "Cloud computing services provide a wide range of offerings tailored to different business needs, enabling organizations to harness the power of cloud technology. Here are some key services provided in cloud computing solutions.",
    name: "Angelina Rose",
    designation: "App Developer",
    image: testimonial3,
  },
  {
    id: 4,
    text: "Cloud computing services provide a wide range of offerings tailored to different business needs, enabling organizations to harness the power of cloud technology. Here are some key services provided in cloud computing solutions.",
    name: "Michel Carlos",
    designation: "Java Developer",
    image: testimonial4,
  },
  {
    id: 5,
    text: "Cloud computing services provide a wide range of offerings tailored to different business needs, enabling organizations to harness the power of cloud technology. Here are some key services provided in cloud computing solutions.",
    name: "Michel Smith",
    designation: "Software Engineer",
    image: testimonial5,
  },
];

interface TestimonialAreaS2Props {
  className?: string;
}

const TestimonialAreaS2: FC<TestimonialAreaS2Props> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${className ?? ''}`} id="testi-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-anime-style-2">Testimonial</span>
          <h2 className="sec-title text-anime-style-3">What Client Say About us</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="testi-review" style={{ backgroundImage: `url(${MapImg})` }}>
              <div className="testimonial-wrapper">
                {testimonials.map((item, index) => (
                  <div
                    key={item.id}
                    className={`testi-box hover-item ${activeIndex === index ? 'item-active' : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="testi-box_content feature-card-active-wrap">
                      <p className="testi-box_text">“{item.text}”</p>
                      <div className="testi-box_review">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <div className="testi-box_profile">
                      <div className="testi-box_avater">
                        <span></span>
                        <img src={item.image} alt={`testimonial ${item.name}`} />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{item.name}</h3>
                        <span className="testi-box_desig">{item.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ShapeMockup className="shape-mockup movingX d-none d-xl-block" top="30%" left="-6%">
          <img className="gmovingX" src={shape} alt="shape" />
        </ShapeMockup>
        <ShapeMockup className="shape-mockup jump d-none d-xl-block" bottom="0%" left="-13%">
          <img src={small} alt="shape" />
        </ShapeMockup>
        <ShapeMockup className="shape-mockup spin d-none d-xl-block" bottom="30%" right="-16.5%">
          <img src={shape2} alt="shape" />
        </ShapeMockup>
      </div>
    </section>
  );
};

export default TestimonialAreaS2;
