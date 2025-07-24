import  { type FC } from 'react';
import Athor1 from '../../img/blog/comment-author-1.webp';
import Athor2 from '../../img/blog/comment-author-2.webp';
import Athor3 from '../../img/blog/comment-author-3.webp';
import Athor4 from '../../img/blog/comment-author-4.webp';
import ReviewForm from './ReviewForm';

const AllTab: FC = () => {
   return (
      <div>
         <ul className="nav product-tab-style2" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
               <a className="nav-link" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="false">Description</a>
            </li>
            <li className="nav-item" role="presentation">
               <a className="nav-link" id="additional-tab" data-bs-toggle="tab" href="#additional" role="tab" aria-controls="additional" aria-selected="false">Additional Information</a>
            </li>

            <li className="nav-item" role="presentation">
               <a className="nav-link active" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="true">Customer Reviews</a>
            </li>
         </ul>
         <div className="tab-content" id="productTabContent">
            <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
               <p>Bluetooth headphones are a wireless audio accessory that connects to your devices, like smartphones,
                  tablets, or computers, via Bluetooth technology. Here's a typical description
                  Introducing our [Brand Name] Bluetooth Headphones, the ultimate companion for your on-the-go audio
                  experience. Immerse yourself in high-fidelity sound without the hassle of wires, thanks to the
                  latest Bluetooth technology
                  Featuring [insert standout features such as noise cancellation, long battery life, etc.], our
                  headphones deliver crystal-clear audio while providing unmatched comfort during extended listening
                  sessions.

                  Designed for convenience and portability, our sleek and lightweight headphones fold easily for
                  storage and travel. The adjustable headband ensures a secure and comfortable fit for all head shapes
                  and sizes.</p>
            </div>
            <div className="tab-pane fade" id="additional" role="tabpanel" aria-labelledby="additional-tab">
               <p>Advanced Bluetooth Connectivity: Our headphones utilize the latest Bluetooth technology for seamless
                  pairing with your devices and reliable wireless connectivity up to 30 feet away.

                  Long-lasting Battery Life: Enjoy hours of uninterrupted music playback with our long-lasting
                  rechargeable battery. Whether you're on a long flight or a marathon study session, our headphones
                  have you covered.

                  Immersive Sound Experience: Experience rich, immersive sound with powerful bass and crisp highs. Our
                  headphones are engineered to deliver audio that's true to the artist's intention, whether you're
                  listening to music, podcasts, or watching movies.

                  Comfortable Ergonomic Design: Designed for extended wear, our headphones feature plush ear cushions
                  and an adjustable headband for a comfortable fit. Say goodbye to discomfort, even during marathon
                  listening sessions.

                  Foldable and Portable: Our headphones are designed to go wherever you do. Easily fold them up and
                  toss them in your bag for on-the-go convenience. Whether you're traveling, commuting, or hitting the
                  gym, take your music with you everywhere.

                  Intuitive Controls: Control your music, adjust volume, and take calls with ease using the intuitive
                  onboard controls. No need to fumble with your device—everything you need is right at your
                  fingertips.</p>
            </div>
            <div className="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
               <div className="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                  <div className="woocommerce-Reviews">
                     <div className="th-comments-wrap ">
                        <ul className="comment-list">
                           <li className="review th-comment-item">
                              <div className="th-post-comment">
                                 <div className="comment-avater">
                                    <img src={Athor1} alt="Comment Author" />
                                 </div>
                                 <div className="comment-content">
                                    <h4 className="name">Adam Jhon</h4>
                                    <span className="commented-on"><i className="far fa-calendar"></i>22 April, 2023</span>
                                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                       <span style={{ width: '100%' }}>
                                          Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating
                                       </span>
                                    </div>
                                    <p className="text">This product is very much qualityful and I love this working system and speed.</p>
                                 </div>
                              </div>
                           </li>
                           <li className="review th-comment-item">
                              <div className="th-post-comment">
                                 <div className="comment-avater">
                                    <img src={Athor2} alt="Comment Author" />
                                 </div>
                                 <div className="comment-content">
                                    <h4 className="name">Jusctin Dacon</h4>
                                    <span className="commented-on"><i className="far fa-calendar"></i>26 April, 2023</span>
                                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                       <span style={{ width: '100%' }}>
                                          Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating
                                       </span>
                                    </div>
                                    <p className="text">They delivered the product in a few time. Product quality is also very good.</p>
                                 </div>
                              </div>
                           </li>
                           <li className="review th-comment-item">
                              <div className="th-post-comment">
                                 <div className="comment-avater">
                                    <img src={Athor3} alt="Comment Author" />
                                 </div>
                                 <div className="comment-content">
                                    <h4 className="name">Jacklin July</h4>
                                    <span className="commented-on"><i className="far fa-calendar"></i>26 April, 2023</span>
                                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                       <span style={{ width: '100%' }}>
                                          Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating
                                       </span>
                                    </div>
                                    <p className="text">Their product and service is very satisfying. I highly recommend their services.</p>
                                 </div>
                              </div>
                           </li>
                           <li className="review th-comment-item">
                              <div className="th-post-comment">
                                 <div className="comment-avater">
                                    <img src={Athor4} alt="Comment Author" />
                                 </div>
                                 <div className="comment-content">
                                    <h4 className="name">Adison Smith</h4>
                                    <span className="commented-on"><i className="far fa-calendar"></i>26 April, 2023</span>
                                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                       <span style={{ width: '100%' }}>
                                          Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating
                                       </span>
                                    </div>
                                    <p className="text">I am just in love with this product. Their service is also very good you can also try.</p>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <ReviewForm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllTab;