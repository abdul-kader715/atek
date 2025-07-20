import { type FC } from "react";

const ContactInfoArea: FC = () => {
   return (
      <div className="contact-info-area space-top">
         <div className="container">
            <div className="contact-info-wrapp">
               <div className="team-contact-title">
                  <h3 className="box-title">Contact Info:</h3>
               </div>
               <div className="contact-info">
                  <div className="team-contact">
                     <div className="icon-btn">
                        <i className="fas fa-location-dot"></i>
                     </div>
                     <div className="media-body">
                        <h5 className="box-title">Our Address</h5>
                        <p className="box-text">
                           2690 Hiltona Street Victoria Road, New York, Canada
                        </p>
                     </div>
                  </div>
                  <div className="team-contact">
                     <div className="icon-btn">
                        <i className="fas fa-phone"></i>
                     </div>
                     <div className="media-body">
                        <h5 className="box-title">Phone Number</h5>
                        <p className="box-text">
                           <a href="tel:+01234567890">+01 234 567 890</a>
                           <br />
                           <a href="tel:+09876543210">+09 876 543 210</a>
                        </p>
                     </div>
                  </div>
                  <div className="team-contact">
                     <div className="icon-btn">
                        <i className="fas fa-envelope"></i>
                     </div>
                     <div className="media-body">
                        <h5 className="box-title">Email Address</h5>
                        <p className="box-text">
                           <a href="mailto:support24@Rotal.com">support24@Rotal.com</a>
                           <br />
                           <a href="mailto:contact@Rotal.com">contact@Rotal.com</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactInfoArea;
