import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() =>
      {
        setalert(null);
      }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      //document.title = "TextUtils - Dark mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install textutils now";
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      //document.title = "TextUtils - Light mode";
    }
    
  }
  return (
    <>
    {/*<Router>*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      {/*<switch>
        <Route exact path='/about'>
          <About/>
        </Route>
  <Route exact path='/'>*/}
          <TextForm showAlert={showAlert} headings="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>
        {/*</Route>
      </switch>*/}
    </div>
    {/*</Router>*/}
    </>
  
    
  );
}

export default App;
