import { useRef, useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import arrow from '../../img/icon/arrow-dwon.svg';
import call from '../../img/icon/call.svg';
import chat from '../../img/icon/chat.svg';
import mail from '../../img/icon/mail.svg';
import plane from '../../img/icon/plane3.svg';
import user from '../../img/icon/user.svg';

interface ContactFormProps {
  subClass?: string;
  btnClass?: string;
  btn1?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: FC<ContactFormProps> = ({ subClass, btnClass, btn1 }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [, setForceUpdate] = useState(false);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: {
        forceUpdate: () => setForceUpdate((prev) => !prev),
      },
    })
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
    }
  };

  return (
    <div className={`${subClass}`}>
      <form onSubmit={handleSubmit}>
        <div className="contact-form2">
          <div className="row">
            <div className="form-group col-12">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
              />
              <img src={user} alt="" />
              {validator.current.message('name', formData.name, 'required|alpha_space')}
            </div>
            <div className="form-group col-12">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Mail"
                value={formData.email}
                onChange={handleChange}
              />
              <img src={mail} alt="" />
              {validator.current.message('email', formData.email, 'required|email')}
            </div>
            <div className="form-group col-12">
              <select
                name="subject"
                id="subject"
                className="form-select nice-select"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled>Select Subject</option>
                <option value="Django Development">Django Development</option>
                <option value="JavaScript Development">JavaScript Development</option>
                <option value="Uixi Design">Uixi Design</option>
                <option value="App Development">App Development</option>
                <option value="Software Management">Software Management</option>
              </select>
              {validator.current.message('subject', formData.subject, 'required')}
              <img src={arrow} alt="" />
            </div>
            <div className="form-group col-12">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={3}
                className="form-control"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              <img src={chat} alt="" />
              {validator.current.message('message', formData.message, 'required|min:10')}
            </div>
          </div>
          <p className="form-messages mb-0 mt-3"></p>
        </div>

        <div className={`${btnClass}`}>
          <div className="form-btn">
            <button type="submit" className={`${btn1}`}>
              Send Message <img src={plane} alt="" />
            </button>
          </div>
          <div className="contact-info">
            <p className="contact-info_link">
              <a href="tel:+0123456789">+012 345 6789</a>
            </p>
            <div className="contact-info_icon">
              <a href="tel:+0123456789">
                <img src={call} alt="" />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
