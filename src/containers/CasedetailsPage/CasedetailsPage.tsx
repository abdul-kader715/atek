import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Categorydetails from '../../api/Case';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import case_dsc from '../../img/case/case-dsc.webp';
import sv_sm_1 from '../../img/service/sv-sm-1.webp';
import sv_sm_2 from '../../img/service/sv-sm-2.webp';
import widget_banner from '../../img/bg/widget_banner.webp';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface CategoryItem {
    slug: string;
    title: string;
}

const CasedetailsPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const CategoryData: CategoryItem | undefined = Categorydetails.find((item: CategoryItem) => item.slug === slug);

    if (!CategoryData) {
        return <div>Case study not found</div>;
    }

    return (
        <Fragment>
            <GsapAnimetion />
            <HeaderArea className={'th-header header-layout1'} />
            <PageTitle pageTitle={CategoryData.title} pagesub={'Case Study'} />
            <section className="space">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-lg-7">
                            <div className="project-dsc-img mb-60">
                                <img src={case_dsc} alt={CategoryData.title} />
                            </div>
                            <div className="page-single">
                                <div className="page-content d-block">
                                    <h2 className="box-title">{CategoryData.title}</h2>
                                    <p className="box-text mb-30">Welcome to our Case Study Details Page, where we unravel the stories
                                        behind our portfolio projects. Immerse yourself in the intricacies of our design thinking,
                                        development challenges, and triumphant solutions. Each case study is a testament to our
                                        commitment to innovation and client success. Join us on a journey through our work,
                                        showcasing how we turn challenges into opportunities and ideas into impactful digital
                                        experiences. Explore the behind-the-scenes narratives that highlight our passion for
                                        problem-solving and our dedication to delivering exceptional results.</p>
                                    <p className="box-text mb-50">In today's fast-evolving digital landscape, businesses need a clear IT
                                        strategy to align technology with their long-term goals. IT Strategy & Planning services
                                        help organizations optimize resources, improve efficiency, enhance security, and drive
                                        innovation through a structured approach to technology adoption and management.</p>
                                    <h2 className="box-title">What Did We Do</h2>
                                    <p className="box-text mb-30">Step behind the curtain and explore the heart of our projects on the
                                        Case Study Details Page. This curated collection delves into the intricacies of our design
                                        processes, strategic thinking, and collaborative endeavors. Welcome to our Case Study
                                        Details Page, where we unravel the stories behind our portfolio projects.</p>
                                    <div className="case-study-list mb-15">
                                        <div className="row gx-40">
                                            <div className="col-xl-6">
                                                <div className="case-study-list-item d-flex align-items-start">
                                                    <span className="icon"><i className="fa-light fa-square-check"></i></span>
                                                    <p className="sec-text me-xl-5">A well-defined IT strategy ensures that stay ahead
                                                        of the competition by leveraging the right technology.</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="case-study-list-item d-flex align-items-start">
                                                    <span className="icon"><i className="fa-light fa-square-check"></i></span>
                                                    <p className="sec-text me-xl-5">In today's fast-evolving digital landscape,
                                                        businesses need a IT strategy to align technology with their long-term
                                                        goals.</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="case-study-list-item d-flex align-items-start">
                                                    <span className="icon"><i className="fa-light fa-square-check"></i></span>
                                                    <p className="sec-text me-xl-5">IT Strategy & Planning services help organizations
                                                        optimize resources, improve efficiency, enhance security,</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="case-study-list-item d-flex align-items-start">
                                                    <span className="icon"><i className="fa-light fa-square-check"></i></span>
                                                    <p className="sec-text me-xl-5">Evaluating existing IT systems, applications, and
                                                        infrastructure. Identifying gaps, risks, and opportunities for improvement.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-gallery-wrapper mb-60">
                                        <div className="row gy-4">
                                            <div className="col-6">
                                                <div className="sv-sm-img">
                                                    <img className="w-100" src={sv_sm_1} alt="Service Image 1" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="sv-sm-img">
                                                    <img className="w-100" src={sv_sm_2} alt="Service Image 2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="box-title">The Results</h2>
                                    <p className="box-text mb-30">With the rise of cloud computing, AI, cybersecurity threats, and
                                        digital transformation, businesses must continuously refine their IT strategies. An
                                        adaptive, forward-thinking approach ensures long-term success.</p>
                                    <div className="case-study-list">
                                        <div className="case-study-list-item d-flex align-items-start">
                                            <span className="icon"><i className="fa-light fa-square-check"></i></span>
                                            <p className="sec-text mb-10">Planning for cloud migration, automation, and AI adoption.</p>
                                        </div>
                                        <div className="case-study-list-item d-flex align-items-start">
                                            <span className="icon"><i className="fa-light fa-square-check"></i></span>
                                            <p className="sec-text mb-10">Aligning technology with business objectives for scalability and growth.</p>
                                        </div>
                                        <div className="case-study-list-item d-flex align-items-start">
                                            <span className="icon"><i className="fa-light fa-square-check"></i></span>
                                            <p className="sec-text mb-0">Ensuring seamless digital experiences for customers and employees.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-5">
                            <aside className="sidebar-area">
                                <div className="widget widget_download">
                                    <h4 className="widget_title">Project Information</h4>
                                    <div className="sidebar-info">
                                        <div className="sidebar-info-item d-flex align-items-center">
                                            <span className="sidebar-info-icon"><i className="fa-solid fa-user"></i></span>
                                            <div className="sidebar-info-content">
                                                <span className="sidebar-info-meta">Clients:</span>
                                                <h4 className="sidebar-info-title"><Link to="/">Josefin H. Smith</Link></h4>
                                            </div>
                                        </div>
                                        <div className="sidebar-info-item d-flex align-items-center">
                                            <span className="sidebar-info-icon"><i className="fa-solid fa-layer-group"></i></span>
                                            <div className="sidebar-info-content">
                                                <span className="sidebar-info-meta">Category:</span>
                                                <h4 className="sidebar-info-title"><Link to="/">Branding Marketing</Link></h4>
                                            </div>
                                        </div>
                                        <div className="sidebar-info-item d-flex align-items-center">
                                            <span className="sidebar-info-icon"><i className="fa-solid fa-calendar-days"></i></span>
                                            <div className="sidebar-info-content">
                                                <span className="sidebar-info-meta">Date:</span>
                                                <h4 className="sidebar-info-title"><Link to="/">25 March, 2025</Link></h4>
                                            </div>
                                        </div>
                                        <div className="sidebar-info-item d-flex align-items-center">
                                            <span className="sidebar-info-icon"><i className="fa-solid fa-location-dot"></i></span>
                                            <div className="sidebar-info-content">
                                                <span className="sidebar-info-meta">Address:</span>
                                                <h4 className="sidebar-info-title"><a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/Wzit3rG9GvPXqTYQ8">258 Dancing Street, USA</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget_download">
                                    <h4 className="widget_title">Download Brochure</h4>
                                    <div className="donwload-media-wrap">
                                        <div className="download-media">
                                            <div className="download-media_icon">
                                                <i className="fa-light fa-file-pdf"></i>
                                            </div>
                                            <div className="download-media_info">
                                                <h5 className="download-media_title"><Link to="/">Download PDF</Link></h5>
                                            </div>
                                        </div>
                                        <div className="download-media">
                                            <div className="download-media_icon">
                                                <i className="fal fa-file-lines"></i>
                                            </div>
                                            <div className="download-media_info">
                                                <h5 className="download-media_title"><Link to="/">Download DOC</Link></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget widget_banner background-image" style={{ backgroundImage: `url(${widget_banner})` }}>
                                    <div className="widget-banner position-relative text-center">
                                        <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                        <span className="text">Need Help? Call Here</span>
                                        <a className="phone" href="tel:+25669872564">+256 6987 2564</a>
                                        <Link to="/contact" className="th-btn style6">Get A Quote <i className="fa-light fa-arrow-right-long"></i></Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
            <Scrollbar />
        </Fragment>
    );
};

export default CasedetailsPage;