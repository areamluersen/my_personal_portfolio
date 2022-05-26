import React from 'react';
import { RedirectButton } from './RedirectButton';

// Add option to return home
const Header: React.FC = () => {
  return (
    <header className="App-header bg-dark-850 text-sm bg-opacity-95">
      <p>{`About | Projects | Contact`}</p>
      <RedirectButton name="Home" redirectsTo="/" />
    </header>
  );
};

export default Header;
