import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import bgImage from '../../img/bg/subscribe_bg_2.jpg';
import planeIcon from '../../img/icon/plane.svg';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div
      className="newsletter-area2 space"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="newsletter-sec2">
          <div className="newsletter-wrapp">
            <h2 className="h2 newsletter-title text-white mb-30 text-anime-style-2">
              Subscribe to Our Newsletter
            </h2>
          </div>
          <div className="newsletter-form-wrapper">
            <form className="newsletter-form style5" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={handleChange}
              />
              <button type="submit" className="th-btn style5 th-radius">
                Subscribe Now <img src={planeIcon} alt="Send" />
              </button>
            </form>
          </div>
          <p className="newsletter-text2 text-white">
            Refer to our Privacy Policy for data management specifics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
