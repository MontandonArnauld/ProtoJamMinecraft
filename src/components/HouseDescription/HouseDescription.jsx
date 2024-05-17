import React from "react";

function HouseDescription({ data }) {
  
  return (
    <div className={`house_container ${data.title}`}>
      <div className="house_main">
        <img className="house_img" src="../assets/images/chalet-projet.png" alt="" />
        <div className="house_desc">
          <p>{data.houseDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default HouseDescription;
