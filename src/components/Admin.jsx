import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail';

function Admin(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null) {
    optionalSelectedKegContent = <KegDetail selectedKeg={props.kegList[props.selectedKeg]} />;
  }
  return (
    <div>
      <style jsx>{`

      `}</style>
      <div className='container text-center'>
        <h2 className='display-4'>Admin</h2>
        {optionalSelectedKegContent}
        <KegList
          kegList={props.kegList}
          currentRouterPath={props.currentRouterPath}
          onKegSelection={props.onKegSelection} />
      </div>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Admin;
