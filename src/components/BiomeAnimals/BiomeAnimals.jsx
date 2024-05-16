import React from "react";
import "./BiomeAnimals.css"

function BiomeAnimals({ data }) {
  return (
    <div>
      <div className="animals">
        <h3>CREATURES:</h3>
        <div className="card_container">
        {data.arrayAnimals.map((animal, index) => (
          <div className="card_plants">
          <img key={index} src={animal} alt="Animal" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default BiomeAnimals;
