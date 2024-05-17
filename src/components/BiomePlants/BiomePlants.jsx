import React from "react";
import "./BiomePlants.css"
import Popup from "../Popup/Popup";
import biome from "../../biome.json";
import { useState } from "react";

function BiomePlants({ data }) {

  const [ indexSelect, setIndexSelect ] = useState(0)
  const [ finalIndex, setFinalIndex ] = useState("")
  const [ showPopup, setShowPopup ] = useState(false)

  const biomeSelect = biome.filter(section => section.section === data.title);

  const handleShowPopup = (index) => {
    setFinalIndex(`id${index}`)
    setIndexSelect(index)
    setShowPopup(true)
  } 

  return (
    <div>
      {showPopup && <Popup info={biomeSelect[0].arrayPlants[indexSelect][finalIndex]} toggle={() => setShowPopup(false)} />}
      <div className={`plantes ${data.title}`}>
        <h3>PLANTES:</h3>
        <div className="card_container">
        {data.arrayPlants.map((plant, index) => (
          <div key={index} className="card_plants" onClick={() => handleShowPopup(index)}>
          <img src={plant} alt="Plant" />
          </div>
          
        ))}
        </div>
      </div>
    </div>
  );
}

export default BiomePlants;
