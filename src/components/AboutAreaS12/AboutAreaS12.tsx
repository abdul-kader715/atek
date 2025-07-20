import  { type FC } from 'react';
import icon1 from '../../img/icon/about_2_1.svg';
import icon2 from '../../img/icon/about_2_2.svg';
import aboutImg from '../../img/normal/about_12_1.jpg';

const About: FC = () => {
  return (
    <div
      className="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-6">
            <div className="img-box17">
              <div className="img1 global-img">
                <img src={aboutImg} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-20">
              <span className="sub-title style1">Why Choose Us</span>
              <h2 className="sec-title mb-20">
                Innovate Your Business, Embrace Digital Evolution
              </h2>
              <p className="sec-text mb-30">
                Digital transformation is the process of integrating digital
                technology into all aspects of a business, fundamentally
                changing how it operates and delivers value to customers. It
                involves adopting modern technologies such as cloud computing,
              </p>
            </div>
            <div className="about-item-wrap style2">
              <div className="about-item style4">
                <div className="about-item_img">
                  <img src={icon1} alt="Certified Company" />
                </div>
                <div className="about-item_centent">
                  <h5 className="box-title">Certified Company</h5>
                  <p className="about-item_text">
                    While cost-saving in the long run, initial implementation
                    may require significant resources.
                  </p>
                </div>
              </div>
              <div className="about-item style4">
                <div className="about-item_img">
                  <img src={icon2} alt="Internal Networking" />
                </div>
                <div className="about-item_centent">
                  <h5 className="box-title">Internal Networking</h5>
                  <p className="about-item_text">
                    While cost-saving in the long run, initial implementation
                    may require significant resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
