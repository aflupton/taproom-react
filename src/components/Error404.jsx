import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
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
      <div className='container text-center'>
        <h3>The route '{props.location.pathname}' you are looking for is not available.</h3>
        <h4>Would you like to return <Link to="/">home</Link> instead?</h4>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
