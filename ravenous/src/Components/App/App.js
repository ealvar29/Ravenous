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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <BusinessList businessArray={businessArray} />
      </div>
    );
  }
}

export default App;
