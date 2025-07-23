import { type FC } from "react";
import { Link } from "react-router-dom";
import ProjectData from "../../api/project";

interface ProjectItem {
  slug: string;
  pimg: string;
  title: string;
  subtitle: string;
}

interface ProjectAreaS2Props {
  className?: string;
}

const ProjectAreaS2: FC<ProjectAreaS2Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={props.className} id="case-study-sec">
      <div className="container-fuild">
        <div className="title-area mb-30 text-center">
          <span className="sub-title text-anime-style-2">Project Case Studies</span>
          <h2 className="sec-title text-anime-style-2">Our Recent Project Case Studies</h2>
        </div>
        <div className="row gy-4 case-row4">
          {ProjectData.slice(5, 13).map((item: ProjectItem, index: number) => (
            <div className="col-auto" key={index}>
              <div className="case-box style2 position-relative">
                <div className="case-img global-img">
                  <img src={item.pimg} alt="case image" />
                  <Link
                    onClick={ClickHandler}
                    to={`/project-details/${item.slug}`}
                    className="icon-btn"
                  >
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="case-content">
                  <div className="media-left">
                    <h4 className="box-title">
                      <Link onClick={ClickHandler} to={`/project-details/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <span className="case-subtitle">{item.subtitle}</span>
                  </div>
                </div>
                <div className="case-action">
                  <Link onClick={ClickHandler} to="/project-grid" className="case-btn">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectAreaS2;
