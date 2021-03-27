import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    const { businessArray } = this.props;
    return (
      <div className="BusinessList">
        {businessArray.map((element) => {
          return <Business business={element} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
