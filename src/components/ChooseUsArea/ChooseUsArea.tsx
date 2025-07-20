import { type FC } from 'react';
import choose_1 from '../../img/icon/choose_1_1.svg';
import choose_2 from '../../img/icon/choose_1_2.svg';
import choose_3 from '../../img/icon/choose_1_3.svg';
import choose_4 from '../../img/choose/choose_3_1.jpg';
import choose_5 from '../../img/choose/choose_3_2.jpg';
import choose_6 from '../../img/choose/choose_3_3.jpg';
import choose_7 from '../../img/choose/choose_3_4.jpg';

const ChooseUsArea: FC = () => {
  return (
    <div className="bg-smoke overflow-hidden space">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="title-area">
              <span className="sub-title style1 text-anime-style-2">Why Choose Us</span>
              <h2 className="sec-title text-anime-style-3">
                Building the Future of Technology Today
              </h2>
              <p
                className="sec-text me-xl-5 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                A software development company specializes in designing, developing, and
                deploying software applications tailored to meet specific client needs.
                These companies combine technical expertise with innovative strategies to
                deliver cutting-edge solutions for businesses across various industries.
              </p>
            </div>

            {[
              {
                icon: choose_1,
                alt: "Evolving Technologies",
                title: "Evolving Technologies",
                text: "Staying updated with the latest trends through continuous learning and innovation."
              },
              {
                icon: choose_2,
                alt: "Data Security",
                title: "Data Security",
                text: "Adhering to industry standards like GDPR, HIPAA, and ISO for data protection."
              },
              {
                icon: choose_3,
                alt: "Quality Assurance",
                title: "Quality Assurance",
                text: "Rigorous testing processes to deliver bug-free and high-performing software."
              }
            ].map(({ icon, alt, title, text }, idx) => (
              <div
                className="choose-about scroll-text-animation"
                data-animation="fade_from_bottom"
                key={idx}
              >
                <div className="choose-about_icon">
                  <img src={icon} alt={alt} />
                </div>
                <div className="media-body">
                  <h3 className="box-title">{title}</h3>
                  <p className="choose-about_text pe-xl-5 me-xl-5">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6 order-0 order-lg-1">
            <div className="choose-wrapp">
              {[choose_4, choose_5, choose_6, choose_7].map((imgSrc, idx) => (
                <div className="img1 global-img" key={idx}>
                  <img src={imgSrc} alt="Choose" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsArea;
