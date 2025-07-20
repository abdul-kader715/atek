import { type FC } from 'react';
import CountUp from 'react-countup';
import shape from '../../img/shape/shape_5.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

interface CounterAreaS3Props {
   className?: string;
}

const CounterAreaS3: FC<CounterAreaS3Props> = ({ className }) => {
   return (
      <div className={className}>
         <div className="container">
            <div className="row gy-4 align-items-center justify-content-center">

               <div className="col-md-6 col-xl-3">
                  <div className="counter-card style3">
                     <div className="counter-shape"><span></span></div>
                     <div className="media-body">
                        <h3 className="box-number">
                           <span className="counter-number">
                              <CountUp end={12} />
                           </span>
                        </h3>
                        <h6 className="counter-title">Years Experience</h6>
                     </div>
                  </div>
               </div>

               <div className="col-md-6 col-xl-3">
                  <div className="counter-card style3">
                     <div className="counter-shape"><span></span></div>
                     <div className="media-body">
                        <h3 className="box-number">
                           <span className="counter-number">
                              <CountUp end={98} />
                           </span>%
                        </h3>
                        <h6 className="counter-title">Retention Rate</h6>
                     </div>
                  </div>
               </div>

               <div className="col-md-6 col-xl-3">
                  <div className="counter-card style3">
                     <div className="counter-shape"><span></span></div>
                     <div className="media-body">
                        <h3 className="box-number">
                           <span className="counter-number">
                              <CountUp end={8} />
                           </span>k
                        </h3>
                        <h6 className="counter-title">Project Completed</h6>
                     </div>
                  </div>
               </div>

               <div className="col-md-6 col-xl-3">
                  <div className="counter-card style3">
                     <div className="counter-shape"><span></span></div>
                     <div className="media-body">
                        <h3 className="box-number">
                           <span className="counter-number">
                              <CountUp end={19} />
                           </span>k
                        </h3>
                        <h6 className="counter-title">Happy Clients</h6>
                     </div>
                  </div>
               </div>

            </div>
         </div>

         <ShapeMockup className="shape-mockup jump d-none d-xl-block" bottom="20%" left="5%">
            <img src={shape} alt="Decorative shape" />
         </ShapeMockup>
      </div>
   );
};

export default CounterAreaS3;
