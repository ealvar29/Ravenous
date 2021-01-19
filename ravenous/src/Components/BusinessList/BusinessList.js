import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businessArray.map((element) => {
          return <Business business={element} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
