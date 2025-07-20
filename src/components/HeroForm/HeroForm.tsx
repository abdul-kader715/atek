import { type ChangeEvent, type FC, type FormEvent, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import arrow from '../../img/icon/arrow-dwon.svg';
import chat from '../../img/icon/chat.svg';
import mail from '../../img/icon/mail.svg';
import user from '../../img/icon/user.svg';
import plane from '../../img/icon/plane2.svg';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const AppointmentForm: FC = () => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState<number>(0);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      validator.current.hideMessages();
      forceUpdate((n) => n + 1);
    } else {
      validator.current.showMessages();
      forceUpdate((n) => n + 1);
    }
  };

  return (
    <div className="hero-7-right z-index-common d-none d-xl-block">
      <form className="hero-form ajax-contact" onSubmit={handleSubmit}>
        <div className="hero-wrap">
          <div className="title-area mb-25 text-center">
            <h2 className="sec-title text-white">Make An Appointment</h2>
          </div>
          <div className="row gx-24 align-items-center justify-content-between">
            <div className="form-group col-12">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
              />
              {validator.current.message('name', formData.name, 'required|alpha')}
              <img src={user} alt="" />
            </div>
            <div className="form-group col-12">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Mail"
                value={formData.email}
                onChange={handleChange}
              />
              {validator.current.message('email', formData.email, 'required|email')}
              <img src={mail} alt="" />
            </div>
            <div className="form-group col-12">
              <select
                name="subject"
                className="form-select nice-select"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option value="Html Template">Html Template</option>
                <option value="Django Template">Django Template</option>
                <option value="UiXi Design">UiXi Design</option>
                <option value="App Development">App Development</option>
                <option value="Backend Development">Backend Development</option>
              </select>
              {validator.current.message('subject', formData.subject, 'required')}
              <img src={arrow} alt="" />
            </div>
            <div className="form-group col-12">
              <textarea
                name="message"
                cols={30}
                rows={3}
                className="form-control"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {validator.current.message('message', formData.message, 'required|min:10')}
              <img src={chat} alt="" />
            </div>
            <div className="btn-form">
              <button type="submit" className="th-btn btn-fw style1 th-radius">
                Submit Query <img src={plane} alt="" />
              </button>
            </div>
          </div>
          <p className="form-messages mb-0 mt-3"></p>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
