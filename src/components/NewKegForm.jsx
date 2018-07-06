import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
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
    props.onNewKegCreation({name: _name.value, brewery: _brewery.value, type: _type.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, id: v4(), timeOpen: new Moment()});
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
      <div className="row">
        <div className="container col-md-12">
          <form className="form-group" onSubmit={handleNewKegSubmission}>
            <input className="form-control w-25"
              type='text'
              id='name'
              placeholder='Beer Name:'/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='brewery'
              placeholder='Brewery:'/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='type'
              placeholder='Beer Type:'/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='abv'
              placeholder='Beer Abv:'/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='price'
              placeholder='Beer Price:'/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='remaining'
              placeholder='Pints Remaining:'/>
            <Link className="btn btn-secondary" to="/">Submit</Link>
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
