import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId];
        return <Keg
          name={keg.name}
          brewery={keg.brewery}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          formattedWaitTime={keg.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={keg.id}
          kegId={keg.id}
          onKegSelection={props.onKegSelection} />;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegList;
