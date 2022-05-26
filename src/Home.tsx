import { useState } from 'react';
import { CardUser } from './components/CardUser';
import Header from './components/Header';
import List from './components/Table';
import { Footer } from './Footer';

function Home() {
  return (
    <div className="App bg-dark-950">
      <Header />
      <body className="App-body">
        <CardUser />
        <h2>Some dev Examples</h2>
        <List />
      </body>
      <Footer />
    </div>
  );
}

export default Home;
