import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const LINKS = [
    { to: '/', text: 'Go to home' },
    { to: '/starred', text: 'Go to starred' },
  ];
  return (
    <ul>
      {LINKS.map(item => {
        return (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
