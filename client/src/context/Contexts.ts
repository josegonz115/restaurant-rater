import { createContext } from "react";
import { RestaurantsContextType } from "../type/type";


export const RestaurantsContext = createContext<RestaurantsContextType>({
    restaurants: [],
    setRestaurants: ()=>{},
    addRestaurants: ()=>{},
    selectedRestaurant: null,
    setSelectedRestaurant: ()=>{},
});