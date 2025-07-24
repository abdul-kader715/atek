import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import caseImg1 from '../../img/case/case_4_1.webp';
import caseImg2 from '../../img/case/case_4_2.webp';
import caseImg3 from '../../img/case/case_4_3.webp';
import caseImg4 from '../../img/case/case_4_4.webp';
import caseImg5 from '../../img/case/case_4_5.webp';
import caseImg6 from '../../img/case/case_4_6.webp';
import caseImg7 from '../../img/case/case_4_7.webp';

const caseData = [
  { id: 1, categories: ['case1', 'case3'], img: caseImg1 },
  { id: 2, categories: ['case2', 'case4'], img: caseImg2 },
  { id: 3, categories: ['case1', 'case4'], img: caseImg3 },
  { id: 4, categories: ['case2', 'case4'], img: caseImg4 },
  { id: 5, categories: ['case1', 'case2', 'case4'], img: caseImg5 },
  { id: 6, categories: ['case2', 'case4'], img: caseImg6 },
  { id: 7, categories: ['case3', 'case4'], img: caseImg7 },
];

const filters = [
  { label: 'Development', value: '*' },
  { label: 'Woo Commerce', value: 'case1' },
  { label: 'CRM Solutions', value: 'case2' },
  { label: 'Web Design', value: 'case3' },
  { label: 'IT Support', value: 'case4' },
];

const CaseStudies = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [activeFilter, setActiveFilter] = useState('*');
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isoRef = useRef<Isotope | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Initialize imagesLoaded
    const imgLoad = imagesLoaded(gridRef.current);

    imgLoad.on('always', () => {
      const grid = gridRef.current;
      if (!grid) return;

      isoRef.current = new Isotope(grid, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
        },
      });
    });


    return () => {
      if (isoRef.current) {
        isoRef.current.destroy();
        isoRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isoRef.current) {
      const filterValue = activeFilter === '*' ? '*' : `.${activeFilter}`;
      isoRef.current.arrange({ filter: filterValue });
    }
  }, [activeFilter]);

  return (
    <div className="case-area space">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-12">
            <span className="sub-title">Case Studies</span>
            <h2 className="sec-title text-center mb-30">
              Transforming Ideas into Innovations
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="case-menu mb-5 text-center">
              {filters.map(({ label, value }) => (
                <button
                  key={value}
                  className={`case4-btn ${activeFilter === value ? 'active' : ''}`}
                  onClick={() => setActiveFilter(value)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row gy-30 grid" ref={gridRef}>
          {caseData.map(({ id, categories, img }) => (
            <div
              key={id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${categories.join(' ')}`}
            >
              <div className="case-box style2 inner-style1 position-relative">
                <div className="case-img global-img">
                  <img src={img} alt="case" />
                  <Link onClick={ClickHandler} to="/case-study-details/1" className="icon-btn" aria-label="View Case Study">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="case-content">
                  <div className="media-left">
                    <h4 className="box-title">
                      <Link onClick={ClickHandler} to="/case-study-details/1">
                        Web & Mobile Development
                      </Link>
                    </h4>
                    <span className="case-subtitle">Development</span>
                  </div>
                </div>
                <div className="case-action">
                  <Link onClick={ClickHandler} to="/case-study-details/1" className="case-btn" aria-label="View Case Study">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
