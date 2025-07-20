import { type FC } from 'react';
import faqImage from '../../img/normal/faq_img2.png';
import faqCard from '../../img/normal/faq_card.png';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  open?: boolean;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What investment services do you offer?',
    answer:
      'Blockchain is set to disrupt traditional banking, payments, and investment models, leading to a more open and accessible financial system. As regulations and adoption increase, blockchain-based fintech solutions',
    open: true,
  },
  {
    id: 2,
    question: 'How do I get started with investing?',
    answer:
      'We help plan, book, and coordinate your travel arrangements, including flights, accommodations, tours, and activities, ensuring a hassle-free travel experience.',
  },
  {
    id: 3,
    question: 'What is your approach to risk management?',
    answer:
      'We help plan, book, and coordinate your travel arrangements, including flights, accommodations, tours, and activities, ensuring a hassle-free travel experience.',
  },
  {
    id: 4,
    question: 'What types of investments do you recommend?',
    answer:
      'We help plan, book, and coordinate your travel arrangements, including flights, accommodations, tours, and activities, ensuring a hassle-free travel experience.',
  },
];

const FAQSection: FC = () => {
  return (
    <div className="position-relative space-bottom light-bg overflow-hidden" id="faq-sec">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
            <div className="pe-xl-5">
              <div className="title-area mb-30">
                <span className="sub-title extra-sub text-anime-style-2">
                  Frequently Asked Question
                </span>
                <h2 className="sec-title text-white text-anime-style-3">
                  have a question <br /> look here
                </h2>
              </div>

              <div className="accordion" id="faqAccordion">
                {faqs.map(({ id, question, answer, open }) => (
                  <div className="accordion-card style3 dark-bg" key={id}>
                    <div className="accordion-header" id={`collapse-item-${id}`}>
                      <button
                        className={`accordion-button text-white ${open ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${id}`}
                        aria-expanded={open ? true : false}
                        aria-controls={`collapse-${id}`}
                      >
                        {question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${id}`}
                      className={`accordion-collapse collapse ${open ? 'show' : ''}`}
                      aria-labelledby={`collapse-item-${id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">{answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
            <div className="faq-img3">
              <div className="img1 position-relative">
                <img src={faqImage} alt="Frequently Asked Questions" />
                <img
                  src={faqCard}
                  alt="FAQ Card Illustration"
                  className="faq-card d-none d-sm-block position-absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
