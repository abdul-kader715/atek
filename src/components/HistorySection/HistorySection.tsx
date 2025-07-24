import type { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../img/bg/history_bg_1.webp';
import icon1 from '../../img/icon/history_1_1.svg';
import icon2 from '../../img/icon/history_1_2.svg';
import icon3 from '../../img/icon/history_1_3.svg';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';

interface HistoryItem {
  title: string;
  description: string;
  icon: string;
}

const historyData: HistoryItem[] = [
  {
    title: 'Our Mission',
    description:
      'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates and delivers value to customers.',
    icon: icon1,
  },
  {
    title: 'Our Vision',
    description:
      'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates and delivers value to customers.',
    icon: icon2,
  },
  {
    title: 'Our Goal',
    description:
      'Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates and delivers value to customers.',
    icon: icon3,
  },
];

interface HistorySectionProps {
  targetRef?: RefObject<HTMLDivElement>;
}

const HistorySection: FC<HistorySectionProps> = ({ targetRef }) => {
  return (
    <div className="history-sec1 overflow-hidden space-top" ref={targetRef}>
      <div className="container">
        <div
          className="history-area overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="history-content">
            <div className="title-area">
              <h3 className="sec-title text-anime-style-2">
                History Of Digital Transformation
              </h3>
              <p
                className="sec-text scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                Digital transformation is the process of integrating digital
                technology into all aspects of a business, fundamentally
                changing how it operates and delivers value to customers.
              </p>
            </div>
            <div
              className="btn-group scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <Link to="/contact" className="th-btn style1 th-radius th-icon">
                Discover More <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-60">
        <div className="row gy-4 justify-content-center">
          {historyData.map((item, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <div className="story-box">
                <h3 className="box-title">{item.title}</h3>
                <p className="story-box_text">{item.description}</p>
                <span className="story-box_icon">
                  <img src={item.icon} alt={item.title} />
                </span>
                <span className="icon">
                  <i className="fa-light fa-arrow-up-right"></i>
                </span>
                <div className="story-wrapp">
                  <div className="discount-tag">
                    <CircleTextS2 text="See More about History." method="letters" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
