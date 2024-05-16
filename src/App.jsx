import "./App.css";
import ReactSkinview3d from "react-skinview3d";

function App() {
  return (
    <>
      <h1>TEST</h1>

      <ReactSkinview3d
        skinUrl="textures/skin1.png"
        capeUrl="textures/mojang-classic-cape.png"
        height="200"
        width="200"
      />
    </>
  );
}

export default App;
