import React from 'react';
import PropTypes from 'prop-types';
// import Keg from './Keg';

function ConfirmationQuestions(props) {
  return (
    <div>
      <style jsx>{`

      `}</style>
      <p>Have you entered the correct values for your new Keg entry?</p>
      <button className='header-btn btn btn-light' onClick={props.onTroubleShootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleShootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
