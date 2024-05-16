import "./App.css";
import { MainProvider } from "./contexts/MainContext";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
    <MainProvider>
        <Outlet />
    </MainProvider>
    </>
  );
}

export default App;
