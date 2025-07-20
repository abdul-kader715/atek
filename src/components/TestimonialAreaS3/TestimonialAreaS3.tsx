import { type FC } from 'react';
import testim from '../../img/testimonial/testi-img-1.jpg';
import testim2 from '../../img/testimonial/testi-img-2.jpg';
import TestimonialSlider from '../TestimonialSliderS2/TestimonialSliderS2';

interface TestimonialAreaS3Props {
  className?: string;
}

const TestimonialAreaS3: FC<TestimonialAreaS3Props> = ({ className }) => {
  return (
    <section className={`${className ?? ''}`} id="testi-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="testi-image-wrapp">
              <div className="testi-img">
                <img src={testim} alt="Testimonial 1" />
              </div>
              <div className="testi-img style2">
                <img src={testim2} alt="Testimonial 2" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area testi5-titlebox mb-40 mt-40">
              <span className="sub-title text-anime-style-2">Testimonial</span>
              <h2 className="sec-title text-anime-style-2">What Client Say About us</h2>
            </div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaS3;
