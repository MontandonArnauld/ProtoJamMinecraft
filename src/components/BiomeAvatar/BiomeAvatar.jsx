import "./BiomeAvatar.css";

import ReactSkinview3d from "react-skinview3d";
function BiomeAvatar({ data }) {
  // Accéder à la première entrée du tableau de données

  return (
    <div className="avatar_container">
      <div className="avatar_card">
        <h2 className="avatar_title">{data.title}</h2>
        <p>{data.avatarName}</p>
        <ReactSkinview3d
          skinUrl="textures/skin1.png"
          capeUrl="textures/mojang-classic-cape.png"
          height="200"
          width="200"
        />
        <p>{data.avatarText}</p>
      </div>
    </div>
  );
}
export default BiomeAvatar;
