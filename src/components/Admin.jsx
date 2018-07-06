import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail';

function Admin(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null) {
    optionalSelectedKegContent = <KegDetail selectedKeg={props.selectedKeg} />;
  }
  return (
    <div>
      <h2 className='display-4'>Admin</h2>
      {optionalSelectedKegContent}
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.object
};

export default Admin;
