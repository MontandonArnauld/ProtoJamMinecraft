import React from 'react';
import jsonData from "../data.json";

function Biome() {
    // Accéder à la première entrée du tableau de données
    const data = jsonData[3];
    
    return (
        <div>
            <h2><img src={data.title}/></h2>
            <p>Avatar Name: {data.avatarName}</p>
            <p>Avatar Text: {data.avatarText}</p>
            <p>House Description: {data.houseDescription}</p>
            <p>Array of Images: {data.arrayImg.join(', ')}</p>
            
            {/* Affichage des images de arrayPlants */}
            <div>
                <h3>Plants:</h3>
                {data.arrayPlants.map((plant, index) => (
                    <img key={index} src={plant} alt="Plant" />
                ))}
            </div>
            
            {/* Affichage des images de arrayAnimals */}
            <div>
                <h3>Animals:</h3>
                {data.arrayAnimals.map((animal, index) => (
                    <img key={index} src={animal} alt="Animal" />
                ))}
            </div>
            
            <p>Array of Text: {data.arrayText.join(', ')}</p>
            <iframe className=''  
                src={data.videoSrc} 
                title={data.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Biome;
