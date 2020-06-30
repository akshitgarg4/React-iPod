import React from 'react';

//imported components
import Header from './Header';
import LowerBody from './LowerBody';
import MainScreen from './MainScreen';
import { connect } from 'react-redux';



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

//to pass the store items as props used react-redux
function callback(state)
{
  return {}
}
const connectedAppComponent=connect(callback)(App);
export default connectedAppComponent;
