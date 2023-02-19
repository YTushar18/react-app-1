import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import App2 from "./components/CanvasScript";
import Alerts from "./components/Alerts";
import "./index.css";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,typwe) => {
    setAlert({
      msg: message,
      type: type
    })

  }
  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#121212'
      showAlert("Dark mode set!","success")

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode set!","success")
    }
  }
  
  return (
    <>
      
        
        <div className = 'animation'><App2/></div>
        <Navbar className='navbaar' mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
        <Alerts alert={alert}/>
        <div className="container my-3">
          <TextForm heading="Enter your text below..." mode={mode} style={{backgroudColor:mode==='white'?'white':'#121212'}}/>
      </div>
    </>
  );
}

export default App;
