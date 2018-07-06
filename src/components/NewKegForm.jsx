import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewKegForm(props){
  let _name = null;
  let _brewery = null;
  let _type = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brewery: _brewery.value,
      type: _type.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value,
      timeOpen: new Moment()
    });
    _name.value = '';
    _brewery.value = '';
    _type.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
  }

  return (
    <div>
      <style jsx>{`
        container {
          text-align: center;
        }
      `}</style>
      <div className="container">
        <div className="form-group">
          <form className="row" onSubmit={handleNewKegSubmission}>
            <input className="form-control w-25"
              type='text'
              id='name'
              placeholder='Beer Name:'
              ref={(input) => {_name = input;}}/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='brewery'
              placeholder='Brewery:'
              ref={(input) => {_brewery = input;}}/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='type'
              placeholder='Beer Type:'
              ref={(input) => {_type = input;}}/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='abv'
              placeholder='Beer Abv:'
              ref={(input) => {_abv = input;}}/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='price'
              placeholder='Beer Price:'
              ref={(input) => {_price = input;}}/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='remaining'
              placeholder='Pints Remaining:'
              ref={(input) => {_remaining = input;}}/>
            <button type='submit' className="btn btn-secondary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
