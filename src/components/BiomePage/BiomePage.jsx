import React from "react";
import BiomeAvatar from "../BiomeAvatar/BiomeAvatar";
import HouseDescription from "../HouseDescription/HouseDescription";
import HeaderBiomePage from "../HeaderBiomePage/HeaderBiomePage";
import dataHome from "../../data.json";

function BiomePage() {
  const data = dataHome[0];
  return (
    <>
      <div>
        <HeaderBiomePage data={data} />
        <BiomeAvatar data={data} />
        <HouseDescription data={data} />
      </div>
    </>
  );
}

export default BiomePage;
