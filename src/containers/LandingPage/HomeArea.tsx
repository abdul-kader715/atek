
import feaIcon1 from './img/feature/fea-icon1.svg';
import feaIcon2 from './img/feature/fea-icon2.svg';
import feaIcon3 from './img/feature/fea-icon3.svg';
import feaIcon4 from './img/feature/fea-icon4.svg';
import feaIcon5 from './img/feature/fea-icon5.svg';
import feaIcon6 from './img/feature/fea-icon6.svg';
import feaIcon7 from './img/feature/fea-icon7.svg';
import demoData from './demoData'; 

const features = [
  { icon: feaIcon1, text: 'Elementor Page Builder' },
  { icon: feaIcon2, text: 'No Coding Skills Required' },
  { icon: feaIcon3, text: 'One Click Demo import' },
  { icon: feaIcon4, text: 'WooCommerce Ready' },
  { icon: feaIcon5, text: 'SEO & Speed Optimized' },
  { icon: feaIcon6, text: 'New Demo Every Week' },
  { icon: feaIcon7, text: 'WPML Ready' },
];

const HomePagesSection = () => {
  return (
    <section className="home-pages-area home-pages space" id="homePage">
      <div className="container th-container1744">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="title-area feature-titlebox text-center">
              <h3 className="total-page text-white">13<span>+</span></h3>
              <h4 className="sec-title text-white">
                Explore functional, impressive and rich demos to start with
              </h4>
              <div className="home-featured-list">
                <ul>
                  {features.map((item, idx) => (
                    <li key={idx}>
                      <span className="featured-icon">
                        <img src={item.icon} alt="" />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {demoData.map((demo, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="thumb-box">
                <div className="thumb-img">
                  <img src={demo.image} alt={demo.alt} />
                  {demo.link && (
                    <div className="btn-wrap d-flex align-items-center">
                      <a target="_blank" rel="noopener noreferrer" href={demo.link} className="th-btn btn-multipage">
                        View Demo
                      </a>
                    </div>
                  )}
                </div>
                <div className="thumb-box-content">
                  <h3 className="thumb-title text-white">
                    {demo.link ? (
                      <a target="_blank" rel="noopener noreferrer" href={demo.link}>
                        {demo.title}
                      </a>
                    ) : (
                      demo.title
                    )}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePagesSection;
