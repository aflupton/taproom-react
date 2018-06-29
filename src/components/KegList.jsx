import React from 'react';
import Keg from './Keg';


var masterKegList = [

];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg
          kegName={keg.kegName}
          kegType={keg.kegType}
          kegAbv={keg.kegAbv}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
