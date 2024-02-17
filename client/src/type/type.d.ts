// database objects

export type RestaurantContext = {
    restaurants: Restaurant;
    reviews: ReviewType[];
}

export type Restaurant = {
    id:number;
    count:number;
    name: string;
    location: string;
    price_range: number;
    average_rating:number;
    reviews: ReviewType[];
};

export type ReviewType = {
    id:number;
    restaurant_id:number;
    name:string;
    review: string;
    rating: number;
};

// contexts
export type RestaurantsContextType = {
    restaurants: Restaurant[];
    setRestaurants: (restaurants: Restaurant[]) => void;
    addRestaurants: (restaurants: Restaurant) => void;
    selectedRestaurant: Restaurant | null;
    setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>;
};


// props
export type ReviewProps = {
    reviews: ReviewType[];
};

export type StarRatingProps = {
    rating: number;
};

export type AddReviewProps = {
    onReviewAdded: ()=>void;
};