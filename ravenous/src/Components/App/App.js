import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};
const businessArray = [];

for (let index = 0; index < 7; index++) {
  businessArray.push(business);
}

const App = () => {
  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };
  return (
    <div className="App">
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businessArray={businessArray} />
    </div>
  );
};

export default App;
