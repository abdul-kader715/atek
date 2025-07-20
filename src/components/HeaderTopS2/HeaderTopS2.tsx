import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderTopS2Props {
  className?: string;
}

const HeaderTopS2:FC<HeaderTopS2Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [currency, setCurrency] = useState<string>("USD");

  return (
    <div className={`${props.className || ''}`}>
      <div className="container th-container">
        <div className="row justify-content-center justify-content-xl-between align-items-center">
          <div className="col-auto d-none d-md-block">
            <div className="header-links">
              <ul>
                <li className="d-none d-xl-inline-block">
                  <i className="fa-sharp fa-regular  fa-location-dot"></i>
                  <span>45 New Eskaton Road, Austria</span>
                </li>
                <li className="d-none d-xl-inline-block">
                  <i className="fa-regular fa-clock"></i>
                  <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto">
            <div className="header-right">
              <div className="currency-menu">
                <i className="fa-light fa-circle-dollar"></i>
                <select
                  className="form-select nice-select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="CNY">CNY</option>
                  <option value="EUR">EUR</option>
                  <option value="AUD">AUD</option>
                </select>
              </div>

              <div className="header-links">
                <ul>
                  <li className="d-none d-md-inline-block">
                    <Link onClick={ClickHandler} to="/faq">FAQ</Link>
                  </li>
                  <li className="d-none d-md-inline-block">
                    <Link onClick={ClickHandler} to="/contact">Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopS2;
