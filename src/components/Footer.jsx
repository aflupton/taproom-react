import React from 'react';

function Footer() {
  return (
    <div>
      <style global jsx>{`
        .footer {
          padding: 10px;
          height: 45px;
          color: #fff;
          background-color: grey;
          opacity: 0.5;
        }
        .footer:hover {
          opacity: 1;
        }
      `}</style>
      <footer className="footer fixed-bottom">
        <div className="container-fluid text-center">
          <p>© 2018, Andrew Lupton</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
