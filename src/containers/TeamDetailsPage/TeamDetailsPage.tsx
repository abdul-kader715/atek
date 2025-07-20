import { Fragment, type FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import teamData from '../../api/team';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import team_details from '../../img/team/team-details.jpg';
import BrandArea from '../../components/BrandArea/BrandArea';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface Team {
  slug: string;
  name: string;
  designation: string;
  // Add any other fields your teamData might have
}

const TeamDetailsPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const TeamDetails = teamData.find((item: Team) => item.slug === slug);
  
  if (!TeamDetails) {
    return (
      <Fragment>
        <HeaderArea className="th-header header-layout1" />
        <PageTitle pageTitle="Team Member Not Found" pagesub="Team Details" />
        <div className="container my-5">
          <p>Sorry, the team member you are looking for does not exist.</p>
          <Link to="/team" className="th-btn">Back to Team</Link>
        </div>
        <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
        <Scrollbar />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle={TeamDetails.name} pagesub="Team Details" />
      <section className="team-details-area space">
        <div className="container">
          <div className="team-details">
            <div className="row gy-5">
              <div className="col-xxl-5">
                <div className="th-team team-grid">
                  <div className="team-img m-auto text-center text-xxl-start">
                    <img src={team_details} alt={TeamDetails.name} />
                  </div>
                </div>
              </div>
              <div className="col-xxl-7">
                <div className="team-right ms-xxl-5 ps-xxl-3">
                  <div className="team-content mb-25 d-md-flex justify-content-between">
                    <div className="media-body">
                      <h3 className="box-title"><span>{TeamDetails.name}</span></h3>
                      <span className="team-desig">{TeamDetails.designation}</span>
                    </div>
                    <div className="th-social team-social">
                      <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/"><i className="fab fa-youtube"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                  <p className="team-dsc mb-30">
                    Sem consequat mauris conubia inceptos nostra rutrum morbi sagittis pulvinar, commodo curabitur maecenas fermentum magna tempus nisi ullamcorper, ante auctor magnis pretium eu lectus euismod platea.
                  </p>
                  <div className="team-infobox mb-40">
                    <div className="row gx-0">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="team-info-item d-sm-flex align-items-center text-center text-sm-start">
                          <span className="team-info-icon"><i className="fa-solid fa-user"></i></span>
                          <div className="team-info-content">
                            <span className="team-info-subtitle">Experience</span>
                            <h4 className="team-info-title">More Than 10 Years</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="team-info-item d-sm-flex align-items-center text-center text-sm-start">
                          <span className="team-info-icon"><i className="fa-solid fa-envelope"></i></span>
                          <div className="team-info-content">
                            <span className="team-info-subtitle">Email</span>
                            <h4 className="team-info-title">
                              <a href="mailto:anjelina5@gmail.com">anjelina5@gmail.com</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="team-info-item d-sm-flex align-items-center text-center text-sm-start">
                          <span className="team-info-icon"><i className="fa-solid fa-phone"></i></span>
                          <div className="team-info-content">
                            <span className="team-info-subtitle">Phone</span>
                            <h4 className="team-info-title">
                              <a href="tel:+2565862169581">+(256) 58621-69581</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="team-info-item d-sm-flex align-items-center text-center text-sm-start">
                          <span className="team-info-icon"><i className="fa-solid fa-fax"></i></span>
                          <div className="team-info-content">
                            <span className="team-info-subtitle">Fax</span>
                            <h4 className="team-info-title">
                              <a href="tel:+2568145632">+2568145632</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-btn">
                    <Link to="/contact" className="th-btn th-icon">
                      Get A Quote <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandArea className="brand-sec space-bottom" SecNote={true} />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default TeamDetailsPage;
