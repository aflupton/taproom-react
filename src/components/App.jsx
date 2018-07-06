import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import Footer from './Footer';
import Nav from './Nav';
import Admin from './Admin';


class App extends React.component {
  constructor
  var myStyledComponentStyles = {

  };
  return (
    <div style={myStyledComponentStyles}>
      <style global jsx>{`
          body {
            background-color: #F08080;
            display: block;
            fontFamily: sans-serif;
          }
    `}</style>
      <Nav/>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKegForm} />
        <Route path='/admin' />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
