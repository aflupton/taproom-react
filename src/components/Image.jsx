import React from 'react';
import Pub from '../assets/images/Pub.jpg';

function Image() {
  return (
    <div>
      <style global jsx>{`
          .image {
            max-width: 1024px;
          }
      `}</style>
      <div className="container text-center">
        <img className="image img-fluid" src={Pub}/>
      </div>
    </div>
  );
}

export default Image;
