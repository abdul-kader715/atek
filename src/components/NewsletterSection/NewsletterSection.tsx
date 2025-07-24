import { type FC, type FormEvent } from 'react';
import newsletterBg from '../../img/bg/subscribe_bg_1.webp';
import newsletterImg from '../../img/normal/newsletter-img.png';

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection: FC<NewsletterSectionProps> = ({ className = '' }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <div className={className}>
      <div className="container th-container-1568">
        <div
          className="newsletter-sec"
          style={{
            backgroundImage: `url(${newsletterBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 order-1 order-xl-0">
              <div className="newsletter10-content">
                <div className="newsletter-wrapper">
                  <h4 className="h2 newsletter-title text-white text-white text-anime-style-2">
                    Subscribe To Our latest Newsletter
                  </h4>
                  <p className="newsletter-text text-white text-white text-anime-style-3">
                    IT Solutions encompass a wide range of services, technologies, and strategies
                    designed to address the technological.
                  </p>
                </div>
                <div className="newsletter-form-wrapper">
                  <form className="newsletter-form style4" onSubmit={handleSubmit}>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your Email"
                      required
                    />
                    <button type="submit" className="th-btn style3">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 order-0 order-xl-1">
              <div className="newsletter-image text-end">
                <img src={newsletterImg} alt="Newsletter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
