import "./App.css";
import Landingpage from "../src/Components/landingpage/Landingpage.js";
import Firstpage from "./Components/firstpage/Firstpage";
import Ham from "./Components/ham/Ham";

function App() {
  return (
    <div className="parent">
      <Landingpage />
      <Firstpage />
      <Ham />
    </div>
  );
}
export default App;
