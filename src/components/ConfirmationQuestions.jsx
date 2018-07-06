import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return (
    <div>
      <style jsx>{`

      `}</style>
      <p>Please confirm that your entry is accurate.</p>
      <button className='header-btn btn btn-light' onClick={props.onTroubleShootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleShootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
