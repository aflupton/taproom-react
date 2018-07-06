import React from 'react';
import Pub from '../assets/images/Pub.jpg';

function Image() {
  return (
    <div>
      <style global jsx>{`
          .img {

          }
      `}</style>
      <div className="container">
        <img className="img img-fluid" src={Pub}/>
      </div>
    </div>
  );
}

export default Image;
