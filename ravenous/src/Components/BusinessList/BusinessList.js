import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

const BusinessList = (props) => {
  const { businessArray } = props;
  return (
    <div className="BusinessList">
      {businessArray.map((element) => {
        return <Business business={element} />;
      })}
    </div>
  );
};

export default BusinessList;
