import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pint from '../assets/images/Pint.gif';


function Error404(){
  return (
    <div>
      <style jsx>{`
        .image {
          margin: 10px;
          max-width: 800px;
        }
        div {
          padding-left: 10px;
        }
        h3, h4 {
          margin-left: 10px;
        }
      `}</style>
      <h3>The page you are looking for is still pouring...</h3>
      <img className="image" src={Pint}/>
      <h4>Would you like to return <Link to="/">home</Link> instead?</h4>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
