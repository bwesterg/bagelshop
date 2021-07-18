import React, { Component } from 'react';
import './App.css';

import BagelList from './BagelList';
import AddNewBagel from './AddNewBagel';
import FilterBox from './FilterBox';


const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    bagels: [],
    isAddNewBagelShowing: false,
    isEditingBagel: false,
    searchTerm: "",
  }
  
  filteredBagels = () => this.state.bagels
    .filter(bagel => bagel.name && bagel.rating)
    .filter(bagel => {
      return bagel.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
  })

  updateSearchTerm = event => {
    this.setState({
        searchTerm: event.target.value,
    })
}

  componentDidMount(){
    const bagelsURL = `${BASE_URL}/bagels`;
    fetch(bagelsURL)
    .then(response => response.json())
    .then(bagels => {
      this.setState({ bagels })
    })
  }
  
  deleteBagel = id => {
    fetch(`${BASE_URL}/bagels/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(() => {
      this.setState({
        bagels: this.state.bagels.filter(bagel => bagel.id !== id)
      })
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

  modifyBagel = bagel => {
    fetch(`${BASE_URL}/bagels`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bagel)
    }).then(response=> response.json())
    .then(editedBagel => {
      this.setState({
        bagels: [...this.state.bagels, editedBagel ],
      })
    })
  }

  toggleAddNewBagel = () => {
    this.setState({
      isAddNewBagelShowing: !this.state.isAddNewBagelShowing
    })
  }

  toggleEditBagel = () => {
    this.setState({
      isEditingBagelShowing: !this.state.isEditingBagelShowing
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Bagel Shop</h1>
        </header>
        <main>
          <FilterBox 
            searchTerm={this.state.searchTerm}
            updateSearchTerm={this.updateSearchTerm}
          />
          <section>
            <h2>Bagels</h2>
              <BagelList 
                bagels={this.filteredBagels()} 
                deleteBagel={this.deleteBagel}
                editBagel={this.editBagel}
              />
          </section>
          <button onClick={this.toggleAddNewBagel}>
              {
                this.state.isAddNewBagelShowing
                ? "Close New Bagel Form"
                : "Add Another Bagel" 
              }  
              </button>
          {
            this.state.isAddNewBagelShowing
              ? <AddNewBagel addBagel={this.addBagel} />
              : null
          }

          {/* // */}
          {/* <button onClick={this.toggleEditingBagel}>
              {
                this.state.isEditingBagelShowing
                ? "Close Edit Bagel Form"
                : "Edit Bagel" 
              }  
              </button>
          {
            this.state.isEditBagelShowing
              ? <EditBagel editBagel={this.editBagel} />
              : null
          } */}
        </main>
      </div>
    );
  }
}

export default App;
