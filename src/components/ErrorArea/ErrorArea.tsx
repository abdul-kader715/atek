import { type FC } from 'react';
import { Link } from 'react-router-dom';
import error from '../../img/theme-img/error.svg';
import setting from '../../img/icon/setting-2.svg';
import setting2 from '../../img/icon/setting-1.svg';

const ErrorArea: FC = () => {
   const handleClick = () => {
      window.scrollTo(10, 0);
   };

   return (
      <section className="space bg-smoke">
         <div className="container">
            <div className="row justify-content-center text-center">
               <div className="col-12">
                  <div className="error-img mb-40">
                     <img src={error} alt="Error 404 illustration" />
                     <span className="error-shape-2 spin d-none d-md-block">
                        <img src={setting} alt="Spinning gear decoration" />
                     </span>
                     <span className="error-shape-1 spin2 d-none d-md-block">
                        <img src={setting2} alt="Spinning gear decoration" />
                     </span>
                  </div>
                  <div className="error-content">
                     <h2 className="error-title">Opps, that page can’t be found</h2>
                     <p className="error-text">
                        It looks like nothing was found at this location. Maybe try one of the links below or a search?
                     </p>
                     <Link onClick={handleClick} to="/" className="th-btn">
                        <i className="fa-regular fa-house"></i> Back to Home
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ErrorArea;
