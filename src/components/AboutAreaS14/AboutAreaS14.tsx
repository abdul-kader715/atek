import  { useEffect, useRef, useState, type FC } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import abbg from '../../img/bg/about_bg_3.jpg';
import about_1 from '../../img/normal/about_14_1.png';
import about_2 from '../../img/normal/about_14_2.png';
import about_3 from '../../img/normal/about_14_3.png';

interface DataItem {
  percent: number;
  title: string;
}

const data: DataItem[] = [
  { percent: 85, title: 'Big Data Technologies' },
  { percent: 95, title: 'Cloud-Based Analytics' },
  { percent: 75, title: 'Used Data Visualization Tools' },
];

const AboutSection: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="about-area position-relative overflow-hidden space black-bg"
      id="about-sec"
      ref={containerRef}
      style={{
        backgroundImage: `url(${abbg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-6 order-1 order-xl-0">
            <div className="title-area text-center text-md-start mb-20 pe-xl-5 me-xl-5">
              <span className="sub-title style1 text-white text-anime-style-2">Technology Index</span>
              <h2 className="sec-title mb-20 text-white text-capitalize text-anime-style-3">
                Advanced analytics for intelligent business solutions.
              </h2>
              <p className="sec-text3 mb-35 text-white scroll-text-animation" data-animation="fade_from_bottom">
                Data Analytics is the process of examining, interpreting, & visualizing data
                to extract valuable insights, optimize performance, and support data-driven
                decision-making. It helps businesses.
              </p>
            </div>

            <div className="about-circle-wrap style14">
              {data.map((item, idx) => (
                <div className="about-circle" key={idx}>
                  <div className="progressbar" style={{ width: 160, height: 160 }}>
                    <CircularProgressbarWithChildren
                      value={animated ? item.percent : 0}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: '#0B59DB',
                        trailColor: '#ffffff33',
                        strokeLinecap: 'round',
                      })}
                    >
                      <div className="circle-num text-white fw-bold fs-4">
                        {animated ? `${item.percent}%` : '0%'}
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="media-body">
                    <h3 className="box-title text-white m-0">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6 order-0 order-xl-1">
            <div className="img-box14 position-relative">
              <div className="img1">
                <img src={about_1} alt="About" />
              </div>
              <div className="img2">
                <img src={about_2} alt="About" />
              </div>
              <div className="img3">
                <img src={about_3} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
