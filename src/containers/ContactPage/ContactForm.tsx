import  { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import user from '../../img/icon/user.svg';
import mail from '../../img/icon/mail.svg';
import call from '../../img/icon/call.svg';
import chat from '../../img/icon/chat.svg';
import plane4 from '../../img/icon/plane4.svg';
import dwon from '../../img/icon/arrow-dwon.svg';

interface FormData {
    name: string;
    email: string;
    number: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
    });

    const [, setForceUpdate] = useState<number>(0);
    const validator = useRef(
        new SimpleReactValidator({
            autoForceUpdate: { forceUpdate: () => setForceUpdate(prev => prev + 1) }
        })
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validator.current.allValid()) {
            console.log(formData);
            setFormData({ name: '', email: '', number: '', subject: '', message: '' });
            validator.current.hideMessages();
        } else {
            validator.current.showMessages();
            setForceUpdate(prev => prev + 1);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="row">
                <div className="col-sm-6 form-group position-relative">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                    <img src={user} alt="User icon" />
                    {validator.current.message('name', formData.name, 'required|alpha_space')}
                </div>

                <div className="col-sm-6 form-group position-relative">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                    />
                    <img src={mail} alt="Email icon" />
                    {validator.current.message('email', formData.email, 'required|email')}
                </div>

                <div className="col-sm-6 form-group position-relative">
                    <input
                        type="text"
                        className="form-control"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                    <img src={call} alt="Phone icon" />
                    {validator.current.message('number', formData.number, 'required|numeric')}
                </div>

                <div className="col-sm-6 form-group position-relative">
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-select nice-select"
                    >
                        <option value="" disabled>Select Subject</option>
                        <option value="Django Development">Django Development</option>
                        <option value="JavaScript Development">JavaScript Development</option>
                        <option value="Uixi Design">Uixi Design</option>
                        <option value="App Development">App Development</option>
                        <option value="Software Management">Software Management</option>
                    </select>
                    {validator.current.message('subject', formData.subject, 'required')}
                    <img src={dwon} alt="Dropdown arrow" />
                </div>

                <div className="form-group col-12 position-relative">
                    <textarea
                        name="message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Your Message"
                    ></textarea>
                    <img src={chat} alt="Chat icon" />
                    {validator.current.message('message', formData.message, 'required')}
                </div>

                <div className="form-btn col-12">
                    <button type="submit" className="th-btn">
                        Subscribe Now <img src={plane4} alt="Submit icon" />
                    </button>
                </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
        </form>
    );
};

export default ContactForm;