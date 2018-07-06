import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedKeg.name} - {props.selectedKeg.brewery}</h1>
      <h2>Tapped {props.selectedKeg.formattedWaitTime} ago</h2>
      <h4>Abv: {props.selectedKeg.abv}%</h4>
      <h4>Price: ${props.selectedKeg.price}</h4>
      <h4>Pints remaining in keg: {props.selectedKeg.remaining}</h4>
      <hr/>
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;
