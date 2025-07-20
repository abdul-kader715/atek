import { type FC } from 'react';
import CountUp from 'react-countup';
import counter13 from '../../img/icon/counter13-icon.svg';

const CounterAreaS4: FC = () => {
   return (
      <div className="counter-area dark-bg">
         <div className="container z-index-common">
            <div className="counter-card-wrap box4 text-center d-md-flex align-items-center justify-content-between">

               <div className="counter-card style4 text-center d-md-flex align-items-center justify-content-center">
                  <div className="counter-content">
                     <h2 className="counter-card_number">
                        <span className="counter-number"><CountUp end={136} /></span>M
                     </h2>
                     <span className="counter-card_text">Total Accounts</span>
                  </div>
                  <div className="counter-icon">
                     <span className="counter-card_icon">
                        <img src={counter13} alt="Accounts icon" />
                     </span>
                  </div>
               </div>

               <div className="counter-card style4 text-center d-md-flex align-items-center justify-content-center">
                  <div className="counter-content">
                     <h2 className="counter-card_number">
                        <span className="counter-number"><CountUp end={24} /></span>
                     </h2>
                     <span className="counter-card_text">Years Experience</span>
                  </div>
                  <div className="counter-icon">
                     <span className="counter-card_icon">
                        <img src={counter13} alt="Experience icon" />
                     </span>
                  </div>
               </div>

               <div className="counter-card style4 text-center d-md-flex align-items-center justify-content-center">
                  <div className="counter-content">
                     <h2 className="counter-card_number">
                        <span className="counter-number"><CountUp end={28} /></span>K
                     </h2>
                     <span className="counter-card_text">Projects Completed</span>
                  </div>
                  <div className="counter-icon">
                     <span className="counter-card_icon">
                        <img src={counter13} alt="Projects icon" />
                     </span>
                  </div>
               </div>

               <div className="counter-card style4 text-center d-md-flex align-items-center justify-content-center">
                  <div className="counter-content">
                     <h2 className="counter-card_number">
                        <span className="counter-number"><CountUp end={100} /></span>%
                     </h2>
                     <span className="counter-card_text">Data Protection</span>
                  </div>
                  <div className="counter-icon">
                     <span className="counter-card_icon">
                        <img src={counter13} alt="Security icon" />
                     </span>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default CounterAreaS4;
