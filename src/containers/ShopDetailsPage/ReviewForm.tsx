import { useRef, useState, type SyntheticEvent } from "react";
import SimpleReactValidator from "simple-react-validator";
import StarRating from "./StarRating";

interface FormData {
  name: string;
  email: string;
  message: string;
  rating: number;
  saveInfo: boolean;
}

const ReviewForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    rating: 0,
    saveInfo: false,
  });

  const [, forceUpdate] = useState<{}>();
  const validator = useRef(
    new SimpleReactValidator({ 
      autoForceUpdate: { 
        forceUpdate: () => forceUpdate({}) 
      } 
    })
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (validator.current.allValid() && formData.rating !== 0) {
      // Form submission logic would go here
      setFormData({
        name: "",
        email: "",
        message: "",
        rating: 0,
        saveInfo: false,
      });
      validator.current.hideMessages();
      forceUpdate({});
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="th-comment-form">
      <div className="form-title">
        <h3 className="blog-inner-title">Add a review</h3>
      </div>
      <div className="row">
        <div className="col-12 form-group">
          <StarRating rating={formData.rating} onRatingChange={handleRatingChange} />
          {formData.rating === 0 && <div className="text-danger">Rating is required</div>}
        </div>
        <div className="col-12 form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Write a Message"
            value={formData.message}
            onChange={handleChange}
          />
          {validator.current.message("message", formData.message, "required|min:10")}
          <i className="text-title far fa-pencil-alt"></i>
        </div>
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {validator.current.message("name", formData.name, "required|alpha_space")}
          <i className="text-title far fa-user"></i>
        </div>
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {validator.current.message("email", formData.email, "required|email")}
          <i className="text-title far fa-envelope"></i>
        </div>
        <div className="col-12 form-group">
          <input
            type="checkbox"
            name="saveInfo"
            id="reviewcheck"
            checked={formData.saveInfo}
            onChange={handleChange}
          />
          <label htmlFor="reviewcheck">
            Save my name, email, and website in this browser for the next time I comment.
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="col-12 form-group mb-0">
          <button type="submit" className="th-btn">
            Post Review
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;