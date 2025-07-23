
import { Swiper, SwiperSlide } from 'swiper/react';

import feaMask from './img/feature/fea-bg-mask.png';
import feature1 from './img/feature/feature-1-2.png';
import feature2 from './img/feature/feature-1-3.png';

import deviceLG from './img/responsive/device-lg.png';
import deviceXL from './img/responsive/device-xl.png';
import deviceXS from './img/responsive/device-xs.png';

import index1XL from './img/responsive/index-1-xl.jpg';
import index2XL from './img/responsive/index-2-xl.jpg';
import index3XL from './img/responsive/index-3-xl.jpg';

import index1ML from './img/responsive/index-1-ml.jpg';
import index2ML from './img/responsive/index-2-ml.jpg';
import index3ML from './img/responsive/index-3-ml.jpg';

import { Autoplay } from 'swiper/modules';
import index1XS from './img/responsive/index-1-xs.jpg';
import index2XS from './img/responsive/index-2-xs.jpg';
import index3XS from './img/responsive/index-3-xs.jpg';

const responsiveSliderOptions = {
   loop: true,
   speed: 1200,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
   },
   modules: [Autoplay],
   spaceBetween: 0,
   breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
      1400: { slidesPerView: 1 },
   },
};


const ResponsiveFeatures = () => {
   return (
      <div className="space bg-smoke" id="responsive">
         <div className="container">
            <div className="feature-card style-2">
               <div className="feature-card-bg bg-mask"
                  style={{
                     WebkitMaskImage: `url(${feaMask})`,
                     maskImage: `url(${feaMask})`,
                     WebkitMaskSize: '100% 100%',
                     maskSize: '100% 100%',
                     WebkitMaskRepeat: 'no-repeat',
                     maskRepeat: 'no-repeat'
                  }}>
                  <div className="row align-items-center">
                     <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="feature-img text-center text-lg-start">
                           <img src={feature1} alt="Filter Image" />
                        </div>
                     </div>
                     <div className="col-lg-5 ms-xl-5 ps-xl-4">
                        <div className="title-area feature2-titlebox">
                           <span className="sec-subtitle">Lifetime Updates</span>
                           <h2 className="sec-title">The One Platform With Everything You Need</h2>
                        </div>
                        <p className="sec-text">
                           Unlike many other WordPress website builder plugins, Elementor offers all the necessary tools and design features for free.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="feature-card style-3">
               <div className="feature-card-bg bg-mask" style={{
                  WebkitMaskImage: `url(${feaMask})`,
                  maskImage: `url(${feaMask})`,
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat'
               }}>
                  <div className="row align-items-center">
                     <div className="col-lg-5 order-1 order-lg-0">
                        <div className="title-area feature2-titlebox">
                           <span className="sec-subtitle">24/7 Support</span>
                           <h2 className="sec-title">Lifetime Support</h2>
                        </div>
                        <p className="sec-text">
                           Ongoing support with 6 months of priority access. But you can download latest theme and plugin anytime. After six months, renew support for help.
                        </p>
                        <div className="feature-action text-start">
                           <a href="https://themeforest.net/user/themehour" className="th-btn">Contact Us</a>
                        </div>
                     </div>
                     <div className="col-lg-7 mt-4 mt-lg-0 order-0 order-lg-1 text-center text-lg-end">
                        <div className="feature-img me-xl-4 pe-xl-5">
                           <img src={feature2} alt="Image" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="feature-card style-4">
               <div className="feature-card-bg bg-mask" style={{
                  WebkitMaskImage: `url(${feaMask})`,
                  maskImage: `url(${feaMask})`,
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat'
               }}>
                  <div className="row align-items-end">
                     <div className="col-xl-7 col-lg-6">
                        <div className="responsive-area">
                           <div className="device-xl">
                              <div className="mockup">
                                 <img src={deviceXL} alt="Mockup" />
                              </div>
                              <div className="slider-xl">
                                 <Swiper className="responsive-slider th-slider" {...responsiveSliderOptions}>
                                    {[index1XL, index2XL, index3XL].map((img, i) => (
                                       <SwiperSlide key={i}>
                                          <div className="responsive-thumb-box">
                                             <div className="responsive-thumb-img">
                                                <img src={img} alt={`index-${i + 1}-xl`} />
                                             </div>
                                          </div>
                                       </SwiperSlide>
                                    ))}
                                 </Swiper>
                              </div>
                           </div>
                           <div className="device-tab">
                              <div className="mockup">
                                 <img src={deviceLG} alt="Mockup" />
                              </div>
                              <div className="slider-tab">
                                 <Swiper className="responsive-slider th-slider" {...responsiveSliderOptions}>
                                    {[index1ML, index2ML, index3ML].map((img, i) => (
                                       <SwiperSlide key={i}>
                                          <div className="responsive-thumb-box">
                                             <div className="responsive-thumb-img">
                                                <img src={img} alt={`index-${i + 1}-ml`} />
                                             </div>
                                          </div>
                                       </SwiperSlide>
                                    ))}
                                 </Swiper>
                              </div>
                           </div>
                           <div className="device-xs">
                              <div className="mockup">
                                 <img src={deviceXS} alt="Mockup" />
                              </div>
                              <div className="slider-xs">
                                 <Swiper className="responsive-slider th-slider" {...responsiveSliderOptions}>
                                    {[index1XS, index2XS, index3XS].map((img, i) => (
                                       <SwiperSlide key={i}>
                                          <div className="responsive-thumb-box">
                                             <div className="responsive-thumb-img">
                                                <img src={img} alt={`index-${i + 1}-xs`} />
                                             </div>
                                          </div>
                                       </SwiperSlide>
                                    ))}
                                 </Swiper>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6 mt-4 mt-lg-0">
                        <div className="title-area feature2-titlebox">
                           <span className="sec-subtitle">Fully Responsive Design</span>
                           <h2 className="sec-title">Responsive and Retina Ready</h2>
                        </div>
                        <p className="sec-text">
                           The layout is responsive and looks gorgeous and professional on any major devices. This theme comes with custom page templates, demo content, and documentation.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default ResponsiveFeatures;
