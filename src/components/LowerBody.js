import React from 'react';
import { connect } from 'react-redux';


 
class LowerBody extends React.Component{
        
       render()
       {
           return(
            <div className="lower-body">
                <div className="outer-circle ">
                    <button style={styles.button}>MENU</button>
                    <i class="fas fa-backward" style={styles.backwards}></i>
                    <i class="fas fa-forward"  style={styles.forwards}></i>
                    <p style={styles.play}><i class="fas fa-play" ></i></p>
                    <div className="inner-circle">
                    <p style={styles.select}>SELECT</p>
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
  return {}
}
const connectedLowerBodyComponent=connect(callback)(LowerBody);
export default connectedLowerBodyComponent;