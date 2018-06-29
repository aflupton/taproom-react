import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <div>
      <style global jsx>{`
        .issue {
          font-style: italic;
        }
        .subheader {
          font-size: 16pt;
        }
      `}</style>
      <h3 className="subheader">{props.kegName} - {props.kegType}</h3>
      <p className="issue">{props.kegAbv}</p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  kegName: PropTypes.string.isRequired,
  kegType: PropTypes.string.isRequired,
  kegAbv: PropTypes.string.isRequired
};
export default Keg;
