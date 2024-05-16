import React from "react";

function HouseDescription({ data }) {
  // Accéder à la première entrée du tableau de données

  return (
    <div>
      <p>House Description: {data.houseDescription}</p>
    </div>
  );
}

export default HouseDescription;
