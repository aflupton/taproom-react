import React from 'react';

function NewKegForm(){
  return (
    <div>
      <style jsx>{`
        input {
          padding: 5px;
          padding-left: 0px;
          margin-right: 10px;
          margin-left: 0px;
          font-size: 10pt;
        }
        button {
          padding: 5px;
          margin-left: 0px;
          border: solid lightgrey 3px;
        }
        button:hover {
          background-color: grey;
          color: white;
        }
      `}</style>
      <form className="form">
        <input
          type='text'
          id='name'
          placeholder='Beer Name:'/>
        <input
          type='text'
          id='type'
          placeholder='Beer Type:'/>
        <input
          type='text'
          id='abv'
          placeholder='Beer ABV:'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewKegForm;
