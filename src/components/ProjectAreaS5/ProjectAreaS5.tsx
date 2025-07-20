import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../api/project';

const ITEMS_PER_PAGE = 9;

interface ProjectItem {
  pimg: string;
  slug: string;
  title: string;
}

const ProjectAreaS5: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);

  const paginatedData: ProjectItem[] = projectData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="overflow-hidden space" id="case-study-sec">
      <div className="container">
        <div className="row gy-4">
          {paginatedData.map((item, idx) => (
            <div className="col-xl-4 col-md-6" key={idx}>
              <div className="case-box style2 position-relative">
                <div className="case-img global-img">
                  <img src={item.pimg} alt="case" />
                  <Link to={`/project-details/${item.slug}`} className="icon-btn">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="case-content">
                  <div className="media-left">
                    <h4 className="box-title">
                      <Link to={`/project-details/${item.slug}`}>{item.title}</Link>
                    </h4>
                    <span className="case-subtitle">{item.title}</span>
                  </div>
                </div>
                <div className="case-action">
                  <Link to="/project-grid" className="case-btn">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="th-pagination mt-60 mb-0 text-center">
          <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <li key={pageNum}>
                  <span
                    className={pageNum === currentPage ? 'active' : ''}
                    onClick={() => handlePageClick(pageNum)}
                    style={{ cursor: 'pointer' }}
                  >
                    {pageNum}
                  </span>
                </li>
              );
            })}
            {currentPage < totalPages && (
              <li>
                <span
                  className="next-page"
                  onClick={() => handlePageClick(currentPage + 1)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fa-sharp fa-light fa-arrow-right"></i>
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectAreaS5;
