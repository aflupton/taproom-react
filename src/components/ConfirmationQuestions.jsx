import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return (
    <div>
      <style jsx>{`
          button {
            color: black;
          }
      `}</style>
      <div className='text-center container'>
        <h5>Do you want to enter a new Keg?</h5>
        <button className='header-btn btn btn-light' onClick={props.onTroubleShootingConfirmation}>Yes</button>
      </div>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleShootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
