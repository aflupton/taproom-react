import React from 'react';
import Keg from './Keg';


var masterKegList = [
  {
    name: 'Ruby Zozzle',
    brewery: 'Hi-Wheel',
    type: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Tart N Juicy',
    brewery: 'Epic',
    type: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60'
  },
  {
    name: 'Hamm\'s',
    brewery: 'Miller/Coors',
    type: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    name: 'Prismatic',
    brewery: 'Ninkasi',
    type: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    name: 'Juicy Haze',
    brewery: 'New Belgium',
    type: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    name: '8 Hop',
    brewery: 'New Belgium',
    type: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  }
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg
          name={keg.name}
          brewery={keg.brewery}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
