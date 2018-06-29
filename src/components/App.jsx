import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';


function App(){
  var myStyledComponentStyles = {
    backgroundColor: '#F08080',
    fontFamily: 'sans-serif',
  };
  return (
    <div style={myStyledComponentStyles}>
      <style>{`
          div {
            padding: 10px;
          }
    `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
