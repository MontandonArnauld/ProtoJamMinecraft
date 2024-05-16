import React from "react";

function BiomePlants({ data }) {
  return (
    <div>
      {/* Affichage des images de arrayPlants */}
      <div>
        <h3>PLANTES:</h3>
        {data.arrayPlants.map((plant, index) => (
          <img key={index} src={plant} alt="Plant" />
        ))}
      </div>
    </div>
  );
}

export default BiomePlants;
