import { Fragment, type FC } from 'react';
import ContactMapS2 from '../../components/ContactMapS2/ContactMapS2';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import contact_shape3 from '../../img/normal/contact-2-img.jpg';
import contact_shape from '../../img/shape/contact-shape_2_1.png';
import contact_shape2 from '../../img/shape/contact-shape_2_2.png';
import ContactForm from '../ContactPage/ContactForm';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  link: string;
  linkType: 'tel' | 'mailto' | 'href';
}

const ContactPage: FC = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: 'fa-solid fa-headphones-simple',
      label: 'Call Us For Query',
      value: '(+256) 69825-3158',
      link: 'tel:+256698253158',
      linkType: 'tel'
    },
    {
      icon: 'fa-light fa-envelope-open-text',
      label: 'Email Us Anytime',
      value: 'info@atek.com',
      link: 'mailto:info@atek.com',
      linkType: 'mailto'
    },
    {
      icon: 'fa-thin fa-map-location-dot',
      label: 'Visit Our Office',
      value: '14 Maniel Lane, Line Berlin',
      link: '#',
      linkType: 'href'
    }
  ];

  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={'Contact Us Two'} pagesub={'Contact Us'} />
      
      <div className="contact-area space space-extra-bottom overflow-hidden">
        <div className="container">
          <div className="contact-wrapp2 mb-60 smoke-bg">
            <div className="contact-infobox-top">
              <div className="row align-items-center justify-content-between text-center">
                <div className="col-xl-3 col-lg-3">
                  <div className="contact-shape-left text-sm-start">
                    <img 
                      src={contact_shape} 
                      alt="Decorative shape element" 
                      className="img-fluid"
                    />
                  </div>
                </div>
                
                <div className="col-xl-6 col-lg-6">
                  <div className="title-area contact-titlebox2 text-center">
                    <span className="sub-title">Work With Us</span>
                    <h2 className="sec-title">Contact Information</h2>
                    <p className="sec-text">
                      Thank you for your interest in Attach Web Agency. We're excited to hear from you and discuss...
                    </p>
                  </div>
                </div>
                
                <div className="col-xl-3 col-lg-3">
                  <div className="contact-shape-right text-sm-end">
                    <img 
                      src={contact_shape2} 
                      alt="Decorative shape element" 
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-infobox-bottom d-xl-flex align-items-center justify-content-between">
              {contactInfo.map((item, index) => (
                <div className="about-contact-grid inner-style" key={index}>
                  <span className="about-contact-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div className="about-contact-details">
                    <span className="sec-text">{item.label}</span>
                    <p className="about-contact-details-text">
                      <a 
                        href={item.link} 
                        {...(item.linkType === 'tel' && { rel: 'noopener noreferrer' })}
                      >
                        {item.value}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form-wrapp2">
            <div className="row">
              <div className="col-xl-7 order-1 order-xl-0">
                <div className="contact-formbox">
                  <ContactForm />
                </div>
              </div>
              
              <div className="col-xl-5 order-0 order-xl-1">
                <div className="contact-thumb">
                  <img 
                    src={contact_shape3} 
                    alt="Contact page illustration" 
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactMapS2 />
      <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
      <Scrollbar />
    </Fragment>
  );
};

export default ContactPage;