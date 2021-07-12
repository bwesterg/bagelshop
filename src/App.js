import React, { Component } from 'react';
import './App.css';

import BagelList from './BagelList';
import AddNewBagel from './AddNewBagel';

// const backendURL = 'http://localhost:3000';
const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    bagels: [],
    isAddNewBagelShowing: false,
  }
  
  componentDidMount(){
    const bagelsURL = `${BASE_URL}/bagels`;
    fetch(bagelsURL)
    .then(response => response.json())
    .then(bagels => {
      this.setState({ bagels })
    })
  }
  
  postBagel = bagel => {
    fetch(`${BASE_URL}/bagels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bagel)
    }).then(response=> response.json())
    .then(bagel => {
      this.setState({
        bagels: [...this.state.bagels, bagel ],
      })
    })
  }

  toggleAddNewBagel = () => {
    this.setState({
      isAddNewBagelShowing: !this.state.isAddNewBagelShowing
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
          <button onClick={this.toggleAddNewBagel}>
              {
                this.state.isAddNewBagelShowing
                ? "Close New Bagel Form"
                : "Add Another Bagel" 
              }  
                {/* Add Add Another Bagel */}
              </button>
          {
            this.state.isAddNewBagelShowing
              ? <AddNewBagel addBagel={this.addBagel} />
              : null
          }
        </main>
      </div>
    );
  }
}

export default App;
