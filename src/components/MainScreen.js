import React from 'react';
import { connect } from 'react-redux';


 
class MainScreen extends React.Component{
        
       render()
       {
           return(
            <div className="main-screen">
              <img style={{height:220,width:213}} src="https://s4827.pcdn.co/wp-content/uploads/2018/03/white_ipad_wallpaper_2.jpg" alt="screen-wallpaper"/>
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