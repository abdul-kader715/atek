import { type FC } from 'react';
import CaseSlider from '../CaseSlider/CaseSlider';

interface CaseAreaProps {
  className?: string;
}

const CaseArea: FC<CaseAreaProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="title-area case-title-box">
              <span className="sub-title mb-15 text-anime-style-2">Case Studies</span>
              <h2 className="sec-title text-anime-style-3">Transforming Ideas into Innovations</h2>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="nav nav-tabs case-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link th-btn active"
                id="nav-step1-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step1"
                type="button"
                role="tab"
                aria-controls="nav-step1"
                aria-selected="true"
              >
                Development
              </button>
              <button
                className="nav-link th-btn"
                id="nav-step2-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step2"
                type="button"
                role="tab"
                aria-controls="nav-step2"
                aria-selected="false"
              >
                Woo Commerce
              </button>
              <button
                className="nav-link th-btn"
                id="nav-step3-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step3"
                type="button"
                role="tab"
                aria-controls="nav-step3"
                aria-selected="false"
              >
                CRM Solutions
              </button>
              <button
                className="nav-link th-btn"
                id="nav-step4-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step4"
                type="button"
                role="tab"
                aria-controls="nav-step4"
                aria-selected="false"
              >
                Web Design
              </button>
              <button
                className="nav-link th-btn"
                id="nav-step5-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step5"
                type="button"
                role="tab"
                aria-controls="nav-step5"
                aria-selected="false"
              >
                IT Support
              </button>
            </div>
          </div>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade active show"
            id="nav-step1"
            role="tabpanel"
            aria-labelledby="nav-step1-tab"
          >
            <CaseSlider />
          </div>
          <div
            className="tab-pane fade"
            id="nav-step2"
            role="tabpanel"
            aria-labelledby="nav-step2-tab"
          >
            <div className="slider-area case-slider slider-drag-wrap">
              <CaseSlider />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-step3"
            role="tabpanel"
            aria-labelledby="nav-step3-tab"
          >
            <div className="slider-area case-slider slider-drag-wrap">
              <CaseSlider />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-step4"
            role="tabpanel"
            aria-labelledby="nav-step4-tab"
          >
            <CaseSlider />
          </div>
          <div
            className="tab-pane fade"
            id="nav-step5"
            role="tabpanel"
            aria-labelledby="nav-step5-tab"
          >
            <CaseSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseArea;
