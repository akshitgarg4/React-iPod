import React from 'react';

 
class Header extends React.Component{
        
        date = () => {
            var today = new Date();
            var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            var dateT = date;
            return dateT;
        }
        time = () => {
            var today = new Date();
            var min='0';
            if(today.getMinutes()<10)
            {
                min=min+today.getMinutes();
            }
            else{
                min=today.getMinutes();
            }
            var time = today.getHours() + ":" + min;
            var Time =time;
            return Time;
       }
       render()
       {
           return(
            <div  className="header">
                <p style={{paddingLeft:14,display:'inline-block',margin:2}}>{this.date()}</p>
                <p style={{paddingLeft:100,display:'inline-block',margin:2}}>{this.time()}</p>
            </div>

           )
       }

}

export default Header;