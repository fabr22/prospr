import "./App.css";

import Competititon from "./components/competition/competition";

function App() {
  return (
    <div className="App">
      <h1 className="title">
        Our Lucky <span className="specialWord">Winners</span>
      </h1>
      <Competititon />
    </div>
  );
}

export default App;
