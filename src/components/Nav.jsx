import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <style global jsx>{`
        .navbar {
          background-color: grey;
          height: 60px;
          opacity: 0.75;
          padding-bottom: 0px;
        }
        .navbar:hover {
          opacity: 1;
        }
        .btn {
          color: #fff;
          margin: 10px;
        }
      `}</style>
      <nav className="navbar navbar-fixed-top">
        <ul>
          <Link className="btn btn-outline-secondary" to="/">Home</Link>
          <Link className="btn btn-outline-secondary" to="/newkeg">Enter New Keg</Link>
          <Link className="btn btn-outline-secondary" to="/admin">Admin</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
