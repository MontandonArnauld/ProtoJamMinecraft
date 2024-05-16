import { useParams, Link } from "react-router-dom";
import { useMain } from "../contexts/MainContext";

function Biome() {

    const { id } = useParams();

    const { playSound } = useMain();

    return (
        <>
            BIOME {id}
            <Link to="/">
        <div className="btn_small" onClick={playSound}>
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
        </>
    )
}

export default Biome;