import './App.css';
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImage";
import {useState} from "react"

function App() {

  const [stage, setStage] = useState(0);

  return (
    <div className="App">
      <LeftContainer stage={stage} setStage={setStage} />
      <RightImage stage={stage} />
    </div>
  );
}

export default App;
