import React from 'react';
import { connect } from 'react-redux';
import ZingTouch from 'zingtouch';
import {changeMenu1,changeMenu2,mainMenu,selectOpt,selectOpt2,changeMenuSong1,changeMenuSong2} from '../actions';


 
class LowerBody extends React.Component{
    constructor()
    {
        super();
        this.change_in_angle=0;
    }
    //this will add the event listener to the the outer circle
    componentDidMount()
    {
        var zt=new ZingTouch.Region(document.getElementsByClassName('outer-circle')[0]);
        zt.bind(document.getElementsByClassName('outer-circle')[0], 'rotate', (event)=>
        {
            let dist=event.detail.distanceFromLast;
            this.change_in_angle+=dist;
            if(this.change_in_angle>30)
            {
                //to change the active menu in clockwise direction
                if(this.props.menu)
                {
                    this.props.dispatch(changeMenu1(this.props.activeMenu));
                }
                else{
                    this.props.dispatch(changeMenuSong1(this.props.activeSong));
                }
                
                this.change_in_angle=0;

            }
            else if(this.change_in_angle<-30)
            {
                //to change the active menu in anticlockwise direction
                if(this.props.menu)
                {
                  this.props.dispatch(changeMenu2(this.props.activeMenu));   
                }
                else {
                    this.props.dispatch(changeMenuSong2(this.props.activeSong));
                }
                this.change_in_angle=0;
            }
        });


        //to stop the change in menu when it is rotated in inner circle
        zt.bind(document.getElementsByClassName('inner-circle')[0], 'rotate', (event)=>
        {
            event.stopPropagation();
        });

    }
    changestate =() =>{
        var x=document.getElementById('audio');
        
        if(this.props.isplaying)
        {
            console.log("pause");
            x.pause();
        }
        else{
            console.log("play");
            x.play();
        }
    }
        
       render()
       {
           return(
            <div className="lower-body">
                <div className="outer-circle ">
                    <button style={styles.button} onClick={()=>{this.props.dispatch(mainMenu());}}>MENU</button>
                    
                    <button style={styles.backwards}><i className="fas fa-backward" ></i></button>
                    <button  style={styles.forwards}><i className="fas fa-forward" ></i></button>
                    { !this.props.isplaying && <button style={styles.play} onClick={()=>{this.changestate();}}><i className="fas fa-play"></i></button>}
                    { this.props.isplaying && <button style={styles.play} onClick={()=>{this.changestate();}}><i className="fas fa-pause"></i></button>}
                    <div className="inner-circle">
                    <p style={styles.select} onClick={()=>{
                        if(this.props.menu)
                        {
                            this.props.dispatch(selectOpt(this.props.activeMenu));
                        }
                        else if(this.props.music)
                        {
                            this.props.dispatch(selectOpt2(this.props.activeSong));
                        }
                        else{}
                        }}>SELECT</p>
                    </div>
                </div>
            </div>

           )
       }

}
//css styles
const styles={
    button:
    {
        marginLeft:60,
        outline:'none',
        display:'block',
        backgroundColor:'transparent',
        border:"none",
        paddingTop:20,
        color:'#848383',
        cursor:'pointer'
    },
    backwards:
    {
        display:"inline-block",
        marginTop:40,
        marginLeft:10,
        color:'#848383',
        cursor:'pointer',
        outline:'none',
        border:'none'
    },
    forwards:
    {
        paddingLeft:112,
        color:'#848383',
        cursor:'pointer',
        outline:'none',
        border:'none'
    },
    play:
    {
        marginLeft:80,
        textAlign:"center",
        marginTop:50,
        color:'#848383',
        cursor:'pointer',
        outline:'none',
        border:'none'
    },
    select:
    {
        textAlign:"center",
        padding:16,
        color:'rgb(104, 104, 104)',
        cursor:'pointer'
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
    activeMenu:state.activeMenu,
    activeSong:state.activeSong,
    isplaying:state.isplaying,
    paused:state.paused

  }
}
const connectedLowerBodyComponent=connect(callback)(LowerBody);
export default connectedLowerBodyComponent;