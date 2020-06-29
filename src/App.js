import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="ipod">
        <div className="lower-body">
          <div className="outer-circle ">
            <p style={{textAlign:"center",paddingTop:15,color:'#848383'}} >MENU</p>
            <i class="fas fa-fast-backward" style={{display:"inline-block", paddingTop:26,paddingLeft:18,color:'#848383'}}></i>
            <i class="fas fa-fast-forward"  style={{paddingLeft:112,color:'#848383'}}></i>
            <p style={{textAlign:"center",paddingTop:30,color:'#848383'}}><i class="fas fa-play" ></i></p>
            <div className="inner-circle">
              <p style={{textAlign:"center",padding:16,color:'rgb(104, 104, 104)'}}>SELECT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
