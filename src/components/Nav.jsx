import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <style global jsx>{`
        .navbar {
          background-color: grey;
          height: 45px;
          opacity: 0.5;
        }
        .navbar:hover {
          opacity: 1;
        }
        .btn {
          color: #fff;
        }
      `}</style>
      <nav className="navbar navbar-fixed-top">
        <Link className="btn btn-outline-secondary" to="/">Home</Link> | <Link className="btn btn-outline-secondary" to="/newkeg">Enter New Keg</Link> | <Link className="btn btn-outline-secondary" to="/admin">Admin</Link>
      </nav>
    </div>
  );
}

export default Nav;
