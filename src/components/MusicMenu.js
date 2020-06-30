import React from 'react';
import { connect } from 'react-redux';



 
class MusicMenu extends React.Component{
        
       render()
       {
           return(
            <div className="menu" style={styles.menu}>
                <div className="menu-items">
                    
                    {(this.props.activeSong==='song1' && this.props.activeMenu==='music' && this.props.play==='') && <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.active} >song1</p>
                    <p style={styles.para2}>song2</p>
                    <p style={styles.para2}>song3</p>
                    <p style={styles.para2}>song4</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='song2' && this.props.activeMenu==='music' && this.props.play==='') && <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2} >song1</p>
                    <p style={styles.active}>song2</p>
                    <p style={styles.para2}>song3</p>
                    <p style={styles.para2}>song4</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='song3' && this.props.activeMenu==='music' && this.props.play==='') && <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2} >song1</p>
                    <p style={styles.para2}>song2</p>
                    <p style={styles.active}>song3</p>
                    <p style={styles.para2}>song4</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='song4' && this.props.activeMenu==='music' && this.props.play==='') && <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2} >song1</p>
                    <p style={styles.para2}>song2</p>
                    <p style={styles.para2}>song3</p>
                    <p style={styles.active}>song4</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='back' && this.props.activeMenu==='music' && this.props.play==='') && <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2} >song1</p>
                    <p style={styles.para2}>song2</p>
                    <p style={styles.para2}>song3</p>
                    <p style={styles.para2}>song4</p>
                    <p style={styles.active}>Back</p>
                    </div>
                    }
                    {(this.props.play==='song1' && this.props.activeSong==='song1' ) && <div>
                    <p style={styles.para}>SONG1</p>
                    </div>
                    } 
                    {(this.props.play==='song2' && this.props.activeSong==='song2') && <div>
                    <p style={styles.para}>SONG2</p>
                    </div>
                    }  
                    {(this.props.play==='song3' && this.props.activeSong==='song3') && <div>
                    <p style={styles.para}>SONG3</p>
                    </div>
                    } 
                    {(this.props.play==='song4' && this.props.activeSong==='song4') && <div>
                    <p style={styles.para}>SONG4</p>
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
    activeSong:state.activeSong,
    homepage:state.homepage,
    coverflow:state.coverflow,
    game:state.game,
    music:state.music,
    setting:state.setting,
    menu:state.menu,
    menuItems:state.menuItems,
    activeMenu:state.activeMenu,
    play:state.play

  }
}
const connectedMusicMenuComponent=connect(callback)(MusicMenu);
export default connectedMusicMenuComponent;