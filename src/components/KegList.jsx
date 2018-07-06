import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props){
  return (
    <div>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          name={keg.name}
          brewery={keg.brewery}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          formattedWaitTime={keg.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={keg.id}
          onKegSelection={props.onKegSelection} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegList;
