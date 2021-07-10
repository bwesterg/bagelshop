import React, { Component } from 'react';
import './App.css';
import BagelList from './BagelList';

// const backendURL = 'http://localhost:3000';
const BASE_URL = "http://localhost:3000"
const bagelsURL = `${BASE_URL}/bagels`;

class App extends Component {

  state = {
    bagels: [],
    newBagel: {
      name: "",
      rating: 5,
    }
  }
  
  componentDidMount(){
    fetch(bagelsURL)
    .then(response => response.json())
    .then(bagels => {
      this.setState({ bagels })
    })
  }
  
  // handleNameChange = (event) => {
  //   this.setState({
  //     newBagel: {
  //       ...this.state.newBagel,
  //       name: event.target.value
  //     }
  //   })
  // }
  
  // handleRatingChange = event => {
  //   this.setState({
  //     newBagel: {
  //       ...this.state.newBagel,
  //       rating: event.target.value
  //     }
  //   })
  // }

  handleChange = property => event => {
    const newBagel = this.state.newBagel
    newBagel[property] = event.target.value
    this.setState({ newBagel })
  }
  
  addBagel = event => {
    event.preventDefault()

    const { name, rating } = this.state.newBagel
    fetch(`${BASE_URL}/bagels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, rating })
    }).then(response=> response.json())
    .then(bagel => {
      this.setState({
        bagels: [...this.state.bagels, bagel ],
        newBagel: {
          name: "",
          rating: 5,
        }
      })
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
          <section className="add-bagel">
            <h2>Add a Bagel</h2>
              <form onSubmit={this.addBagel}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={this.state.newBagel.name}
                  onChange={this.handleChange("name")}
                />
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  placeholder="Rating" 
                  value={this.state.newBagel.rating}
                  onChange={this.handleChange("rating")} 

                />
                <input type="submit" value="Add Bagel"/>

              </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
