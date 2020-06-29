import React from 'react';
import { connect } from 'react-redux';


 
class MainScreen extends React.Component{
        
       render()
       {
           return(
            <div className="main-screen">
            </div>
           )
       }

}
function callback(state)
{
  return {}
}
const connectedMainScreenComponent=connect(callback)(MainScreen);
export default connectedMainScreenComponent;