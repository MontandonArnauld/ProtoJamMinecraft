import React from "react";

function BiomeAnimals({ data }) {
  return (
    <div>
      {" "}
      <div>
        <h3>CREATURES:</h3>
        {data.arrayAnimals.map((animal, index) => (
          <img key={index} src={animal} alt="Animal" />
        ))}
      </div>
    </div>
  );
}

export default BiomeAnimals;
