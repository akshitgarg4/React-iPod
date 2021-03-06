import React from 'react';
import { connect } from 'react-redux';
import {pause,play} from '../actions';

class MusicMenu extends React.Component{
    
       render()
       {
           return(
            <div className="menu" style={styles.menu}>
                <div className="menu-items">
                    
                    {(this.props.activeSong==='song1' && 
                    this.props.activeMenu==='music' && 
                    this.props.play==='') &&
                    <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.active} >Pachtaoge</p>
                    <p style={styles.para2}>Nikle Currant</p>
                    <p style={styles.para2}>Tere Te</p>
                    <p style={styles.para2}>Glorious Gallan</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='song2'
                     && this.props.activeMenu==='music'
                      && this.props.play==='') && 
                    <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2} >Pachtaoge</p>
                    <p style={styles.active}>Nikle Currant</p>
                    <p style={styles.para2}>Tere Te</p>
                    <p style={styles.para2}>Glorious Gallan</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='song3' && 
                    this.props.activeMenu==='music' && 
                    this.props.play==='') && 
                    <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2} >Pachtaoge</p>
                    <p style={styles.para2}>Nikle Currant</p>
                    <p style={styles.active}>Tere Te</p>
                    <p style={styles.para2}>Glorious Gallan</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='song4' && 
                    this.props.activeMenu==='music' &&
                     this.props.play==='') && 
                    <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2}>Pachtaoge</p>
                    <p style={styles.para2}>Nikle Currant</p>
                    <p style={styles.para2}>Tere Te</p>
                    <p style={styles.active}>Glorious Gallan</p>
                    <p style={styles.para2}>Back</p>
                    </div>
                    }
                    {(this.props.activeSong==='back'
                     && this.props.activeMenu==='music'
                      && this.props.play==='') && 
                    <div>
                    <p style={styles.para}>SONGS</p>
                    <p style={styles.para2} >Pachtaoge</p>
                    <p style={styles.para2}>Nikle Currant</p>
                    <p style={styles.para2}>Tere Te</p>
                    <p style={styles.para2}>Glorious Gallan</p>
                    <p style={styles.active}>Back</p>
                    </div>
                    }
                    {(this.props.play==='song1'
                     && this.props.activeSong==='song1' ) &&
                    <div style={styles.container}>
                    <p style={styles.para}>Pachtaoge</p>
                    <img style={styles.img} alt="song-img" src="arijit.jpg"/>
                    <audio id='audio'  style={styles.audio} src="./songs/Pachtaoge.mp3" controls loop autoPlay onPlay={()=>{this.props.dispatch(play());}} onPause={()=>{this.props.dispatch(pause());}}></audio>
                    
                    </div>
                    } 
                    {(this.props.play==='song2' && 
                    this.props.activeSong==='song2') && 
                    <div style={styles.container}>
                    <p style={styles.para}>Nikle Currant</p>
                    <img style={styles.img} alt="song-img" src="neha.jpg "/>
                    <audio id='audio' style={styles.audio} src="./songs/Nikle currant.mp3" controls loop  autoPlay onPlay={()=>{this.props.dispatch(play());}} onPause={()=>{this.props.dispatch(pause());}}></audio>
                    </div>
                    }  
                    {(this.props.play==='song3' && 
                    this.props.activeSong==='song3')
                     && <div style={styles.container}>
                    <p style={styles.para}>Tere Te</p>
                    <img style={styles.img} alt="song-img" src="guru.jpg"/>
                    <audio id='audio' style={styles.audio} src="./songs/Tere te.mp3 " controls loop  autoPlay onPlay={()=>{this.props.dispatch(play());}} onPause={()=>{this.props.dispatch(pause());}}></audio>
                    </div>
                    } 
                    {(this.props.play==='song4' && 
                    this.props.activeSong==='song4') && 
                    <div style={styles.container}>
                    <p style={styles.para}>Glorious Gallan</p>
                    <img style={styles.img} alt="song-img" src="diljit.jpg "/>
                    <audio id='audio' style={styles.audio} src="./songs/Glorious gallan.mp3" controls loop  autoPlay onPlay={()=>{this.props.dispatch(play());}} onPause={()=>{this.props.dispatch(pause());}}></audio>
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
        //paddingTop:2,
        fontSize:18,
        fontWeight:400,
        //paddingLeft:10
    },
    para:{
        textAlign:'center'
    },
    para2:{
        fontSize:16,
        paddingLeft:10
    },
    active:{
        fontSize:16,
        backgroundColor:'lightgrey',
        paddingLeft:10
    },
    audio:
    {
        width:250,
        height:22,
        backgroundColor:'transparent',
        border:'none',
        outline:'none'
    },
    img:{
        
        width:160,
        height:120,
        paddingLeft:22
    },
    container:
    {
        width:213.59,
        height:220,
        backgroundColor:' #f5f1f1',
        overflow:'hidden'
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