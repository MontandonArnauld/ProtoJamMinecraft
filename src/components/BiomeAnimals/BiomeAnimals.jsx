import React from "react";
import "./BiomeAnimals.css";
import Popup from "../Popup/Popup";
import { useState } from "react";

function BiomeAnimals({ data }) {

  const [ indexSelect, setIndexSelect ] = useState(0)
  const [ finalIndex, setFinalIndex ] = useState("")
  const [ showPopup, setShowPopup ] = useState(false)

  const animalsArtique =   [
    {"id0": "0Les zombies sont des créatures simples : ils poursuivent le joueur et ne peuvent lui infliger des dégâts que en le touchant. Ils apparaissent souvent par groupes de 2 à 6 zombies. Ils n'apparaissent que dans les zones sombres (la nuit ou dans les cavernes) et ils brulent sous le soleil s'ils ne sont pas protégés par un casque. Les zombies peuvent parfois avoir des objets à la main : pelles, pomme de terre, carotte, etc... Ils peuvent aussi parfois ramasser des objets abandonnés au sol. Dans tous les cas, s'ils meurent ils dropperont l'objet qu'ils avaient à la main. Les zombies peuvent également avoir des bébés : ils sont très rare mais rédoutable : plus rapide que les joueurs il sera difficile de leur échapper. Les zombies poursuivent naturellement les villageois. S'ils en attrappent un, celui ci se transformera en zombie villageois. Lorsqu'un zombie est tué par un Creeper Electrifié, il drop une tête de zombie."},
    {"id1": "1Les zombies sont des créatures simples : ils poursuivent le joueur et ne peuvent lui infliger des dégâts que en le touchant. Ils apparaissent souvent par groupes de 2 à 6 zombies. Ils n'apparaissent que dans les zones sombres (la nuit ou dans les cavernes) et ils brulent sous le soleil s'ils ne sont pas protégés par un casque. Les zombies peuvent parfois avoir des objets à la main : pelles, pomme de terre, carotte, etc... Ils peuvent aussi parfois ramasser des objets abandonnés au sol. Dans tous les cas, s'ils meurent ils dropperont l'objet qu'ils avaient à la main. Les zombies peuvent également avoir des bébés : ils sont très rare mais rédoutable : plus rapide que les joueurs il sera difficile de leur échapper. Les zombies poursuivent naturellement les villageois. S'ils en attrappent un, celui ci se transformera en zombie villageois. Lorsqu'un zombie est tué par un Creeper Electrifié, il drop une tête de zombie."},
    {"id2": "2Les zombies sont des créatures simples : ils poursuivent le joueur et ne peuvent lui infliger des dégâts que en le touchant. Ils apparaissent souvent par groupes de 2 à 6 zombies. Ils n'apparaissent que dans les zones sombres (la nuit ou dans les cavernes) et ils brulent sous le soleil s'ils ne sont pas protégés par un casque. Les zombies peuvent parfois avoir des objets à la main : pelles, pomme de terre, carotte, etc... Ils peuvent aussi parfois ramasser des objets abandonnés au sol. Dans tous les cas, s'ils meurent ils dropperont l'objet qu'ils avaient à la main. Les zombies peuvent également avoir des bébés : ils sont très rare mais rédoutable : plus rapide que les joueurs il sera difficile de leur échapper. Les zombies poursuivent naturellement les villageois. S'ils en attrappent un, celui ci se transformera en zombie villageois. Lorsqu'un zombie est tué par un Creeper Electrifié, il drop une tête de zombie."}
  ]

  const handleShowPopup = (index) => {
    setFinalIndex(`id${index}`)
    setIndexSelect(index)
    setShowPopup(true)
  } 

  return (
    <div className="animals_container">
      {showPopup && <Popup info={animalsArtique[indexSelect][finalIndex]} toggle={() => setShowPopup(false)} />}
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
