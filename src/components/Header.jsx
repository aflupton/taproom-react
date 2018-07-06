import React from 'react';
import Pub from '../assets/images/Pub.jpg';

function Header() {
  return (
    <div>
      <style global jsx>{`
          h1 {
            padding: 15px;
            padding-top: 25px;
          }
          img {
            padding: 25px;
          }
      `}</style>
      <div className="container-fluid">
        <h1 className="display-3 text-center">Andrew's Cafe and Tap Room</h1>
        <h5 className="text-center">600 1st Ave, Seattle, WA 98104</h5>
        <hr/>
        <div className="container">
          <img className="img-fluid" src={Pub}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
