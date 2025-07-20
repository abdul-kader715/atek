import { type FC } from 'react';
import CountUp from 'react-countup';
import Shape from '../../img/shape/shape_5.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

// Define props type
interface CounterAreaProps {
   className?: string;
}

const CounterArea: FC<CounterAreaProps> = ({ className }) => {
   return (
      <div className={className}>
         <div className="container">
            <div className="counter-wrap1">
               <div className="row">

                  <div className="col-md-6 col-xl-3 counter-card-wrap">
                     <div className="counter-card">
                        <div className="counter-shape"><span></span></div>
                        <div className="media-body">
                           <h3 className="box-number">
                              <span className="counter-number"><CountUp end={12} /></span>
                           </h3>
                           <h6 className="counter-title">Years Experience</h6>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-3 counter-card-wrap">
                     <div className="counter-card">
                        <div className="counter-shape"><span></span></div>
                        <div className="media-body">
                           <h3 className="box-number">
                              <span className="counter-number"><CountUp end={97} /></span>%
                           </h3>
                           <h6 className="counter-title">Retention Rate</h6>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-3 counter-card-wrap">
                     <div className="counter-card">
                        <div className="counter-shape"><span></span></div>
                        <div className="media-body">
                           <h3 className="box-number">
                              <span className="counter-number"><CountUp end={8} /></span>k
                           </h3>
                           <h6 className="counter-title">Project Completed</h6>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-3 counter-card-wrap">
                     <div className="counter-card">
                        <div className="counter-shape"><span></span></div>
                        <div className="media-body">
                           <h3 className="box-number">
                              <span className="counter-number"><CountUp end={19} /></span>k
                           </h3>
                           <h6 className="counter-title">Happy Clients</h6>
                        </div>
                     </div>
                  </div>

               </div>

               <ShapeMockup
                  className="shape-mockup jump d-none d-xl-block"
                  bottom="0%"
                  left="-12%"
               >
                  <img src={Shape} alt="Decorative shape" />
               </ShapeMockup>
            </div>
         </div>
      </div>
   );
};

export default CounterArea;
