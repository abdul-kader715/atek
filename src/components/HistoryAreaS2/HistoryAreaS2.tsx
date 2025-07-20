import type { FC } from 'react';
import history_1 from '../../img/icon/history_1_1.svg';
import history_2 from '../../img/icon/history_1_2.svg';
import history_3 from '../../img/icon/history_1_3.svg';

const HistoryAreaS2: FC = () => {
  return (
    <div className="overflow-hidden space-bottom" id="story-sec">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="story-box inner-style">
              <span className="story-box_icon">
                <img src={history_1} alt="" />
              </span>
              <h3 className="box-title">Our Mission</h3>
              <p className="story-box_text mb-0">
                It involves adopting modern technologies such as cloud computing, artificial intelligence (AI), data analytics, automation, and the Internet of Things (IoT) to enhance efficiency, customer experiences, and overall business performance.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="story-box inner-style">
              <span className="story-box_icon">
                <img src={history_2} alt="" />
              </span>
              <h3 className="box-title">Our Vision</h3>
              <p className="story-box_text mb-0">
                It involves adopting modern technologies such as cloud computing, artificial intelligence (AI), data analytics, automation, and the Internet of Things (IoT) to enhance efficiency, customer experiences, and overall business performance.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="story-box inner-style">
              <span className="story-box_icon">
                <img src={history_3} alt="" />
              </span>
              <h3 className="box-title">Our Goal</h3>
              <p className="story-box_text mb-0">
                It involves adopting modern technologies such as cloud computing, artificial intelligence (AI), data analytics, automation, and the Internet of Things (IoT) to enhance efficiency, customer experiences, and overall business performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAreaS2;
