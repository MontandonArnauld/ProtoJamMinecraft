import BiomePage from "../components/BiomePage/BiomePage"
import { useParams, Link } from "react-router-dom";
import jsonData from "../data.json"
function Biome() {

    const { id } = useParams();
    
  const data = jsonData.filter(section => section.title === id);
       

    
   console.log(data)
   
        
    

    return (
        <>
            <BiomePage data={data[0]}/>
            <Link to="/">
        <div className="btn_small biome_return">
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
        </>
    )
}

export default Biome;