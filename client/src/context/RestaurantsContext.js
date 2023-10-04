import { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // const addRestaurants = (restaurant) => {
  //   setRestaurants([...restaurants, restaurant]);
  // };

  const addRestaurants = (restaurant) => {
    if (!restaurant || typeof restaurant !== "object") {
      console.error("Invalid restaurant:", restaurant);
      return;
    }
    if(restaurants === 0){
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
      {props.children}
    </RestaurantsContext.Provider>
  );
};
