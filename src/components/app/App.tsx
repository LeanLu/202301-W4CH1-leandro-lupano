import "./App.css";
import { Info } from "../info/info";
import { ButtonSelectAll } from "../button-select-all/button-select-all";

function App() {
  return (
    <>
      <div className="container">
        <ButtonSelectAll></ButtonSelectAll>
        <main className="main">
          <Info></Info>
        </main>
      </div>
    </>
  );
}

export default App;
