import React from "react";

function HouseDescription({ data }) {
  // Accéder à la première entrée du tableau de données

  return (
    <div className="house_container">
      <div className="house_main">
        <div className="house">
        <img className="house_img" src="../assets/images/chalet-projet.png" alt="" />
        </div>
        <div className="house_desc">
          <p>{data.houseDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default HouseDescription;
