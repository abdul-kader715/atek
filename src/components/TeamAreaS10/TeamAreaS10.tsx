import { Link } from 'react-router-dom';
import TeamData from '../../api/team';
import type { FC } from 'react';

interface TeamMember {
  image: string;
  name: string;
  designation: string;
  slug: string;
}

interface TeamAreaProps {
  className?: string;
}

const TeamArea: FC<TeamAreaProps> = ({ className }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`team-area space-top ${className ?? ''}`}>
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">Our Team Members</span>
          <h2 className="sec-title">Meet Our Expert Members</h2>
        </div>
        <div className="team-inner team-slider-1">
          <div className="row gy-30 justify-content-center">
            {TeamData.slice(0, 8).map((member: TeamMember, index: number) => (
              <div className="col-xl-3 col-md-6" key={index}>
                <div className="th-team team-box team-inner-box">
                  <div className="team-img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-content">
                    <div className="media-body">
                      <h3 className="box-title">
                        <Link
                          onClick={ClickHandler}
                          to={`/team-guider-details/${member.slug}`}
                        >
                          {member.name}
                        </Link>
                      </h3>
                      <span className="team-desig">{member.designation}</span>
                      <div className="th-social">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://facebook.com/"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://linkedin.com/"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://youtube.com/"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://instagram.com/"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
