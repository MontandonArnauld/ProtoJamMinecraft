import "./BiomeAvatar.css";
import React from "react";
import ReactSkinview3d from "react-skinview3d";
import { WalkingAnimation } from "skinview3d";

function BiomeAvatar({ data }) {
  // Vérifiez le chemin de l'image
  console.log("Image path:", data.titleImg);

  return (
    <div className="avatar_container">
      <div className="avatar_description">
        <div className="avatar_title">
          <img src={data.titleImg} className="avatar_title" alt="Titre de l'image" />
        </div>
        <div className="avatar_card">
          <div className="avatar_card_skin">
            <p className="avatar_skin_title">{data.avatarName}</p>
            <ReactSkinview3d
              className="viewer"
              skinUrl="../assets/images/textures/skin1.png"
              capeUrl="../assets/images/textures/mojang-classic-cape.png"
              height={300}
              width={150}
              onReady={({ viewer }) => {
                // Add an animation
                viewer.animation = new WalkingAnimation();
                // Enabled auto rotate
                viewer.autoRotate = true;
              }}
            />
          </div>
          <p>{data.avatarText}</p>
        </div>
      </div>
    </div>
  );
}

export default BiomeAvatar;
