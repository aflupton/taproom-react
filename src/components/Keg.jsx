import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const KegInformation = 
    <div>
      <style global jsx>{`

      `}</style>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr className="text-uppercase text-justify">
              <th>Beer Name</th>
              <th>Brewery</th>
              <th>Style</th>
              <th>Abv</th>
              <th>Price</th>
              <th>Pints Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-justify">
              <td>{props.name}</td>
              <td>{props.brewery}</td>
              <td>{props.type}</td>
              <td>{props.abv}</td>
              <td>{props.price}</td>
              <td>{props.remaining}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onKegSelection({name: props.name, brewery: props.brewery, type: props.type, abv: props.abv, price: props.price, remaining: props.remaining, formattedWaitTime: props.formattedWaitTime});}}>
        {KegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {KegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};
export default Keg;
