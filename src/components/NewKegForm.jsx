import React from 'react';
import { Link } from 'react-router-dom';

function NewKegForm(){
  return (
    <div>
      <style jsx>{`
        container {
          text-align: center;
        }
      `}</style>
      <div className="row">
        <div className="container col-md-12">
          <form className="form-group">
            <input className="form-control w-25"
              type='text'
              id='name'
              placeholder='Beer Name:'/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='type'
              placeholder='Beer Type:'/>
            <br/>
            <input className="form-control w-25"
              type='text'
              id='abv'
              placeholder='Beer ABV:'/>
            <br/>
            <Link className="btn btn-secondary" to="/">Submit</Link>
          </form>
        </div>
      </div>

    </div>
  );
}

export default NewKegForm;
