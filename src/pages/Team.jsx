import { Link } from "react-router-dom";

function Team() {
    return (
        <>
        <div className="homepage_title">
        <img
        className="title-img"
          src="../assets/images/title.png"
          alt=""
        />
        <p className="title_label">ProtoJam 2024 !</p>
        </div>
            <h1>TEAM</h1>
            <Link to="/">
        <div className="btn_small">
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
        </>
    )
}

export default Team;
