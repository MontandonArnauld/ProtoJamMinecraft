import ReactSkinview3d from "react-skinview3d";
import { WalkingAnimation } from "skinview3d";
import { useMain } from "../contexts/MainContext";
import "./styles/Team.css";

function Team() {

  const { playSound } = useMain();

  return (
    <>
      <div className="homepage_title">
        <img className="title-img team_title" src="../assets/images/title.png" alt="" />
        <p className="title_label">ProtoJam 2024 !</p>
      </div>
      {/* <Link to="/">
        <div className="btn_small biome_return" onClick={playSound}>
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link> */}
      <div className="team_container">
      <h1>TEAM</h1>
        <div className="team_avatar">
          <div className="avatar">
          <p>Alexis</p>
            <ReactSkinview3d
              className="viewer"
              skinUrl="../assets/images/textures/mojang-classic-cape.png"
              height={300}
              width={120}
              onReady={({ viewer }) => {
                // Add an animation
                viewer.animation = new WalkingAnimation();
                // Enabled auto rotate
                viewer.autoRotate = true;
              }}
            />
          </div>
          <div className="avatar">
          <p>Alexis</p>
            <ReactSkinview3d
              className="viewer"
              skinUrl="../assets/images/textures/mojang-classic-cape.png"
              height={300}
              width={120}
              onReady={({ viewer }) => {
                // Add an animation
                viewer.animation = new WalkingAnimation();
                // Enabled auto rotate
                viewer.autoRotate = true;
              }}
            />
          </div>
          <div className="avatar">
          <p>Alexis</p>
            <ReactSkinview3d
              className="viewer"
              skinUrl="../assets/images/textures/mojang-classic-cape.png"
              height={300}
              width={120}
              onReady={({ viewer }) => {
                // Add an animation
                viewer.animation = new WalkingAnimation();
                // Enabled auto rotate
                viewer.autoRotate = true;
              }}
            />
          </div>
          <div className="avatar">
          <p>Alexis</p>
            <ReactSkinview3d
              className="viewer"
              skinUrl="../assets/images/textures/mojang-classic-cape.png"
              height={300}
              width={120}
              onReady={({ viewer }) => {
                // Add an animation
                viewer.animation = new WalkingAnimation();
                // Enabled auto rotate
                viewer.autoRotate = true;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
