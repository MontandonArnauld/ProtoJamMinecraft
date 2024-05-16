import "./BiomeAvatar.css";

import ReactSkinview3d from "react-skinview3d";
function BiomeAvatar({ data }) {
  // Accéder à la première entrée du tableau de données

  return (
    <div className="avatar_container">
      <div className="avatar_description">
        <img src={data.titleImg} className="avatar_title" alt="Titre de l'image" />
        <div className="avatar_card">
          <div className="avatar_card_skin">
            <p className="avatar_skin_title">{data.avatarName}</p>
            <ReactSkinview3d
              skinUrl="../assets/images/textures/skin1.png"
              capeUrl="../assets/images/textures/mojang-classic-cape.png"
              height="200"
              width="200"
            />
          </div>
          <p>{data.avatarText}</p>
        </div>
      </div>
    </div>
  );
}
export default BiomeAvatar;
