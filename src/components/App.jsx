import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import Footer from './Footer';
import Nav from './Nav';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateKegElapsedWaitTime() {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.forEach((keg) => keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
    );
  }

  handleAddingNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true);
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(keg) {
    this.setState({selectedKeg: keg});
  }

  render() {
    var myStyledComponentGlobal = {

    };
    return (
      <div style={myStyledComponentGlobal}>
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
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/admin' render={(props) => <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg} />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
