import { type FC } from 'react';
import testim from '../../img/testimonial/testi-img1.jpg';
import testim2 from '../../img/testimonial/testi-img2.jpg';
import map2 from '../../img/bg/map2.webp';
import TestimonialSlider from '../TestimonialSliderS2/TestimonialSliderS2';

interface TestimonialAreaS5Props {
  className?: string;
}

const TestimonialAreaS5: FC<TestimonialAreaS5Props> = ({ className }) => {
  return (
    <section
      className={className}
      id="testi-sec"
      style={{ backgroundImage: `url(${map2})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area mb-40">
              <span className="sub-title text-anime-style-2">Testimonial</span>
              <h2 className="sec-title text-anime-style-3">What Client Say About us</h2>
            </div>
            <TestimonialSlider />
          </div>
          <div className="col-xl-6">
            <div className="testi-image-wrapp2">
              <div className="testi-img">
                <img src={testim} alt="Testimonial 1" />
              </div>
              <div className="testi-img2">
                <img src={testim2} alt="Testimonial 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaS5;
