import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';


 
class MainScreen extends React.Component{
        
       render()
       {
           return(
            <div className="main-screen">
              { this.props.homepage && <img style={{height:220,width:213}} src="https://s4827.pcdn.co/wp-content/uploads/2018/03/white_ipad_wallpaper_2.jpg" alt="screen-wallpaper"/>}
              { this.props.coverflow && <img style={{height:220,width:213}} src="https://atlas-content-cdn.pixelsquid.com/stock-images/file-folder-mdmADN9-600.jpg" alt="screen-wallpaper"/>}
              { this.props.game && <img  style={{height:220,width:213.6}} alt="game-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGSo_B5N60duwmiQIvH7h2vfgkMTfnQuTV1w&usqp=CAU"/>}
              { this.props.music && <img  style={{height:220,width:213.6}} alt="music-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXI51XU7Rf4HOW5WFUTiCcWd2nnOMJdwfJQw&usqp=CAU"/> }
              { this.props.setting && <img  style={{height:220,width:213.6}} alt="setting-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkE2MerngcbgekbcmwDXprfwNlhzhWq5LkrA&usqp=CAU"/> }
              { this.props.menu && <Menu/>}
            </div>
           )
       }

}


//to pass the store items as props used react-redux
function callback(state)
{
  return {
    homepage:state.homepage,
    coverflow:state.coverflow,
    game:state.game,
    music:state.music,
    setting:state.setting,
    menu:state.menu,
    menuItems:state.menuItems,
    activeMenu:state.activeMenu

  }
}
const connectedMainScreenComponent=connect(callback)(MainScreen);
export default connectedMainScreenComponent;