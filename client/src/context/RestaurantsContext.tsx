import { useState } from "react";
import { Restaurant } from "../type/type";
import { RestaurantsContext } from './Contexts';

type RestaurantsContextProviderProps = {
  children: React.ReactNode;
};

export const RestaurantsContextProvider = ({children}: RestaurantsContextProviderProps) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const addRestaurants = (restaurant: Restaurant) => {
    if (!restaurant || typeof restaurant !== "object") {
      console.error("Invalid restaurant:", restaurant);
      return;
    }
    if(restaurants.length === 0){
      setRestaurants([restaurant])
    }
    else if (Array.isArray(restaurant)) {
      setRestaurants([...restaurants, ...restaurant]);
    } else {
      setRestaurants([...restaurants, restaurant]);
    }
  };
  
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
