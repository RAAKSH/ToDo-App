import React from 'react';
import { Link } from 'react-router-dom';

export  function PageHeader() {
  return (
  <div style={headerStyle}>
    <h2>To Do App</h2>
        <Link to="/" style={linkStyle}>
          Home
        </Link>{' '}
        |{' '}
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </div>

  );
}

const headerStyle = {
  background: '#008080',
  color: '#00FFFF',
  textAlign: 'center',
  padding: '10px',
  fontSize: '13',
  marginBottom: '10px'
};

const linkStyle = {
  color: "#00FFFF"
};
