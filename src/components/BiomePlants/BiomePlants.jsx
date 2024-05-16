import React from "react";
import "./BiomePlants.css"

function BiomePlants({ data }) {
  return (
    <div>
      {/* Affichage des images de arrayPlants */}
      <div className="plantes">
        <h3>PLANTES:</h3>
        <div className="card_container">
        {data.arrayPlants.map((plant, index) => (
          <div className="card_plants">
          <img key={index} src={plant} alt="Plant" />
          </div>
          
        ))}
        </div>
      </div>
    </div>
  );
}

export default BiomePlants;
