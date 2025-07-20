import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Careerdetails from '../../api/career';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import recent1 from '../../img/blog/recent-post-3-1.jpg';
import recent2 from '../../img/blog/recent-post-3-2.jpg';
import recent3 from '../../img/blog/recent-post-3-3.jpg';
import recent4 from '../../img/blog/recent-post-3-4.jpg';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface CareerItem {
  slug: string;
  jobTitle: string;
  companyName: string;
  location: string;
  date: string;
  img: string;
  prise: string;
}

interface SimilarJobItem {
  id: string;
  title: string;
  type: string;
  posted: string;
  salary: string;
  location: string;
  image: string;
}

const CasedetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const CareerData: CareerItem | undefined = Careerdetails.find((item: CareerItem) => item.slug === slug);

  const similarJobs: SimilarJobItem[] = [
    {
      id: '1',
      title: 'Java Software Engineer',
      type: 'Full time',
      posted: '2 Days Ago',
      salary: '$500',
      location: 'United States',
      image: recent1
    },
    {
      id: '2',
      title: 'Frontend Developer',
      type: 'Full time',
      posted: '3 Days Ago',
      salary: '$700',
      location: 'United States',
      image: recent2
    },
    {
      id: '3',
      title: 'Product Manager',
      type: 'Full time',
      posted: '3 Days Ago',
      salary: '$900',
      location: 'United States',
      image: recent3
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      type: 'Full time',
      posted: '1 Days Ago',
      salary: '$400',
      location: 'United States',
      image: recent4
    }
  ];

  const responsibilities = [
    "Ability to approve design on Themeforest (at least 6 designs would be preferred).",
    "Curiosity and desire to learn and grow skills (This is a must).",
    "Specifically in Figma you have to know the design system",
    "Proficiency in pixel-perfect design production.",
    "Strong knowledge of typography, color, and other design principles.",
    "Ability to effectively communicate and persuade around design concepts.",
    "Good understanding of user experience, and customer/industrial psychology.",
    "Knowledge of industry standards and best practices for designing desktop and mobile applications.",
    "Experience in designing mock-ups and detail-oriented prototypes.",
    "Portfolio of design projects.",
    "Must have knowledge and experience in UI/UX design for themeforest based.",
    "Quick learner and smart enough to learn new things independently.",
    "Working under strict deadlines."
  ];

  const educationRequirements = [
    "This position is open for only UI/UX Designers.",
    "Bachelor of Fine Arts (B.F.A) in Graphics or any Bachelor's degree completed.",
    "For people who have at least 2 years, Educational qualifications may be compromised."
  ];

  const skillsExperience = [
    "You have at least 3 years' experience working as a Product Designer.",
    "You've been designing digital products for 5+ years.",
    "Up-to-date knowledge of design software like Adobe (Figma, XD, Illustrator, Photoshop) tools and, Design Typography, Visual Hierarchy and Color Plate."
  ];

  const benefits = [
    "We are a remote-first company.",
    "100% company-paid health insurance premiums for you & your dependents",
    "Vacation stipend",
    "Unlimited paid vacation and paid company holidays",
    "Monthly performance bonus.",
    "Weekly 5 days working (2 days holydays)",
    "Yearly 2 salary review"
  ];

  const jobDetails = [
    { label: "Experience:", value: "2 to 3 Years" },
    { label: "Working Hours:", value: "9.30 AM to 6.30PM (1h Break)" },
    { label: "Working Days:", value: "Weekly 5 days" },
    { label: "Vacancy:", value: "02" },
    { label: "Deadline:", value: "3rd June, 2025" }
  ];

  if (!CareerData) {
    return <div className="container py-5 text-center">Career details not found</div>;
  }

  return (
    <Fragment>
      <GsapAnimetion/>
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={CareerData.jobTitle} pagesub={'Career Details'} />
      
      <section className="space">
        <div className="container">
          <div className="job-post style2 mb-60 smoke-bg">
            <div className="job-content_wrapper">
              <div className="job-content d-sm-flex align-items-start justify-content-between text-center text-sm-start">
                <div className="job-post_author">
                  <span className="date"><span className="deadline">Deadline: </span> {CareerData.date}</span>
                  <div className="job-post_author-content d-sm-flex align-items-center">
                    <div className="job-author">
                      <img src={CareerData.img} alt={`${CareerData.companyName} logo`} className="img-fluid" />
                    </div>
                    <div className="author-info">
                      <span className="company-name">{CareerData.companyName}</span>
                      <span className="job-title">{CareerData.jobTitle}</span>
                      <span className="location">
                        <i className="fa-light fa-location-dot"></i>
                        {CareerData.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="job-post_date text-center text-sm-end">
                  <div className="job-post-action d-sm-flex align-items-center mb-20">
                    <span className="icon">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    <Link to="/contact" className="th-btn style2 th-radius ms-sm-4">Apply Now</Link>
                  </div>
                  <span className="price d-block">
                    <i className="fa-sharp fa-regular fa-circle-dollar me-2"></i>
                    {CareerData.prise}
                  </span>
                </div>
              </div>
              <div className="job-category_wrapper d-sm-flex align-items-center justify-content-between">
                <div className="job-category">
                  <Link to="#">Full-time</Link>
                  <Link to="#">Remote</Link>
                  <Link to="#">Ui/Ux</Link>
                  <Link to="#">Senior</Link>
                </div>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="job-single mb-0">
                <div className="job-description mb-45">
                  <h3 className="sec-title page-title mb-30">Job Description</h3>
                  <p className="mb-30">
                    I am looking Urgent based a Senior UI/UX Designer with 5+ years of experience. 
                    Candidate must have strong knowledge of a UI/UX designer to turn our platform 
                    into a user-friendly product for our users. The responsibilities will be 
                    collaborating with the team, gathering user requirements, creating design 
                    elements and building prototypes. And, Applicants should have good knowledge 
                    of Figma, XD, Illustrator, Photoshop tools for the job
                  </p>
                </div>
                
                <div className="job-responsibilities mb-45">
                  <h3 className="sec-title page-title mb-30">Responsibilities</h3>
                  <ul className="checklist">
                    {responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="job-education mb-45">
                  <h3 className="sec-title page-title mb-30">Educational Requirements</h3>
                  <ul className="checklist">
                    {educationRequirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="job-skill mb-45">
                  <h3 className="sec-title page-title mb-30">Skill & Experience</h3>
                  <ul className="checklist">
                    {skillsExperience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="job-benefits mb-60">
                  <h3 className="sec-title page-title mb-30">Benefits</h3>
                  <ul className="checklist">
                    {benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="career-btn text-center text-sm-start">
                  <Link to="/contact" className="th-btn">Apply This Position</Link>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_info mb-30">
                  <div className="job-sidebar">
                    <ul>
                      {jobDetails.map((item, index) => (
                        <li key={index} className="d-flex justify-content-between py-3">
                          <strong>{item.label}</strong>
                          <span>{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="widget">
                  <h3 className="widget_title mb-4">Similar jobs</h3>
                  <div className="recent-post-wrap">
                    {similarJobs.map((job) => (
                      <div key={job.id} className="recent-post style3 mb-4">
                        <div className="media-img">
                          <Link to={`/career-details/${job.id}`}>
                            <img 
                              src={job.image} 
                              alt={`${job.title} position`} 
                              className="img-fluid rounded"
                              width={100}
                              height={100}
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <Link className="text-inherit" to={`/career-details/${job.id}`}>
                              {job.title}
                            </Link>
                          </h4>
                          <div className="recent-post-meta">
                            <Link to="#" className="me-3">
                              <i className="fa-light fa-briefcase me-1"></i>
                              {job.type}
                            </Link>
                            <Link to="#">
                              <i className="fa-light fa-clock me-1"></i>
                              {job.posted}
                            </Link>
                          </div>
                          <div className="recent-post-meta mt-2">
                            <span className="text-dark fw-medium me-2">
                              <i className="fa-light fa-dollar-sign me-1"></i>
                              {job.salary}
                            </span>
                            <span>
                              <i className="fa-light fa-location-dot me-1"></i>
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
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