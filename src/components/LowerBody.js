import React from 'react';
import { connect } from 'react-redux';
//var ZingTouch = require('zingtouch');
import ZingTouch from 'zingtouch';
import {changeMenu1,changeMenu2,mainMenu,selectOpt} from '../actions';


 
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
                console.log('clockwise');
                //console.log(this.change_in_angle);
                this.props.dispatch(changeMenu1(this.props.activeMenu));
                this.change_in_angle=0;

            }
            else if(this.change_in_angle<-30)
            {
                console.log('anti-clockwise');
                this.props.dispatch(changeMenu2(this.props.activeMenu));
                //console.log(this.change_in_angle);
                this.change_in_angle=0;
            }
        });
        //to stop the change in menu when it is rotated in inner circle
        zt.bind(document.getElementsByClassName('inner-circle')[0], 'rotate', (event)=>
        {
            event.stopPropagation();
        });

    }
        
       render()
       {
           return(
            <div className="lower-body">
                <div className="outer-circle ">
                    <button style={styles.button} onClick={()=>{this.props.dispatch(mainMenu());}}>MENU</button>
                    <i className="fas fa-backward" style={styles.backwards}></i>
                    <i className="fas fa-forward"  style={styles.forwards}></i>
                    <p style={styles.play}><i className="fas fa-play" ></i></p>
                    <div className="inner-circle">
                    <p style={styles.select} onClick={()=>{this.props.dispatch(selectOpt(this.props.activeMenu));}}>SELECT</p>
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
        paddingTop:40,
        paddingLeft:18,
        color:'#848383',
        cursor:'pointer'
    },
    forwards:
    {
        paddingLeft:112,
        color:'#848383',
        cursor:'pointer'
    },
    play:
    {
        textAlign:"center",
        paddingTop:30,
        color:'#848383',
        cursor:'pointer'
    },
    select:
    {
        textAlign:"center",
        padding:16,
        color:'rgb(104, 104, 104)',
        cursor:'pointer'
    }
}
function callback(state)
{
  return {
    coverflow:state.coverflow,
    game:state.game,
    music:state.music,
    setting:state.setting,
    menu:state.menu,
    menuItems:state.menuItems,
    activeMenu:state.activeMenu

  }
}
const connectedLowerBodyComponent=connect(callback)(LowerBody);
export default connectedLowerBodyComponent;