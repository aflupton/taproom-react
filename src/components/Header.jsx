import React from 'react';

function Header() {
  return (
    <div>
      <style global jsx>{`
          h1 {
            padding: 15px;
            padding-top: 25px;
          }
      `}</style>
      <div className="container">
        <h1 className="display-3 text-center">Andrew's Cafe and Tap Room</h1>
        <h5 className="text-center">600 1st Ave, Seattle, WA 98104</h5>
        <hr/>
      </div>
    </div>
  );
}

export default Header;
