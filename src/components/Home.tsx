import { useState } from 'react';
import { CardUser } from './CardUser';
import Header from './Header';
import List from './Table';
import { Footer } from '../Footer';

function Home() {
  return (
    <div className="App bg-dark-950">
      <Header />
      <div className="App-body">
        <CardUser />
        <h2>Some dev Examples</h2>
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
