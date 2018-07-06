import React from 'react';
import Header from './Header';
import Nav from './Nav';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import Admin from './Admin';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
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
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    Object.keys(newMasterKegList).forEach(kegId => {
      newMasterKegList[kegId].formattedWaitTime = (newMasterKegList[kegId].timeOpen).fromNow(true);
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleAddingNewKegToList(newKeg) {
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKeg.id]: newKeg
    });
    newMasterKegList[newKeg.id].formattedWaitTime = newMasterKegList[newKeg.id].timeOpen.fromNow(true);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId});
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
          <Route
            exact path='/'
            render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route
            path='/newkeg'
            render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route
            path='/admin'
            render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg} />} />
          <Route
            component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
