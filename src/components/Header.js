import React from 'react';
import Clock from 'react-live-clock';

 
class Header extends React.Component{
        //to show live date and time at top
        date = () => {
            var today = new Date();
            var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            var dateT = date;
            return dateT;
        }
        
       render()
       {
           return(
            <div  className="header">
                <p style={{paddingLeft:14,display:'inline-block',margin:2}}>{this.date()}</p>
                <p style={{paddingLeft:90,display:'inline-block',margin:2}}><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /></p>
            </div>

           )
       }

}

export default Header;