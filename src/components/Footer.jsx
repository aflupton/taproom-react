import React from 'react';

function Footer() {
  return (
    <div>
      <style global jsx>{`
        .footer {
          padding: 10px;
          height: 40px;
          color: #fff;
          background-color: grey;
          opacity: 0.25;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
        .footer:hover {
          opacity: 1;
        }
      `}</style>
      <footer className="footer">
        <div className="container-fluid text-center">
          <p>© 2018, Andrew Lupton</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
