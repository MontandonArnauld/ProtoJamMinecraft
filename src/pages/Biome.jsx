import { useParams, Link } from "react-router-dom";

function Biome() {

    const { id } = useParams();

    return (
        <>
            BIOME {id}
            <Link to="/">
        <div className="btn_small">
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
        </>
    )
}

export default Biome;