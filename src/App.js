import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import React, { useState} from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
        message : message,
        type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      setModeText("Enable light Mode");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been Enabled! ", "success");
    }else{
      setMode('light');
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled! ", "success");
    }
  }

  return (
    <>
    <Navbar title="TextUtil" aboutText="About us" mode={mode} togglemode={togglemode} modeText={modeText}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Place your Text to analyze." mode={mode}/>
    </div>
    {/* <About /> */}
    </>
  );
}

export default App;
