import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/Contexts";
import RestaurantFinder from "../apis/RestaurantFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import { Restaurant } from "../type/type";

const RestaurantDetailPage = () => {
  const { id } = useParams<{ id:string }>();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get(`/${id}`);
      setSelectedRestaurant(response.data.data);
      setRestaurant(response.data.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onReviewAdded = () => {
    fetchData();
  };

  return (
    <div>
      {selectedRestaurant && restaurant && (
        <>
          <h1 className="text-center display-1">
            {restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={restaurant.average_rating} />
            <span className="text-warning ml-1">
              {restaurant.count
                ? `(${restaurant.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview onReviewAdded={onReviewAdded}/>
        </>
      )}
    </div>
  );
};



export default RestaurantDetailPage;
