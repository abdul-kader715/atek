import { type FC } from 'react';
import aboutImg1 from '../../img/normal/about_10_1.jpg';
import aboutImg2 from '../../img/normal/about_10_2.jpg';
import aboutImg3 from '../../img/normal/about_10_3.jpg';

interface Skill {
  title: string;
  value: number;
}

const skills: Skill[] = [
  { title: 'IT Solution & Management', value: 90 },
  { title: 'Website & App Development', value: 75 },
  { title: 'SEO & Digital Marketing', value: 82 },
];

interface ChooseSectionProps {
  className?: string;
}

const ChooseSection: FC<ChooseSectionProps> = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className="container">
        <div className="row gy-4 align-items-center flex-row-reverse">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="ps-xl-5">
              <div className="title-area">
                <span className="sub-title style1 text-anime-style-2">Why Choose Us</span>
                <h2 className="sec-title text-anime-style-3">IT Solutions Designed to Drive Results</h2>
                <p>
                  IT solutions are the backbone of modern businesses, enabling them to adapt to changing
                  technologies and market demands. Whether you're a small business or a large enterprise,
                  investing in the right IT solutions can drive growth, innovation, and long-term success.
                </p>
              </div>

              {skills.map((skill, index) => (
                <div className="skill-feature" key={index}>
                  <h3 className="skill-feature_title">{skill.title}</h3>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: `${skill.value}%` }}></div>
                    <div className="progress-value">{skill.value}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 order-0 order-lg-1">
            <div className="choose-imgbox text-center text-md-start">
              <div className="row align-items-center">
                <div className="col-sm-7 col-md-7 col-xl-7">
                  <div className="img1">
                    <img className="w-100" src={aboutImg1} alt="About" />
                  </div>
                </div>
                <div className="col-sm-5 col-md-5 col-xl-5 d-lg-none d-xl-block">
                  <div className="img-box-sm">
                    <div className="img2 mb-25">
                      <img className="th-radius" src={aboutImg2} alt="About" />
                    </div>
                    <div className="img3">
                      <img className="th-radius" src={aboutImg3} alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
