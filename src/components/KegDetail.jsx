import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  return (
    <div className='card'>
      <style jsx>{`
        .card {
          background-color: #e3adb5;
          padding: 10px;
        }
        .card:hover {
          background-color: #f0b892;
        }
      `}</style>
      <h1>{props.selectedKeg.name} - {props.selectedKeg.brewery}</h1>
      <h2>Tapped {props.selectedKeg.formattedWaitTime} ago</h2>
      <h4>Abv: {props.selectedKeg.abv}%</h4>
      <h4>Price: ${props.selectedKeg.price}</h4>
      <h4>Pints remaining in keg: {props.selectedKeg.remaining}</h4>
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;
