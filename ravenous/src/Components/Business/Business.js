import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    const {
      imageSrc,
      name,
      address,
      city,
      state,
      category,
      reviewCount,
      rating,
    } = this.props.business;
    return (
      <div class="Business">
        <div class="image-container">
          <img src={imageSrc} alt="" />
        </div>
        <h2>{name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
          </div>
          <div class="Business-reviews">
            <h3>{category}</h3>
            <h3 className="rating">{rating}</h3>
            <p>{reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
