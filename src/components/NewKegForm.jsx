import React from 'react';
import { Link } from 'react-router-dom';

function NewKegForm(){
  return (
    <div>
      <style jsx>{`
        form {
          margin-left: 20px;
        }
      `}</style>
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
  );
}

export default NewKegForm;
