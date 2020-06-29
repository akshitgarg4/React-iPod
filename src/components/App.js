import React from 'react';
import Header from './Header';
import LowerBody from './LowerBody';
import MainScreen from './MainScreen';



function App() {
  
  return (
    <div className="App">
      <div className="ipod">
        <div className="upper-body">
          <Header/>
          <MainScreen/>
        </div>
        <LowerBody/> 
      </div>
    </div>
  );
}

export default App;
