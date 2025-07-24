import { type FC } from 'react';
import CountUp from 'react-countup';
import line from '../../img/bg/line-pattern.webp';

// Define props type
interface CounterAreaS2Props {
   className?: string;
}

const CounterAreaS2: FC<CounterAreaS2Props> = ({ className }) => {
   return (
      <div className={className}>
         <div className="container">
            <div
               className="counter-card-wrap style3"
               style={{ backgroundImage: `url(${line})` }}
            >
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number">
                        <span className="counter-number">
                           <CountUp end={20} />
                        </span>
                        +
                     </h2>
                     <p className="box-text">Years of Experience</p>
                  </div>
               </div>

               <div className="divider"></div>

               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number">
                        <span className="counter-number">
                           <CountUp end={50} />
                        </span>
                        +
                     </h2>
                     <p className="box-text">Team Members</p>
                  </div>
               </div>

               <div className="divider"></div>

               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number">
                        <span className="counter-number">
                           <CountUp end={50} />
                        </span>
                        k+
                     </h2>
                     <p className="box-text">Guests Serve</p>
                  </div>
               </div>

               <div className="divider"></div>

               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number">
                        <span className="counter-number">
                           <CountUp end={98} />
                        </span>
                        %
                     </h2>
                     <p className="box-text">Annual Client Retention</p>
                  </div>
               </div>

               <div className="divider"></div>
            </div>
         </div>
      </div>
   );
};

export default CounterAreaS2;
