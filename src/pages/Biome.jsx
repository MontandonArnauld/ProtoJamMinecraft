import BiomePage from "../components/BiomePage/BiomePage"
import { useParams, Link } from "react-router-dom";
import { useMain } from "../contexts/MainContext";

import jsonData from "../data.json"

function Biome() {

    const { id } = useParams();
    
  const data = jsonData.filter(section => section.title === id);
       

    
   console.log(data)
   
        
    

    const { playSound } = useMain();

    return (
        <>
            <BiomePage data={data[0]}/>
            <Link to="/">
        <div className="btn_small biome_return" onClick={playSound}>
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
        </>
    )
}

export default Biome;