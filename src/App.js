import React, { Component } from 'react';
import './App.css';
import BagelList from './BagelList';

const backendURL = 'http://localhost:3000';
const bagelsURL = `${backendURL}/bagels`;

class App extends Component {
  // state = {
  //   bagels: [{
  //     type: "Plain",
  //     rating: 6,
  //   }, {
  //     type: "Everything",
  //     rating: 2,
  //   }]
  // }
  state = {
    bagels: []
  }

  componentDidMount(){
    fetch(bagelsURL)
      .then(response => response.json())
      .then(bagels => {
        this.setState({ bagels })
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Bagel Shop</h1>
        </header>
        <main>
          <section>
            <h2>Bagels</h2>
              <BagelList bagels={this.state.bagels} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
