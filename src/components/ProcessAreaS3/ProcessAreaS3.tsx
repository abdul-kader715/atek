import { type FC } from 'react';
import { Link } from 'react-router-dom';

import process_3_1 from '../../img/process/process_3_1.jpg';
import process_3_2 from '../../img/process/process_3_2.jpg';
import process_3_3 from '../../img/process/process_3_3.jpg';

const ProcessAreaS3: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="process-sec3 overflow-hidden space-bottom light-bg" id="process-sec">
      <div className="container">
        <div className="process3-title-area">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8">
              <div className="title-area">
                <span className="sub-title extra-sub text-anime-style-2">Banking Process</span>
                <h2 className="sec-title text-white text-anime-style-3">
                  Digital banking, wherever <br /> life takes you
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process3-wrapp dark-bg">
        <div className="container">
          <div className="row gy-50 gx-70 justify-content-center text-center">
            {[ 
              {
                img: process_3_1,
                title: 'Download App',
                desc: 'Download app. It will work for windows, Mac and androids.',
              },
              {
                img: process_3_2,
                title: 'Create Your Account',
                desc: 'Secure online account opening, mobile banking, and much more.',
              },
              {
                img: process_3_3,
                title: 'Start Banking',
                desc: 'Set up online banking and watch your money grow',
              }
            ].map(({ img, title, desc }, idx) => (
              <div className="col-md-6 col-xl-4" key={idx}>
                <div className="process-card card3">
                  <div className="process-card_img mb-30">
                    <img src={img} alt="img" />
                  </div>
                  <div className="process-card_content">
                    <h4 className="box-title text-white">
                      <Link onClick={ClickHandler} to="/service">
                        {title}
                      </Link>
                    </h4>
                    <p className="sec-text">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAreaS3;
