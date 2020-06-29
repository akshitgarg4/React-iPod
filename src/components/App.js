import React from 'react';
import Header from './Header';
import LowerBody from './LowerBody';


function App() {
  
  return (
    <div className="App">
      <div className="ipod">
        <div className="upper-body">
          <Header/>
          <div className="main-screen">
            
          </div>
        </div>
        <LowerBody/> 
      </div>
    </div>
  );
}

export default App;
