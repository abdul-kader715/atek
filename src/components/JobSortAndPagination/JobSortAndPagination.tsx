import { useState, type ChangeEvent, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import CareerData from '../../api/career';

interface CareerItem {
  date: string;
  img: string;
  companyName: string;
  jobTitle: string;
  location: string;
  prise: string;  
  slug: string;
}

const JobSortAndPagination: React.FC = () => {
  const [perPage, setPerPage] = useState<number>(9);
  const [sortOrder, setSortOrder] = useState<string>('menu_order');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalJobs = CareerData.length;
  const totalPages = Math.ceil(totalJobs / perPage);

  const handlePerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const ClickHandler = (e: MouseEvent) => {
    window.scrollTo(10, 0);
  };

  // You might want to sort CareerData here based on sortOrder before slicing
  // For now, we assume CareerData is already sorted or sorting not implemented.

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentJobs: CareerItem[] = CareerData.slice(startIndex, endIndex);

  return (
    <div className="space">
      <div className="container">
        <div className="th-sort-bar">
          <div className="row justify-between items-center">
            <div className="col-lg">
              <p className="woocommerce-result-count">{totalJobs} jobs recommended for you</p>
            </div>
            <div className="col-lg-auto">
              <div className="woocommerce-wrapper d-flex align-items-center gap-3">
                <form className="woocommerce-ordering" onSubmit={(e) => e.preventDefault()}>
                  <select
                    name="perPage"
                    className="orderby"
                    aria-label="Per Page"
                    value={perPage}
                    onChange={handlePerPageChange}
                  >
                    <option value={3}>3 per page</option>
                    <option value={6}>6 per page</option>
                    <option value={9}>9 per page</option>
                    <option value={12}>12 per page</option>
                  </select>
                </form>
                <form className="woocommerce-ordering" onSubmit={(e) => e.preventDefault()}>
                  <select
                    name="sortOrder"
                    className="orderby"
                    aria-label="Sort Order"
                    value={sortOrder}
                    onChange={handleSortChange}
                  >
                    <option value="menu_order">Sort by (Default)</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">Sort by price: high to low</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          {currentJobs.map((item, idx) => (
            <div className="col-lg-6 col-xxl-4" key={idx}>
              <div className="job-post white-bg">
                <div className="job-content smoke-bg">
                  <div className="job-post_date d-flex align-items-center justify-content-between">
                    <span className="date">{item.date}</span>
                    <div className="icon">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  </div>
                  <div className="job-post_author d-sm-flex align-items-center text-center text-sm-start">
                    <div className="job-author">
                      <img src={item.img} alt="Company Logo" />
                    </div>
                    <div className="author-info">
                      <span className="company-name">{item.companyName}</span>
                      <span className="job-title">{item.jobTitle}</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot"></i>
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="job-category">
                    <a href="#">Full-time</a>
                    <a href="#">Remote</a>
                    <a href="#">Ui/Ux</a>
                    <a href="#">Senior</a>
                  </div>
                </div>
                <div className="job-wrapper d-sm-flex align-items-center justify-content-between text-center text-sm-start">
                  <span className="price">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2"></i>
                    {item.prise}
                  </span>
                  <Link onClick={ClickHandler} to={`/career-details/${item.slug}`}>
                    <span className="th-btn style3">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="th-pagination mt-60 text-center mb-0">
          <ul className="pagination">
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <li key={pageNum}>
                  <span
                    className={pageNum === currentPage ? 'active' : ''}
                    onClick={() => handlePageClick(pageNum)}
                  >
                    {pageNum}
                  </span>
                </li>
              );
            })}
            {currentPage < totalPages && (
              <li>
                <span className="next-page" onClick={() => handlePageClick(currentPage + 1)}>
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

export default JobSortAndPagination;
