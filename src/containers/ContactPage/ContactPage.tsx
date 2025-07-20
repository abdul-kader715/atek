import { Fragment } from 'react';
import ContactMap from '../../components/ContactMap/ContactMap';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ContactForm from './ContactForm';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const ContactPage = () => {
    return (
        <Fragment>
            <GsapAnimetion/>
            <HeaderArea className={'th-header header-layout1'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact Us'} />
            <div className="space">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-5">
                            <div className="contact-infobox smoke-bg">
                                <div className="title-area">
                                    <span className="sub-title">Work With Us</span>
                                    <h3 className="sec-title">Contact Information</h3>
                                    <p className="sec-text">Thank you for your interest in Attach Web Agency. We're excited to hear from
                                        you and discuss...</p>
                                </div>
                                <div className="about-contact-grid inner-style">
                                    <span className="about-contact-icon">
                                        <i className="fa-solid fa-headphones-simple"></i>
                                    </span>
                                    <div className="about-contact-details">
                                        <span className="sec-text">Call Us For Query</span>
                                        <p className="about-contact-details-text">
                                            <a href="tel:+256698253158">(+256) 69825-3158</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="about-contact-grid inner-style">
                                    <span className="about-contact-icon">
                                        <i className="fa-light fa-envelope-open-text"></i>
                                    </span>
                                    <div className="about-contact-details">
                                        <span className="sec-text">Email Us Anytime</span>
                                        <p className="about-contact-details-text">
                                            <a href="mailto:info@atek.com">info@atek.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="about-contact-grid inner-style">
                                    <span className="about-contact-icon">
                                        <i className="fa-thin fa-map-location-dot"></i>
                                    </span>
                                    <div className="about-contact-details">
                                        <span className="sec-text">Visit Our Office</span>
                                        <p className="about-contact-details-text">
                                            <a href="/">14 Maniel Lane, Line Berlin</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="contact-formbox ms-xl-3 ps-xl-3">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactMap />
            <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
            <Scrollbar />
        </Fragment>
    );
};

export default ContactPage;