import React from "react";
import "./BiomeAnimals.css";
import Popup from "../Popup/Popup";
import biome from "../../biome.json";
import { useState } from "react";

function BiomeAnimals({ data }) {

  const [ indexSelect, setIndexSelect ] = useState(0)
  const [ finalIndex, setFinalIndex ] = useState("")
  const [ showPopup, setShowPopup ] = useState(false)

  const biomeSelect = biome.filter(section => section.section === data.title);
  console.log('biomeselect',biomeSelect[0].arrayAnimals)

  const handleShowPopup = (index) => {
    setFinalIndex(`id${index}`)
    setIndexSelect(index)
    console.log('ici', biomeSelect[0].arrayAnimals[indexSelect][finalIndex])
    setShowPopup(true)
  } 

  return (
    <div className={`animals_container ${data.title}`}>
      {showPopup && <Popup info={biomeSelect[0].arrayAnimals[indexSelect][finalIndex]} toggle={() => setShowPopup(false)} />}
      <div className="animals">
        <h3>CREATURES:</h3>
        <div className="card_container">
        {data.arrayAnimals.map((animal, index) => (
          <div key={index} className="card_plants" onClick={() => handleShowPopup(index)}>
          <img src={animal} alt="Animal" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default BiomeAnimals;
