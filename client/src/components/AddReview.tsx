import  { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useParams} from "react-router-dom";
import { AddReviewProps } from "../type/type";

const AddReview:React.FC<AddReviewProps> = ({ onReviewAdded }) => {
  const { id } = useParams<{id: string}>();
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(rating === "Rating"){
      alert("Rating value must be set.");
    }
    try {
      // importing the api from the back to front end
      await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      onReviewAdded();
      setName('');
      setReviewText('');
      setRating("Rating");
    } catch (err) {}
  };
  return ( 
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
