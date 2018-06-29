import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  console.log(props);
  return (
    <div>
      <style jsx>{`
        .image {
          margin: 20px;
        }
        div {
          padding-left: 20px;
        }
      `}</style>
      <hr/>
      <hr/>
      <h3>The page you are looking for does not exist!</h3>
      <h4>Would you like to return <Link to="/">home</Link> instead?</h4>

    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
