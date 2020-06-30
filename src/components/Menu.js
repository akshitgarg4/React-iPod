import React from 'react';
import { connect } from 'react-redux';
 
class Menu extends React.Component{
       render()
       {
           return(
            <div className="menu" style={styles.menu}>
                <div className="menu-items">
                    <p style={styles.para}>MENU</p>
                    {this.props.activeMenu==='game' && <div><p style={styles.active} >Games</p>
                    <p style={styles.para2}>Music</p>
                    <p style={styles.para2}>Settings</p>
                    <p style={styles.para2}>CoverFlow</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {this.props.activeMenu==='music' && <div><p style={styles.para2} >Games</p>
                    <p style={styles.active}>Music</p>
                    <p style={styles.para2}>Settings</p>
                    <p style={styles.para2}>CoverFlow</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {this.props.activeMenu==='setting' && <div><p style={styles.para2} >Games</p>
                    <p style={styles.para2}>Music</p>
                    <p style={styles.active}>Settings</p>
                    <p style={styles.para2}>CoverFlow</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {this.props.activeMenu==='coverflow' && <div><p style={styles.para2} >Games</p>
                    <p style={styles.para2}>Music</p>
                    <p style={styles.para2}>Settings</p>
                    <p style={styles.active}>CoverFlow</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {this.props.activeMenu==='homepage' && <div><p style={styles.para2} >Games</p>
                    <p style={styles.para2}>Music</p>
                    <p style={styles.para2}>Settings</p>
                    <p style={styles.para2}>CoverFlow</p>
                    <p style={styles.active}>Back</p>
                    </div>
                    }
                        
                    
                </div>
            </div>
           )
       }

}
//css styles
const styles={
    menu:{
        width:'inherit',
        height:'inherit',
        paddingTop:2,
        fontSize:15,
        fontWeight:400,
        paddingLeft:10
    },
    para:{
        textAlign:'center'
    },
    para2:{
        fontSize:15
    },
    active:{
        fontSize:15,
        backgroundColor:'lightgrey'
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
const connectedMenuComponent=connect(callback)(Menu);
export default connectedMenuComponent;