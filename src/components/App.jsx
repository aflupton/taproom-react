import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Image from './Image';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import Admin from './Admin';
import Footer from './Footer';
import { v4 } from 'uuid';
// import PropTypes from 'prop-types';
// import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
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
    var newKegId = v4();
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    newMasterKegList[newKegId].formattedWaitTime = newMasterKegList[newKegId].timeOpen.fromNow(true);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId});
  }

  render() {
    var myStyledComponentGlobal = {
      display: 'block',
      fontFamily: 'sans-serif'
    };
    return (
      <div style={myStyledComponentGlobal}>
        <style global jsx>{`
            body {
              background-color: #faebd7;
              padding-bottom: 100px;
            }
      `}</style>
        <Nav/>
        <Header/>
        <Image/>
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
              selectedKeg={this.state.selectedKeg}
            />} />
          <Route
            component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
