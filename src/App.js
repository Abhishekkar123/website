import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import Alert from './Component/Alert';

let name="abc";
function App() {
  const [dark, setDark] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (mess, type) => {
    setAlert({
      msg: mess,
      type: type
    });
    setTimeout(()=>{
    setAlert(null)
    },3000)
  };

  const toggleMode = () => {
    if (dark === 'light') {
      setDark('dark');
      showAlert("Dark mode is enabled", "success");
    } else {
      setDark('light');
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" dark={dark} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm  showAlert={showAlert} heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
