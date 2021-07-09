import React, { Component } from 'react';
import './App.css';
import BagelList from './BagelList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bagel Shop</h1>
        </header>
        <main>
          <section>
            <h2>Bagels</h2>
              <BagelList />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
