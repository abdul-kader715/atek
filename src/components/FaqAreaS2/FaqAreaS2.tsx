import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import chatIcon from '../../img/icon/chat.svg';
import userIcon from '../../img/icon/user.svg';

interface AccordionItem {
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  message: string;
}

const accordionData: AccordionItem[] = [
  {
    question: 'How can IT solutions benefit my business?',
    answer:
      'In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured.',
  },
  {
    question: 'How do I know which IT solution is right for my business?',
    answer:
      'In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured.',
  },
  {
    question: 'What is your approach to risk management?',
    answer:
      'In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured.',
  },
  {
    question: 'What is IT Managed Services, and how does it work?',
    answer:
      'In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured.',
  },
  {
    question: 'How do you ensure data security in IT solutions?',
    answer:
      'In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured.',
  },
  {
    question: 'Can you integrate IT solutions with my existing systems?',
    answer:
      'In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured.',
  },
  {
    question: 'How do you optimize IT infrastructure for scalability?',
    answer:
      'In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured.',
  },
];

const FaqAreaS2: FC= () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setStatus('Thank you! Your question has been submitted.');
      setFormData({ name: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="position-relative space overflow-hidden" id="faq-sec">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-4 col-lg-4">
            <div className="title-area mb-30">
              <span className="sub-title">Need Any Help?</span>
              <h2 className="sec-title">Frequently Asked Question</h2>
            </div>
            <p className="sec-text">
              If you have an issue or question that requires immediate assistance, you can click the button
              below to chat live with a Customer Service representative.
            </p>
            <p className="sec-text">
              Please allow 06 – 12 business days from the time your package arrives back to us for a refund to be issued.
            </p>

            <div className="faq4-form mt-30">
              <form className="contact-form ajax-contact" onSubmit={handleSubmit}>
                <h3 className="sec-title mb-25">Have any Question</h3>
                <div className="row">
                  <div className="col-12 form-group position-relative">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <img src={userIcon} alt="User Icon" className="form-icon" />
                  </div>
                  <div className="form-group col-12 position-relative">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <img src={chatIcon} alt="Chat Icon" className="form-icon" />
                  </div>
                  <div className="form-btn col-12">
                    <button type="submit" className="th-btn style3">
                      Ask Question Now
                    </button>
                  </div>
                </div>
                {status && <p className="form-messages mb-0 mt-3">{status}</p>}
              </form>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8">
            <div className="ps-xl-5 ms-xl-4">
              <div className="accordion" id="faqAccordion">
                {accordionData.map((item, idx) => (
                  <div className="accordion-card style4" key={idx}>
                    <div className="accordion-header" id={`collapse-item-${idx + 1}`}>
                      <button
                        className={`accordion-button ${idx === 0 ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${idx + 1}`}
                        aria-expanded={idx === 0}
                        aria-controls={`collapse-${idx + 1}`}
                      >
                        {item.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${idx + 1}`}
                      className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                      aria-labelledby={`collapse-item-${idx + 1}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAreaS2;
